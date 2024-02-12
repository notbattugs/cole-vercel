import React from 'react';
import Image from 'next/image';

export default function MySkill() {
  return (
    <div className="w-[80vw] h-[600px] bg-[#282C33] flex justify-start items-center">
      <div className="w-[80%] h-full flex justify-center items-start flex-col">
        <div className="h-8 w-1/2 flex justify-center items-center">
          <h5 className="text-2xl w-[40%]">
            <strong style={{ color: '#C778DD' }}>#</strong>
            skills{' '}
          </h5>
          <div className="w-[45%] h-[2px] bg-[#C778DD] hidden lg:block"></div>
        </div>
        <div className="w-screen h-full flex justify-center items-start flex-row">
          <div className="w-[40%] h-full justify-center items-center hidden lg:flex">
            <img
              src="https://i.ibb.co/gV7P7XK/image.png"
              alt="img"
              width={400}
              height={400}
            ></img>
          </div>
          <br />
          <br />
          <br />
          <br />
          <div className="w-[60%] h-full grid grid-cols-2 grid-flow-row gap-2 h-[250px]">
            <br />
            <br />
            <img
              src="https://i.ibb.co/1qz3s48/image.png"
              alt=""
              className="w-[100%] lg:w-[40%]"
            />
            <img
              src="https://i.ibb.co/Q8Vpmq4/image.png"
              alt=""
              className="w-[100%] lg:w-[40%]"
            />
            <img
              src="https://i.ibb.co/kXTY75w/image.png"
              alt=""
              className="w-[100%] lg:w-[40%]"
            />
            <img
              src="https://i.ibb.co/MC98fFQ/image.png"
              alt=""
              className="w-[100%] lg:w-[40%]"
            />
            <img
              src="https://i.ibb.co/YTTZVVy/image.png"
              alt=""
              className="w-[100%] lg:w-[40%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
