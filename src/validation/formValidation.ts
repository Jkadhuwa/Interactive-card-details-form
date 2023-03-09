import { z } from "zod";
import * as cardValidator from "card-validator";


const formSchema = z.object({
  cardName:z.optional(z
    .string({
      required_error: "Card holder's Name is required",
      invalid_type_error: "Card Holder's name must be a string",
    }).refine(value => cardValidator.cardholderName(value).isValid, {message: 'Invalid card name'})),
    
  cardNumber: z.optional(z
    .string({
      required_error: "Card Number is required",
      invalid_type_error: "Card Number must be a number",
    }).refine(value => cardValidator.number(value).isValid,{message: 'Invalid card number'})),
    
    
  month: z.optional(z.string().refine((value) => cardValidator.expirationMonth(value).isValid, {message: 'Invalid Expiry month '})),
  year: z.optional(z.string().refine((value) => cardValidator.expirationYear(value).isValid, {message: 'Invalid Expiry year '})),
  cvc: z.optional(z.string().refine((value) => cardValidator.cvv(value).isValid, {message: "Invalid cvc code"}))
});

export default formSchema;
