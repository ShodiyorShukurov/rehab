import React, { useState } from 'react';
import { ArrowUpRight, Play } from 'lucide-react';
import data from '../mock/data.json';
import servicesMainImg from '../assets/service-main-img.jpg';
import services1 from '../assets/services1.jpg';
import services2 from '../assets/services2.jpg';
import services3 from '../assets/services3.jpg';
import services4 from '../assets/services4.jpg';

const services = [
  {
    title: data.services.card1_title,
    description: data.services.card1_text,
    image: services1,
  },
  {
    title: data.services.card2_title,
    description: data.services.card2_text,
    image: services2,
  },
  {
    title: data.services.card3_title,
    description: data.services.card3_text,
    image: services3,
  },
  {
    title: data.services.card4_title,
    description: data.services.card4_text,
    image: services4,
  },
];

const ServicesSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="pt-[120px]" id='service'>
      <div className="container">
        <div className="grid grid-cols-1 2xl:grid-cols-3 md:gap-6">
          <div className="flex flex-col gap-4">
            <div className="bg-[#007BBD] text-white p-6 rounded-[16px] h-[360px]">
              <h4 className="text-[#fff] text-[14px]  border-b-4 border-[#fff] pb-[10px] w-[200px] flex items-center gap-3">
                <span className="w-[8px] h-[8px] flex items-center text-[30px]">
                  •
                </span>
                {data.services.services}
              </h4>
              <h2 className="text-[20px] md:text-[24px] font-semibold leading-[28px] md:leading-[34px] my-6">
                {data.services.title}
              </h2>
              <p className="text-[#fffc] text-[18px] leading-[29px] max-w-[352px]">
                {data.services.text}
              </p>
            </div>

            <div
              className="relative cursor-pointer group max-h-[360px]"
              // onClick={() => setIsOpen(true)}
            >
              <img
                src={servicesMainImg}
                alt="Doctor consultation"
                className="w-full rounded-[16px] max-h-[360px] object-cover"
              />
              <div className="absolute inset-0 flex  group-hover:flex-row items-center justify-center bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-1000 rounded-lg">
                {/* <button className="bg-white p-3 rounded-full shadow-lg relative">
                  <Play className="w-8 h-8 text-blue-500" />
                </button>
                <span className="text-white text-sm mt-2 opacity-0 group-hover:opacity-100 group-hover:ml-2 hidden group-hover:block transition-opacity">
                  Play Video
                </span> */}
              </div>
            </div>
          </div>

          <div className="space-y-6 col-span-2 mt-[24px] md:mt-0">
            <div>
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex md:items-center md:justify-between flex-col md:flex-row border-y p-6 cursor-pointer hover:bg-[#f7f7f7]"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-[160px] h-[110px] rounded-[16px] object-cover"
                  />
                  <div>
                    <h3 className="text-[20px] md:text-[24px] leading-[28px] md:leading-[34px] text-[#121418] font-semibold mt-[12px] md:mt-0">
                      {service.title}
                    </h3>
                    <p className="text-[16px] leading-[26px] text-[#696969] max-w-[380px] mt-[8px]">
                      {service.description}
                    </p>
                  </div>
                  <button className="w-[48px] h-[48px] bg-transparent hover:bg-[#121418] flex justify-center items-center rounded-full text-[#121418] hover:text-white transition-all duration-300">
                    <ArrowUpRight className="w-6 h-6 stroke-current" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {isOpen && (
            <div
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
              onClick={() => setIsOpen(false)}
            >
              <div className="rounded-[16px] max-w-[1000px] w-full relative p-[20px]">
                <button
                  className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
                  onClick={() => setIsOpen(false)}
                >
                  ✕
                </button>
                <div className="relative w-full h-0 pb-[56.25%]">
                  <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Video"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                  ></iframe>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
