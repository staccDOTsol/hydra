/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

type ErrorWithCode = Error & { code: number };
type MaybeErrorWithCode = ErrorWithCode | null | undefined;

const createErrorFromCodeLookup: Map<number, () => ErrorWithCode> = new Map();
const createErrorFromNameLookup: Map<string, () => ErrorWithCode> = new Map();

/**
 * BadArtithmetic: 'Encountered an arithmetic error'
 *
 * @category Errors
 * @category generated
 */
export class BadArtithmeticError extends Error {
  readonly code: number = 0x1770;
  readonly name: string = "BadArtithmetic";
  constructor() {
    super("Encountered an arithmetic error");
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, BadArtithmeticError);
    }
  }
}

createErrorFromCodeLookup.set(0x1770, () => new BadArtithmeticError());
createErrorFromNameLookup.set(
  "BadArtithmetic",
  () => new BadArtithmeticError()
);

/**
 * InvalidAuthority: 'Invalid authority'
 *
 * @category Errors
 * @category generated
 */
export class InvalidAuthorityError extends Error {
  readonly code: number = 0x1771;
  readonly name: string = "InvalidAuthority";
  constructor() {
    super("Invalid authority");
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, InvalidAuthorityError);
    }
  }
}

createErrorFromCodeLookup.set(0x1771, () => new InvalidAuthorityError());
createErrorFromNameLookup.set(
  "InvalidAuthority",
  () => new InvalidAuthorityError()
);

/**
 * InsufficientShares: 'Not Enough Available Shares'
 *
 * @category Errors
 * @category generated
 */
export class InsufficientSharesError extends Error {
  readonly code: number = 0x1772;
  readonly name: string = "InsufficientShares";
  constructor() {
    super("Not Enough Available Shares");
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, InsufficientSharesError);
    }
  }
}

createErrorFromCodeLookup.set(0x1772, () => new InsufficientSharesError());
createErrorFromNameLookup.set(
  "InsufficientShares",
  () => new InsufficientSharesError()
);

/**
 * SharesArentAtMax: 'All available shares must be assigned to a member'
 *
 * @category Errors
 * @category generated
 */
export class SharesArentAtMaxError extends Error {
  readonly code: number = 0x1773;
  readonly name: string = "SharesArentAtMax";
  constructor() {
    super("All available shares must be assigned to a member");
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, SharesArentAtMaxError);
    }
  }
}

createErrorFromCodeLookup.set(0x1773, () => new SharesArentAtMaxError());
createErrorFromNameLookup.set(
  "SharesArentAtMax",
  () => new SharesArentAtMaxError()
);

/**
 * NewMintAccountRequired: 'A New mint account must be provided'
 *
 * @category Errors
 * @category generated
 */
export class NewMintAccountRequiredError extends Error {
  readonly code: number = 0x1774;
  readonly name: string = "NewMintAccountRequired";
  constructor() {
    super("A New mint account must be provided");
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, NewMintAccountRequiredError);
    }
  }
}

createErrorFromCodeLookup.set(0x1774, () => new NewMintAccountRequiredError());
createErrorFromNameLookup.set(
  "NewMintAccountRequired",
  () => new NewMintAccountRequiredError()
);

/**
 * MintAccountRequired: 'A Token type Fanout requires a Membership Mint'
 *
 * @category Errors
 * @category generated
 */
export class MintAccountRequiredError extends Error {
  readonly code: number = 0x1775;
  readonly name: string = "MintAccountRequired";
  constructor() {
    super("A Token type Fanout requires a Membership Mint");
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, MintAccountRequiredError);
    }
  }
}

createErrorFromCodeLookup.set(0x1775, () => new MintAccountRequiredError());
createErrorFromNameLookup.set(
  "MintAccountRequired",
  () => new MintAccountRequiredError()
);

/**
 * InvalidMembershipModel: 'Invalid Membership Model'
 *
 * @category Errors
 * @category generated
 */
export class InvalidMembershipModelError extends Error {
  readonly code: number = 0x1776;
  readonly name: string = "InvalidMembershipModel";
  constructor() {
    super("Invalid Membership Model");
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, InvalidMembershipModelError);
    }
  }
}

createErrorFromCodeLookup.set(0x1776, () => new InvalidMembershipModelError());
createErrorFromNameLookup.set(
  "InvalidMembershipModel",
  () => new InvalidMembershipModelError()
);

/**
 * InvalidMembershipVoucher: 'Invalid Membership Voucher'
 *
 * @category Errors
 * @category generated
 */
export class InvalidMembershipVoucherError extends Error {
  readonly code: number = 0x1777;
  readonly name: string = "InvalidMembershipVoucher";
  constructor() {
    super("Invalid Membership Voucher");
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, InvalidMembershipVoucherError);
    }
  }
}

createErrorFromCodeLookup.set(
  0x1777,
  () => new InvalidMembershipVoucherError()
);
createErrorFromNameLookup.set(
  "InvalidMembershipVoucher",
  () => new InvalidMembershipVoucherError()
);

