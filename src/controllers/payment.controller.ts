import { TryCatch } from "../middlewares/error.middleware.js";
import { Coupon } from "../models/coupon.model.js";
import ErrorHandler from "../utils/utility-class.js";

export const newCoupon = TryCatch(async (req, res, next) => {
  const { coupon, amount } = req.body;

  if (!coupon || !amount)
    return next(new ErrorHandler("Please Enter both coupon and amount", 404));

  await Coupon.create({ code: coupon, amount });

  return res.status(201).json({
    success: true,
    message: `Coupon ${coupon} created successfully`,
  });
});
