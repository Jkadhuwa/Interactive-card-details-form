import React, { SetStateAction, Dispatch } from "react";
import Image from "next/image";

interface Props {
    setValidForm: Dispatch<SetStateAction<boolean>>
}
function Thankyou({setValidForm}: Props) {

  const handleClick = () => {
    setValidForm(false)
  }
  return (
    <div className="flex justify-center items-center flex-col space-y-8">
      <div className="">
        <Image
          src="/icon-complete.svg"
          alt="success-cion"
          width={50}
          height={50}
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h2 className="uppercase font-normal text-2xl">Thank you!</h2>
        <p className="mt-2 text-sm font-medium text-slate-500">{`We've added your card details`}</p>
        <button className="btn btn-active bg-[#22092F] btn-sm w-[17.3rem] xs:w-[100%] mt-8 capitalize" onClick={handleClick}>
          Continue
        </button>
      </div>
    </div>
  );
}

export default Thankyou;
