use crate::MembershipModel;
use crate::error::HydraError;
use anchor_lang::prelude::*;

use crate::state::{Fanout, FanoutMembershipVoucher};
use crate::utils::validation::*;

use crate::utils::logic::distribution::{distribute_mint, distribute_native};
use crate::utils::parse_token_account;
use crate::utils::logic::calculation::{calculate_payer_rewards};
use crate::utils::logic::transfer::{transfer_from_mint_holding, transfer_native};


use anchor_spl::token::{Mint, Token, TokenAccount};

#[derive(Accounts)]
#[instruction(distribute_for_mint: bool)]
pub struct DistributeWalletMember<'info> {
    pub payer: Signer<'info>,
    #[account(mut)]
    /// CHECK: Optional Account
    pub member: UncheckedAccount<'info>,
    #[
        account(
        mut,
        address = fanout.authority
        )]
        /// CHECK: Restricted to fanout
    pub authority: UncheckedAccount<'info>,
    #[account(
    mut,
    seeds = [b"fanout-membership", fanout.key().as_ref(), member.key().as_ref()],
    constraint = membership_voucher.membership_key == member.key(),
    bump = membership_voucher.bump_seed,
    )]
    pub membership_voucher: Box<Account<'info, FanoutMembershipVoucher>>,
    #[account(
    mut,
    seeds = [b"fanout-config", fanout.name.as_bytes()],
    bump = fanout.bump_seed,
    )]
    pub fanout: Account<'info, Fanout>,
    #[account(mut)]
    /// CHECK: Could be native or Token Account
    pub holding_account: UncheckedAccount<'info>,
    #[account(mut)]
    /// CHECK: Optional Account
    pub fanout_for_mint: UncheckedAccount<'info>,
    #[account(mut)]
    /// CHECK: Optional Account
    pub fanout_for_mint_membership_voucher: UncheckedAccount<'info>,
    pub fanout_mint: Account<'info, Mint>,
    #[account(mut)]
    /// CHECK: Optional Account
    pub fanout_mint_member_token_account: UncheckedAccount<'info>,
    pub system_program: Program<'info, System>,
    pub rent: Sysvar<'info, Rent>,
    pub token_program: Program<'info, Token>,
    pub payer_token_account: Account<'info, TokenAccount>,
}

pub fn distribute_for_wallet(
    ctx: Context<DistributeWalletMember>,
    distribute_for_mint: bool,
) -> Result<()> {
    let fanout = &mut ctx.accounts.fanout;
    let fanout_info = fanout.to_account_info();
    let membership_voucher = &mut ctx.accounts.membership_voucher;
    let membership_voucher_info = membership_voucher.to_account_info();
    let member = &mut ctx.accounts.member;
    let authority = &mut ctx.accounts.authority;

    let payer_token_account = &mut ctx.accounts.payer_token_account;
    let payer = &mut ctx.accounts.payer;
    assert_owned_by(&fanout_info, &crate::ID)?;
    assert_owned_by(&membership_voucher_info, &crate::ID)?;
    assert_owned_by(&member.to_account_info(), &System::id())?;
    assert_owned_by(&authority.to_account_info(), &System::id())?;

    assert_owned_by(&payer.to_account_info(), &System::id())?;
    assert_owned_by(&payer_token_account.to_account_info(), &ctx.accounts.token_program.key())?;
    assert_membership_model(fanout, MembershipModel::Wallet)?;
    assert_shares_distributed(fanout)?;
    let rewards: u64 = fanout.payer_reward_basis_points | 666;

    let payer_rewards = calculate_payer_rewards(fanout.total_inflow, rewards)?;
    
   
    if distribute_for_mint {
        if payer_rewards > 0 as u64 {

            transfer_from_mint_holding(
                &ctx.accounts.fanout,
                authority.to_account_info(),
                ctx.accounts.token_program.to_account_info(),
                ctx.accounts.payer.to_account_info(),
                payer_token_account.to_account_info(),
                payer_rewards
            )?;
        
        
            
            return Err(HydraError::PayerATANotSupplied.into());
        }

        let membership_key = &ctx.accounts.member.key().clone();
        let member = ctx.accounts.member.to_owned();
        distribute_mint(
            ctx.accounts.fanout_mint.to_owned(),
            &mut ctx.accounts.fanout_for_mint,
            &mut ctx.accounts.fanout_for_mint_membership_voucher,
            &mut ctx.accounts.fanout_mint_member_token_account,
            &mut ctx.accounts.holding_account,
            &mut ctx.accounts.fanout,
            &mut ctx.accounts.membership_voucher,
            ctx.accounts.rent.to_owned(),
            ctx.accounts.system_program.to_owned(),
            ctx.accounts.token_program.to_owned(),
            ctx.accounts.payer.to_account_info(),
            member,
            membership_key,
        )?;
    } else {

        if payer_rewards > 0 {
            transfer_native(
                ctx.accounts.holding_account.to_account_info(),
                ctx.accounts.payer.to_account_info(),
                ctx.accounts.holding_account.lamports(),
                payer_rewards,
            )?;
        }
        distribute_native(
            &mut ctx.accounts.holding_account,
            &mut ctx.accounts.fanout,
            &mut ctx.accounts.membership_voucher,
            ctx.accounts.member.to_owned(),
            ctx.accounts.rent.to_owned(),
        )?;
    }
    Ok(())
}
