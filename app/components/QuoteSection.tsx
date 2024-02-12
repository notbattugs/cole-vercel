import React from 'react';
import Image from 'next/image';

export default function QuoteSection() {
  return (
    <div className="w-[80vw] h-80 bg-[#282C33]  justify-center items-center hidden lg:flex">
      <img
        src="https://i.ibb.co/VTRtFCW/image.png"
        alt="Quote"
        className="w-[40%] h-auto "
      />
    </div>
  );
}
