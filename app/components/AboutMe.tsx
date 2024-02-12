import React from 'react';

export default function AboutMe() {
  return (
    <div
      className="w-[80vw] h-[600px] flex justify-start items-center"
      style={{ backgroundColor: '#282C33' }}
    >
      <div className="w-[80%] h-full flex justify-center items-start flex-col">
        <div className="h-8 w-1/2 flex justify-center items-center">
          <h5 className="text-2xl w-[40%]">
            <strong style={{ color: '#C778DD' }}>#</strong>
            about-me{' '}
          </h5>
          <div className="w-[45%] h-[2px] bg-[#C778DD] hidden lg:block"></div>
        </div>
        <div className="w-screen h-full flex justify-center items-start">
          <div className="w-[90%] h-full flex justify-center items-center">
            <div className="w-[40%] h-full flex justify-center items-start flex-col gap-10">
              <p className="text-[#ABB2BF] text-lg">
                Hello, i’m Battugs! I’m a full-stack developer based in
                Ulaanbaatar, Mongolia. I can develop responsive websites from
                scratch and raise them into modern user-friendly web
                experiences.
              </p>

              {/* <button className="Contact"> Read more → </button> */}
            </div>
            <div className="w-[60%] h-full  justify-center items-center hidden lg:flex">
              <img
                className="w-[50%] h-auto"
                style={{ borderRadius: '100px' }}
                src="https://i.ibb.co/cLt0KX2/Pinterest-Image.jpg"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