/**
 * MintDoesNotMatch: 'Invalid Mint for the config'
 *
 * @category Errors
 * @category generated
 */
export class MintDoesNotMatchError extends Error {
  readonly code: number = 0x1778;
  readonly name: string = "MintDoesNotMatch";
  constructor() {
    super("Invalid Mint for the config");
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, MintDoesNotMatchError);
    }
  }
}

createErrorFromCodeLookup.set(0x1778, () => new MintDoesNotMatchError());
createErrorFromNameLookup.set(
  "MintDoesNotMatch",
  () => new MintDoesNotMatchError()
);

/**
 * InvalidHoldingAccount: 'Holding account does not match the config'
 *
 * @category Errors
 * @category generated
 */
export class InvalidHoldingAccountError extends Error {
  readonly code: number = 0x1779;
  readonly name: string = "InvalidHoldingAccount";
  constructor() {
    super("Holding account does not match the config");
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, InvalidHoldingAccountError);
    }
  }
}

createErrorFromCodeLookup.set(0x1779, () => new InvalidHoldingAccountError());
createErrorFromNameLookup.set(
  "InvalidHoldingAccount",
  () => new InvalidHoldingAccountError()
);

/**
 * HoldingAccountMustBeAnATA: 'A Mint holding account must be an ata for the mint owned by the config'
 *
 * @category Errors
 * @category generated
 */
export class HoldingAccountMustBeAnATAError extends Error {
  readonly code: number = 0x177a;
  readonly name: string = "HoldingAccountMustBeAnATA";
  constructor() {
    super(
      "A Mint holding account must be an ata for the mint owned by the config"
    );
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, HoldingAccountMustBeAnATAError);
    }
  }
}

createErrorFromCodeLookup.set(
  0x177a,
  () => new HoldingAccountMustBeAnATAError()
);
createErrorFromNameLookup.set(
  "HoldingAccountMustBeAnATA",
  () => new HoldingAccountMustBeAnATAError()
);

/**
 * DerivedKeyInvalid: ''
 *
 * @category Errors
 * @category generated
 */
export class DerivedKeyInvalidError extends Error {
  readonly code: number = 0x177b;
  readonly name: string = "DerivedKeyInvalid";
  constructor() {
    super("");
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, DerivedKeyInvalidError);
    }
  }
}

createErrorFromCodeLookup.set(0x177b, () => new DerivedKeyInvalidError());
createErrorFromNameLookup.set(
  "DerivedKeyInvalid",
  () => new DerivedKeyInvalidError()
);

/**
 * IncorrectOwner: 'bad owner'
 *
 * @category Errors
 * @category generated
 */
export class IncorrectOwnerError extends Error {
  readonly code: number = 0x177c;
  readonly name: string = "IncorrectOwner";
  constructor() {
    super("bad owner");
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, IncorrectOwnerError);
    }
  }
}

createErrorFromCodeLookup.set(0x177c, () => new IncorrectOwnerError());
createErrorFromNameLookup.set(
  "IncorrectOwner",
  () => new IncorrectOwnerError()
);

/**
 * WalletDoesNotOwnMembershipToken: 'Wallet Does not Own Membership Token'
 *
 * @category Errors
 * @category generated
 */
export class WalletDoesNotOwnMembershipTokenError extends Error {
  readonly code: number = 0x177d;
  readonly name: string = "WalletDoesNotOwnMembershipToken";
  constructor() {
    super("Wallet Does not Own Membership Token");
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, WalletDoesNotOwnMembershipTokenError);
    }
  }
}

createErrorFromCodeLookup.set(
  0x177d,
  () => new WalletDoesNotOwnMembershipTokenError()
);
createErrorFromNameLookup.set(
  "WalletDoesNotOwnMembershipToken",
  () => new WalletDoesNotOwnMembershipTokenError()
);

/**
 * InvalidMetadata: 'The Metadata specified is not valid Token Metadata'
 *
 * @category Errors
 * @category generated
 */
export class InvalidMetadataError extends Error {
  readonly code: number = 0x177e;
  readonly name: string = "InvalidMetadata";
  constructor() {
    super("The Metadata specified is not valid Token Metadata");
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, InvalidMetadataError);
    }
  }
}

createErrorFromCodeLookup.set(0x177e, () => new InvalidMetadataError());
createErrorFromNameLookup.set(
  "InvalidMetadata",
  () => new InvalidMetadataError()
);

/**
 * NumericalOverflow: ''
 *
 * @category Errors
 * @category generated
 */
export class NumericalOverflowError extends Error {
  readonly code: number = 0x177f;
  readonly name: string = "NumericalOverflow";
  constructor() {
    super("");
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, NumericalOverflowError);
    }
  }
}

createErrorFromCodeLookup.set(0x177f, () => new NumericalOverflowError());
createErrorFromNameLookup.set(
  "NumericalOverflow",
  () => new NumericalOverflowError()
);

/**
 * InsufficientBalanceToDistribute: 'Not enough new balance to distribute'
 *
 * @category Errors
 * @category generated
 */
