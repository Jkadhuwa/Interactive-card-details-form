import React from "react";
import Image from "next/image";

interface CardProps {
  cardNumber?: string;
  month?: string;
  year?: string;
  cardName?: string;
}

function CardFront({ cardName, cardNumber, month, year }: CardProps) {
  console.log(cardNumber);
  
  return (
    <div className="relative">
      <div className="relative sm:static h-36 md:h-40 lg:h-52 w-3/4 xs:w-2/3 ">
        <Image
          src="/bg-card-front.png"
          alt="Card Front"
          fill
          className="right-0 h-auto"
        />
        <div className=" absolute w-full px-4 text-white">
          <div className="py-6 mb-2">
            <Image
              src="/card-logo.svg"
              alt="card logo"
              width={50}
              height={10}
            />
          </div>
          <div className="sm:py-2 lg:py-8">
            {cardNumber ? cardNumber : "0000 0000 0000 000"}
          </div>
          <div className="flex justify-between  ">
            <div>{cardName ? cardName : "John Appaled"}</div>
            <div className="">
              {month ? month : "00"}/{year ? year : "00"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardFront;
