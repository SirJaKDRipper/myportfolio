import React from 'react';
import Navbar from '../../components/Navbar';
import Image from 'next/image';
import Anuda1 from '../../public/anuda9.jpeg';
import img5 from '../../public/img5.jpeg';
import img10 from '../../public/img10.jpeg';
import img7 from '../../public/img7.jpeg';
import img9 from '../../public/img9.jpeg';
import img6 from '../../public/img6.jpeg';
import img8 from '../../public/img8.jpeg';
import img3 from '../../public/img3.jpeg';
import img2 from '../../public/img2.jpeg';

export const Photographer = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <div className='flex flex-col md:flex-row md:mt-40 ml-10 md:ml-40 mr-10 md:mr-40 text-center md:text-justify'>
        <div className="Greeting md:w-1/2">
          <p className="text-4xl">P H O T O G R A P H E R </p>
          <p className="text-2xl mt-5">Wild-Life & Landscape</p>
          <p className="text-5xl mt-5">Hi, I'm <span className='text-orange-400'>Anuda</span></p>
          <p className="text-5xl mt-5">Gunarathna from Sri Lanka</p>
        </div>
        <div className="md:w-1/2">
          <Image src={Anuda1} alt="wallpaper" width={400} height={400} className='mx-auto mt-5 md:-mt-5'/>
        </div>
      </div>

      <div className="ml-10 md:ml-40 mt-20 flex flex-col md:flex-row md:gap-20">
        <Image src={img10} alt="wallpaper" width={300} height={300} className="md:w-1/2"/>
        <div className="md:w-1/2 text-center md:text-left mt-5 md:mt-40">
          <h1 className='text-4xl italic'> <span className='text-9xl'>"</span>Fear not, fear is your greatest enemy<span className='text-9xl'>"</span></h1>
        </div>
      </div>

      <div className="ml-10 md:ml-40 mt-20 flex flex-col gap-20 items-center md:items-start md:justify-center">
        <div>
          <h1 className='text-4xl mt-40'>2023 Best captures</h1>
        </div>
        <div className='flex flex-col md:flex-row gap-2'>
          <Image src={img5} alt="wallpaper" width={300} height={300} className="md:w-1/3"/>
          <Image src={img7} alt="wallpaper" width={300} height={300} className="md:w-1/3"/>
          <Image src={img6} alt="wallpaper" width={300} height={300} className="md:w-1/3"/>
        </div>
      </div>
      <div className="ml-10 md:ml-40 mt-20 flex flex-col gap-20 items-center md:items-start md:justify-center">
        <div>
          <h1 className='text-4xl mt-40'>2022 Best captures</h1>
        </div>
        <div className='flex flex-col md:flex-row gap-2'>
          <Image src={img3} alt="wallpaper" width={300} height={300} className="md:w-1/3"/>
          <Image src={img2} alt="wallpaper" width={300} height={300} className="md:w-1/3"/>
          <Image src={img9} alt="wallpaper" width={300} height={300} className="md:w-1/3"/>
        </div>
      </div>
      <div className="ml-10 md:ml-40 mt-20 flex flex-col gap-20 items-center md:items-center md:justify-center">
  <div>
    <h1 className='text-4xl mt-40'>Pride of Sri Lanka</h1>
  </div>
  <div className='flex flex-col md:flex-row gap-2'>
    <Image src={img8} alt="wallpaper" width={600} height={300}/>
  </div>
</div>

    </div>
  );
}

export default Photographer;
