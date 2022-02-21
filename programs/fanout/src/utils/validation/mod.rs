use crate::error::ErrorCode;
use crate::state::{Fanout, FanoutMembershipVoucher, MembershipModel};
use anchor_lang::prelude::*;
use anchor_spl::token::TokenAccount;

pub fn assert_derivation(
    program_id: &Pubkey,
    account: &AccountInfo,
    path: &[&[u8]],
    error: Option<ProgramError>,
) -> Result<u8, ProgramError> {
    let (key, bump) = Pubkey::find_program_address(&path, program_id);
    if key != *account.key {
        if error.is_some() {
            let err = error.unwrap();
            msg!("Derivation {:?}", err);
            return Err(err);
        }
        msg!("DerivedKeyInvalid");
        return Err(ErrorCode::DerivedKeyInvalid.into());
    }
    Ok(bump)
}

pub fn assert_owned_by(account: &AccountInfo, owner: &Pubkey) -> ProgramResult {
    if account.owner != owner {
        Err(ErrorCode::IncorrectOwner.into())
    } else {
        Ok(())
    }
}

pub fn assert_membership_model(
    fanout: &Account<Fanout>,
    model: MembershipModel,
) -> Result<(), ProgramError> {
    if fanout.membership_model != model {
        return Err(ErrorCode::InvalidMembershipModel.into());
    }
    Ok(())
}

pub fn assert_fanout_mint_ata(
    mint_holding_account: &AccountInfo,
    fanout: &Pubkey,
    mint: &Pubkey,
) -> Result<u8, ProgramError> {
    assert_derivation(
        &anchor_spl::associated_token::ID,
        &mint_holding_account.to_account_info(),
        &[
            fanout.as_ref(),
            anchor_spl::token::ID.as_ref(),
            mint.as_ref(),
        ],
        Some(ErrorCode::HoldingAccountMustBeAnATA.into()),
    )
}

pub fn assert_shares_distributed(fanout: &Account<Fanout>) -> Result<(), ProgramError> {
    if fanout.total_available_shares != 0 {
        return Err(ErrorCode::SharesArentAtMax.into());
    }
    Ok(())
}

pub fn assert_membership_voucher_valid(
    voucher: &Account<FanoutMembershipVoucher>,
    model: MembershipModel,
) -> Result<(), ProgramError> {
    match model {
        MembershipModel::Wallet | MembershipModel::NFT => {
            if voucher.shares.is_none() || voucher.membership_key.is_none() {
                return Err(ErrorCode::InvalidMembershipVoucher.into());
            }
        }
        MembershipModel::Token => {
            if voucher.shares.is_some()
                || voucher.membership_key.is_some()
                || voucher.amount_at_stake.is_none()
            {
                return Err(ErrorCode::InvalidMembershipVoucher.into());
            }
        }
    }
    Ok(())
}

pub fn assert_holding(
    owner: &AccountInfo,
    token_account: &Account<TokenAccount>,
    mint_info: &AccountInfo,
) -> Result<(), ProgramError> {
    assert_owned_by(mint_info, &spl_token::id())?;
    let token_account_info = token_account.to_account_info();
    assert_owned_by(&token_account_info, &spl_token::id())?;
    if token_account.owner != *owner.key {
        return Err(ErrorCode::IncorrectOwner.into());
    }
    if token_account.amount < 1 {
        return Err(ErrorCode::WalletDoesNotOwnMembershipToken.into());
    }
    if token_account.mint != mint_info.key() {
        return Err(ErrorCode::MintDoesNotMatch.into());
    }
    Ok(())
}