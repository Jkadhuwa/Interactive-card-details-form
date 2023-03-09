import React from "react";
import Image from "next/image";

interface CardProps {
  cvc?: string;
}

function CardBack({ cvc }: CardProps) {
  return (
    <div className="relative">
      <div className="relative sm:static h-36 md:h-52 w-3/4 xs:w-2/3">
        <Image src="/bg-card-back.png" alt="Card back" fill  className="right-0 h-auto" />
        <div className="absolute flex my-[3.7rem] sm:my-[4.2rem] md:my-[5.5rem] px-10  justify-end right-0 text-white">
          {cvc ? cvc : "000"}
        </div>
      </div>
    </div>
  );
}

export default CardBack;
