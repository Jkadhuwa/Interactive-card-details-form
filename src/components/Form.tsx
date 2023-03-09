import React, { SetStateAction, Dispatch } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import formSchema from "@/validation/formValidation";

type FormValues = Zod.infer<typeof formSchema>;
interface Prop {
  setCardDetails: Dispatch<SetStateAction<FormValues>>;
  setValidForm:  Dispatch<SetStateAction<boolean>>
}

function Form({ setCardDetails, setValidForm }: Prop) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormValues>({ resolver: zodResolver(formSchema) });
  watch((data) => setCardDetails(data));
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setValidForm(true)
    console.log(data);
  };
  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="text-xs uppercase">CardHolder Name</span>
        </label>
        <input
          type="text"
          placeholder="John Appaled"
          className={`input input-bordered input-sm ${
            errors?.cardName ? "border-red-400" : ""
          }`}
          {...register("cardName")}
        />
        <p className="text-[0.6rem] text-red-400">
          {errors?.cardName && errors.cardName.message}
        </p>
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label uppercase">
          <span className="text-xs">Card Number</span>
        </label>
        <input
          type="text"
          placeholder="4574 8795 2658 0012"
          className={`input input-bordered input-sm ${
            errors?.cardNumber ? "border-red-400" : ""
          }`}
          {...register("cardNumber")}
        />
        <p className="text-[0.6rem] text-red-400">
          {errors?.cardNumber && errors.cardNumber.message}
        </p>
      </div>
      <div className="flex space-x-3">
        <div className="form-control ">
          <label className="label uppercase">
            <span className="text-xs">Exp. Date [ MM/YY ]</span>
          </label>
          <div className=" space-x-2">
            <input
              type="text"
              placeholder="04"
              className={`input input-bordered w-16 xs:w-16 input-sm lg:w-20 ${
                errors?.month ? "border-red-400" : ""
              }`}
              {...register("month")}
            />
            <input
              type="text"
              placeholder="26"
              className={`input input-bordered w-16 xs:w-16 input-sm lg:w-20 ${
                errors?.year ? "border-red-400" : ""
              }`}
              {...register("year")}
            />
            <p className="text-[0.6rem] text-red-400">
              {errors?.month && errors.year
                ? "Invalid expiry date"
                : errors.month
                ? errors.month.message
                : errors.year
                ? errors.year.message
                : ""}
            </p>
          </div>
        </div>

        <div className="form-control">
          <label className="label uppercase">
            <span className="text-xs">Cvc</span>
          </label>
          <input
            type="text"
            placeholder="023"
            className={`input input-bordered w-[8rem] xs:w-[8rem] input-sm  ${
              errors?.cvc ? "border-red-400" : ""
            }`}
            {...register("cvc")}
          />
          <p className="text-[0.6rem] text-red-400">
            {errors?.cvc && errors.cvc.message}
          </p>
        </div>
      </div>
      <button className="btn btn-active bg-[#22092F] btn-sm w-[17.3rem] xs:w-[100%]">
        Confirm
      </button>
    </form>
  );
}

export default Form;
