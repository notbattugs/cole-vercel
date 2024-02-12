import Image from 'next/image';
import SideBarWithLogos from './components/SideBarWithLogos';
import Header from './components/Header';
import BasicInf from './components/BasicInf';
import QuoteSection from './components/QuoteSection';
import Projects from './components/Projects';
import MySkill from './components/MySkill';
import AboutMe from './components/AboutMe';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
export default function Home() {
  return (
    <div
      style={{
        backgroundColor: '#282C33',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        position: 'relative', // Change position to 'relative' or 'static'
        overflowY: 'scroll',
        overflowX: 'hidden',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'center ' }}>
        <SideBarWithLogos />
        <div>
          <Header />
          <br />
          <BasicInf />
          <QuoteSection></QuoteSection>
          <br />
          <br />
          <br />
          <Projects></Projects>
          <MySkill></MySkill>
          <AboutMe></AboutMe>
          <Contacts></Contacts>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}
