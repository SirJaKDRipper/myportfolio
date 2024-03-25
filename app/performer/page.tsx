import React from 'react';
import Navbar from '../../components/Navbar';
import Image from 'next/image';
import Anuda1 from '../../public/anuda1.jpeg';
import Anuda2 from '../../public/anuda2.jpeg';
import Anuda3 from '../../public/anuda3.jpeg';
import Anuda4 from '../../public/anuda4.jpeg';
import Anuda5 from '../../public/anuda5.jpeg';
import Anuda6 from '../../public/anuda6.jpeg';
import Anuda7 from '../../public/anuda7.jpeg';
import Anuda8 from '../../public/anuda8.jpeg';
import stagecraft from '../../public/Stagecraft.png';

export const Performer = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <div className='flex flex-col md:flex-row md:mt-40 ml-10 md:ml-40 mr-10 md:mr-40 text-center md:text-justify'>
        <div className="Greeting md:w-1/2">
          <p className="text-4xl mt-20">P E R F O R M E R</p>
          <p className="text-2xl mt-5">Singer & Violinist</p>
          <p className="text-5xl mt-5">Hi, I'm <span className='text-green-400'>Anuda</span></p>
          <p className="text-5xl mt-5">Gunarathna from Sri Lanka</p>
        </div>
        <div className="md:w-1/2">
          <Image src={Anuda1} alt="wallpaper" width={400} height={400} className='mx-auto mt-5 md:-mt-20'/>
        </div>
      </div>

      <div className="ml-10 md:ml-40 mt-20 flex flex-col md:flex-row md:gap-20">
        <Image src={Anuda2} alt="wallpaper" width={300} height={300} className="md:w-1/2"/>
        <div className="md:w-1/2 text-center md:text-left mt-5 md:mt-40">
          <h1 className='text-4xl italic'> <span className='text-9xl'>"</span>Fear not, fear is your greatest enemy<span className='text-9xl'>"</span></h1>
        </div>
      </div>

      <div className="ml-10 md:ml-40 mt-20 flex flex-col gap-20 items-center md:items-start md:justify-center">
        <div>
        <Image src={stagecraft} alt="wallpaper" width={300} height={300} className="md:w-1/3"/>
          <h1 className='text-4xl mt-40'>Stage Craft 2024</h1>
          <p className='text-3xl mt-20'>asfdaf afsaf afaf afafafafafa afafaf afa</p>
        </div>
        <div className='flex flex-col md:flex-row gap-2'>
          <Image src={Anuda4} alt="wallpaper" width={300} height={300} className="md:w-1/3"/>
          <Image src={Anuda5} alt="wallpaper" width={300} height={300} className="md:w-1/3"/>
          <Image src={Anuda6} alt="wallpaper" width={300} height={300} className="md:w-1/3"/>
        </div>
      </div>
      <div className="ml-10 md:ml-40 mt-20 flex flex-col gap-20 items-center md:items-start md:justify-center">
        <div>
          <h1 className='text-4xl mt-40'>Spandana 2023</h1>
          <p className='text-3xl mt-20'>asfdaf afsaf afaf afafafafafa afafaf afa</p>
        </div>
        <div className='flex flex-col md:flex-row gap-2'>
          <Image src={Anuda7} alt="wallpaper" width={300} height={300} className="md:w-1/3"/>
          <Image src={Anuda3} alt="wallpaper" width={300} height={300} className="md:w-1/3"/>
          <Image src={Anuda8} alt="wallpaper" width={300} height={300} className="md:w-1/3"/>
        </div>
      </div>
    </div>
  );
}

export default Performer;
