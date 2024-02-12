import backgroundImagea from '../assets/BackgroundOfCompOne.png';
import Cole from '../assets/Cole-removebg-preview.png';
import Image from 'next/image';

import './BasicInf.css';
const BasicInf = () => {
  const styles = {
    purpleText: {
      color: '#C778DD',
    },
  };
  return (
    <>
      <div className="w-screen h-[700px]">
        <div className="h-[700px] lg:h-[600px] flex justify-center items-center flex-col lg:flex-row">
          <div className="flex jusitify-between items-start flex-col w-[60%] lg:w-[35%] gap-[20px]">
            <h1 style={{ color: 'white', fontSize: '25px', fontWeight: 500 }}>
              Oxterhal is a{' '}
              <span style={styles.purpleText}>
                front-end <br />
                and back-end developer
              </span>
            </h1>
            <p style={{ color: '#ABB2BF', width: '50%' }}>
              He crafts responsive websites where technologies meet creativity
            </p>
            <button className="Contact"> Contact me!!</button>
          </div>
          <div
            style={{
              width: '40%',
              height: '100%',
              backgroundImage: `url(${backgroundImagea})`,
              backgroundSize: '80%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <img
              src="https://i.ibb.co/cLt0KX2/Pinterest-Image.jpg"
              alt=""
              style={{ width: '50%', height: 'auto', borderRadius: '100px' }}
            />
            <br />
            <br />
            <div
              className="currentwork"
              style={{
                width: '310px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '12px',
              }}
            >
              {' '}
              <div
                style={{ width: '16px', height: '16px', background: '#C778DD' }}
              ></div>
              Currently working on{' '}
              <span style={{ color: '#ffffff' }}>Portfolio</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BasicInf;
