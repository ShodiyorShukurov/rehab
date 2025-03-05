import React, { useState } from 'react';
import { Play } from 'lucide-react';

const FeaturesSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="pt-[100px]">
      <div className="container">
        <div className=" grid grid-cols-1 2xl:grid-cols-2 gap-8">
          {/* Chap tomondagi matn */}
          <div className="flex flex-col w-full justify-between">
            <div>
              <h4 className="text-[#007bbd] text-[14px]  border-b-4 border-[#007bbd] pb-[10px] w-[200px] flex items-center gap-3">
                <span className="w-[8px] h-[8px] flex items-center text-[30px]">•</span> Features
              </h4>
              <h2 className="text-[28px] md:text-[32px] 2xl:text-[36px] leading-[39px] md:leading-[45px] 2xl:leading-[50px] font-semibold text-[#121418] 2xl:max-w-[500px] mt-[16px]">
                Advanced Medical Care with Modern Facilities
              </h2>
            </div>
            <div>
              <p className="text-[#696969] mb-6 text-[16px] leading-[26px] 2xl:max-w-[500px]">
                Our clinic is equipped with the latest medical technology and a
                range of patient-centered amenities to ensure you receive the
                best care possible. From advanced diagnostic services to
                comfortable waiting areas, every detail is designed to support
                your health and well-being.
              </p>
              <div className="flex items-center space-x-4">
                <div className='flex items-center -space-x-2'>
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="user"
                  className="w-10 h-10 rounded-full"
                />
                <img
                  src="https://randomuser.me/api/portraits/men/45.jpg"
                  alt="user"
                  className="w-10 h-10 rounded-full"
                />
                <img
                  src="https://randomuser.me/api/portraits/women/46.jpg"
                  alt="user"
                  className="w-10 h-10 rounded-full"
                />
                </div>
                <div>
                  <p className="font-semibold text-[18px] text-[#121418] leading-[25px]">6K+</p>
                  <span className="text-[#696969] text-[16px] leading-[26px]">
                    Medical Clinic Member
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#007bbd] text-white p-6 rounded-[16px] h-[280px]">
              <h3 className="text-[20px] md:text-[24px] font-semibold leading-[28px] md:leading-[34px]">Comfortable Facilities</h3>
              <p className="text-[16px] leading-[26px] text-[#fffc] mt-[16px]">
                Experience a welcoming environment with comfortable waiting
                areas and private consultation rooms.
              </p>
            </div>

            <div
              className="relative cursor-pointer h-[280px]"
              onClick={() => setIsOpen(true)}
            >
              <img
                src="https://placehold.co/300x200"
                alt="Doctor explaining"
                className="w-full h-[280px] rounded-[16px] object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 hover:bg-opacity-30 transition-all rounded-[16px]">
                <button className="bg-white p-3 rounded-full shadow-lg">
                  <Play className="w-8 h-8 text-blue-500" />
                </button>
              </div>
            </div>

            {/* Uchinchi kartochka */}
            <div className="h-[280px]">
              <img
                src="https://placehold.co/300x200"
                alt="Reception"
                className="w-full h-[280px] rounded-[16px] object-cover"
              />
            </div>

            <div className="bg-[#F7F7F7] p-6 rounded-[16px] h-[280px]">
              <h3 className="text-[20px] md:text-[24px] font-semibold leading-[28px] md:leading-[34px]" >Telemedicine Services</h3>
              <p className="text-[16px] text-[#696969] mt-[16px] leading-[26px]">
                Access virtual consultations for convenient care from the
                comfort of your home.
              </p>
            </div>
          </div>

          {isOpen && (
            <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            onClick={() => setIsOpen(false)}
          >
            <div
              className="rounded-[16px] max-w-2xl w-full relative p-[20px]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Video */}
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

export default FeaturesSection;
