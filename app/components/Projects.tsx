import React from 'react';
import './BasicInf.css';
import Link from 'next/link';

export default function () {
  return (
    <div className="w-[80vw] h-[700px] bg-[#282C33] flex justify-start items-center">
      <div className="w-[80%] h-full flex justify-center items-start flex-col">
        <div className="h-8 w-1/2 flex justify-center items-center">
          <h5 className="text-2xl w-[30%]">
            <strong style={{ color: '#C778DD' }}>#</strong>
            projects{' '}
          </h5>
          <div className="w-[45%] h-[2px] bg-[#C778DD] "></div>
        </div>
        <br />
        <br />

        <div className="w-screen h-full flex justify-center items-center flex-col gap-10">
          <div className="flex justify-around items-start">
            <img
              src="https://i.ibb.co/02JsJnD/image.png"
              alt=""
              className="w-[20%]"
            />
            <img
              src="https://i.ibb.co/P1qznHw/image.png"
              alt=""
              className="w-[20%]"
            />
            <img
              src="https://i.ibb.co/TB6wMkJ/image.png"
              alt=""
              className="w-[20%]"
            />
          </div>

          <Link href="/project">
            <button className="Contact">Learn More</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