export class InsufficientBalanceToDistributeError extends Error {
  readonly code: number = 0x1780;
  readonly name: string = "InsufficientBalanceToDistribute";
  constructor() {
    super("Not enough new balance to distribute");
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, InsufficientBalanceToDistributeError);
    }
  }
}

createErrorFromCodeLookup.set(
  0x1780,
  () => new InsufficientBalanceToDistributeError()
);
createErrorFromNameLookup.set(
  "InsufficientBalanceToDistribute",
  () => new InsufficientBalanceToDistributeError()
);

/**
 * InvalidFanoutForMint: ''
 *
 * @category Errors
 * @category generated
 */
export class InvalidFanoutForMintError extends Error {
  readonly code: number = 0x1781;
  readonly name: string = "InvalidFanoutForMint";
  constructor() {
    super("");
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, InvalidFanoutForMintError);
    }
  }
}

createErrorFromCodeLookup.set(0x1781, () => new InvalidFanoutForMintError());
createErrorFromNameLookup.set(
  "InvalidFanoutForMint",
  () => new InvalidFanoutForMintError()
);

/**
 * MustDistribute: 'This operation must be the instruction right after a distrobution on the same accounts.'
 *
 * @category Errors
 * @category generated
 */
export class MustDistributeError extends Error {
  readonly code: number = 0x1782;
  readonly name: string = "MustDistribute";
  constructor() {
    super(
      "This operation must be the instruction right after a distrobution on the same accounts."
    );
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, MustDistributeError);
    }
  }
}

createErrorFromCodeLookup.set(0x1782, () => new MustDistributeError());
createErrorFromNameLookup.set(
  "MustDistribute",
  () => new MustDistributeError()
);

/**
 * InvalidStakeAta: ''
 *
 * @category Errors
 * @category generated
 */
export class InvalidStakeAtaError extends Error {
  readonly code: number = 0x1783;
  readonly name: string = "InvalidStakeAta";
  constructor() {
    super("");
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, InvalidStakeAtaError);
    }
  }
}

createErrorFromCodeLookup.set(0x1783, () => new InvalidStakeAtaError());
createErrorFromNameLookup.set(
  "InvalidStakeAta",
  () => new InvalidStakeAtaError()
);

/**
 * CannotTransferToSelf: ''
 *
 * @category Errors
 * @category generated
 */
export class CannotTransferToSelfError extends Error {
  readonly code: number = 0x1784;
  readonly name: string = "CannotTransferToSelf";
  constructor() {
    super("");
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, CannotTransferToSelfError);
    }
  }
}

createErrorFromCodeLookup.set(0x1784, () => new CannotTransferToSelfError());
createErrorFromNameLookup.set(
  "CannotTransferToSelf",
  () => new CannotTransferToSelfError()
);

/**
 * TransferNotSupported: 'Transfer is not supported on this membership model'
 *
 * @category Errors
 * @category generated
 */
export class TransferNotSupportedError extends Error {
  readonly code: number = 0x1785;
  readonly name: string = "TransferNotSupported";
  constructor() {
    super("Transfer is not supported on this membership model");
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, TransferNotSupportedError);
    }
  }
}

createErrorFromCodeLookup.set(0x1785, () => new TransferNotSupportedError());
createErrorFromNameLookup.set(
  "TransferNotSupported",
  () => new TransferNotSupportedError()
);

/**
 * RemoveNotSupported: 'Remove is not supported on this membership model'
 *
 * @category Errors
 * @category generated
 */
export class RemoveNotSupportedError extends Error {
  readonly code: number = 0x1786;
  readonly name: string = "RemoveNotSupported";
  constructor() {
    super("Remove is not supported on this membership model");
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, RemoveNotSupportedError);
    }
  }
}

createErrorFromCodeLookup.set(0x1786, () => new RemoveNotSupportedError());
createErrorFromNameLookup.set(
  "RemoveNotSupported",
  () => new RemoveNotSupportedError()
);

/**
 * PayerATANotSupplied: 'Payer Associated Token Account must be supplied'
 *
 * @category Errors
 * @category generated
 */
export class PayerATANotSuppliedError extends Error {
  readonly code: number = 0x1787;
  readonly name: string = "PayerATANotSupplied";
  constructor() {
    super("Payer Associated Token Account must be supplied");
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, PayerATANotSuppliedError);
    }
  }
}

createErrorFromCodeLookup.set(0x1787, () => new PayerATANotSuppliedError());
createErrorFromNameLookup.set(
  "PayerATANotSupplied",
  () => new PayerATANotSuppliedError()
);

/**
 * Attempts to resolve a custom program error from the provided error code.
 * @category Errors
 * @category generated
 */
export function errorFromCode(code: number): MaybeErrorWithCode {
  const createError = createErrorFromCodeLookup.get(code);
  return createError != null ? createError() : null;
}

/**
 * Attempts to resolve a custom program error from the provided error name, i.e. 'Unauthorized'.
 * @category Errors
 * @category generated
 */
export function errorFromName(name: string): MaybeErrorWithCode {
  const createError = createErrorFromNameLookup.get(name);
  return createError != null ? createError() : null;
}
