import React from 'react';
import Navbar from '../../components/Navbar';
import Image from 'next/image';
import leader1 from '../../public/leader1.jpeg';
import leader2 from '../../public/leader2.jpeg';
import leader3 from '../../public/leader3.jpeg';
import kuweni from '../../public/kuweni.png';
import LEO from '../../public/LEO.png.webp';
import leader4 from '../../public/leader4.jpeg';
import sivali from '../../public/sivali.png';



export const Performer = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <div className='flex flex-col md:flex-row md:mt-40 ml-10 md:ml-40 mr-10 md:mr-40  md:text-justify'>
        <div className="Greeting md:w-1/2">
          <p className="text-4xl mt-20">P E R F O R M E R</p>
          <p className="text-2xl mt-5">Singer & Violinist</p>
          <p className="text-5xl mt-5">Hi, I'm <span className='text-blue-400'>Anuda</span></p>
          <p className="text-5xl mt-5">Gunarathna from Sri Lanka</p>
        </div>
        <div className="md:w-1/2">
          <Image src={leader3} alt="wallpaper" width={400} height={400} className='mx-auto mt-5 md:-mt-20'/>
        </div>
      </div>

      <div className="ml-10 md:ml-40 mt-20 flex flex-col md:flex-row md:gap-20">
        <Image src={leader2} alt="wallpaper" width={300} height={300} className="md:w-1/2"/>
        <div className="md:w-1/2 md:text-left mt-5 md:mt-40">
  <Image src={kuweni} alt="wallpaper" width={300} height={300} className="md:w-1/3 ml-40"/>
  <h1 className='text-4xl text-left mt-5'>Volunteering at Kuweni The Final Act</h1>
</div>
      </div>

      <div className="ml-10 md:ml-20 mt-20 mr-20 flex flex-col md:flex-row md:gap-20">
      <div className="md:w-1/2 md:text-left mt-5 md:mt-40">
  <Image src={LEO} alt="wallpaper" width={300} height={300} className="md:w-1/3 ml-40"/>
  <h1 className='text-4xl text-left mt-5'>Event Co-Ordinator of LEO Club Of IIT</h1>
</div>
        <Image src={leader1} alt="wallpaper" width={300} height={300} className="md:w-1/2"/>
      </div>
      <div className="ml-10 md:ml-20 mt-20  mr-20 flex flex-col md:flex-row md:gap-20">
        <Image src={leader4} alt="wallpaper" width={300} height={300} className="md:w-1/2"/>
        <div className="md:w-1/2 md:text-left mt-5 md:mt-40">
  <Image src={sivali} alt="wallpaper" width={300} height={300} className="md:w-1/3 ml-40"/>
  <h1 className='text-2xl text-left mt-5'>Senior & Junior perefect at Sivali Central College Rathnapura</h1>
</div>

      </div>
      
    </div>
  );
}

export default Performer;
