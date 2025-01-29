export const COUPON_CODES = {
    MAKEUP: "MAKEUP",
    NEW_YEAR: "NEW_YEAR",
  } as const;
  
  export type CouponCode = keyof typeof COUPON_CODES;