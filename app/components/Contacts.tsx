import React from 'react';

export default function Contacts() {
  return (
    <div className="w-[80vw] h-96 bg-[#282C33] flex justify-start items-center">
      <div className="w-[80%] h-full flex justify-center items-start flex-col">
        <div className="h-8 w-1/2 flex justify-center items-center">
          <h5 className="text-2xl w-[40%]">
            <strong style={{ color: '#C778DD' }}>#</strong>
            contacts{' '}
          </h5>
          <div className="w-[45%] h-[2px] bg-[#C778DD] hidden lg:block"></div>
        </div>
        <div className="w-screen h-full flex justify-center items-start">
          <div className="w-[90%] h-full flex justify-center items-center">
            <div className="w-[40%] h-full justify-center items-start flex-col gap-10 hidden lg:flex">
              <p className="text-[#ABB2BF] text-md">
                I’m interested in freelance opportunities. However, if you have
                other request or question, don’t hesitate to contact me
              </p>
            </div>
            <div className="w-[60%] h-full flex justify-center items-center">
              <img
                className=" h-auto w-[90%] lg:w-[30%]"
                style={{ borderRadius: '100px' }}
                src="https://i.ibb.co/6mp95wn/image.png"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
