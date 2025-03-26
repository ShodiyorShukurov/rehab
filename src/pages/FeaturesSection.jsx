import React from 'react';
import { User, Search, Shield, MapPin } from 'lucide-react';
import data from '../mock/data.json';

const features = [
  {
    icon: <User className="w-6 h-6 text-white" />,
    title: data.features.card1_title,
    description: data.features.card1_text,
  },
  {
    icon: <Search className="w-6 h-6 text-white" />,
    title: data.features.card2_title,
    description: data.features.card2_text,
  },
  {
    icon: <Shield className="w-6 h-6 text-white" />,
    title: data.features.card3_title,
    description: data.features.card3_text,
  },
  {
    icon: <MapPin className="w-6 h-6 text-white" />,
    title: data.features.card4_title,
    description: data.features.card4_text,
  },
];

const FeaturesSection = () => {
  return (
    <section className="pt-[60px] md:pt-[120px]" id="about">
      <div className="container">
        <div className="grid grid-cols-1 2xl:grid-cols-2 gap-4 2xl:gap-5">
          <h4 className="flex 2xl:hidden items-center  text-[#71AF42] text-[14px]  border-b-4 border-[#71AF42] pb-[10px] w-[200px] gap-3">
            <span className="w-[8px] h-[8px] flex items-center text-[30px]">
              •
            </span>
            {data.features.features}
          </h4>
          <h2 className="text-[28px] md:text-[32px] 2xl:text-[36px] leading-[39px] md:leading-[45px] 2xl:leading-[50px] font-semibold text-[#121418]">
            {data.features.title1}
          </h2>

          <div className="flex flex-col">
            <h4 className="hidden 2xl:flex items-center  text-[#71AF42] text-[14px]  border-b-4 border-[#71AF42] pb-[10px] w-[200px] gap-3">
              <span className="w-[8px] h-[8px] flex items-center text-[30px]">
                •
              </span>
              {data.features.features}
            </h4>

            <p className="2xl:mt-[24px] text-[#696969]">
              {data.features.text1}
            </p>

          </div>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-6 mt-[24px]"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 border border-[#CFCFCF] rounded-[20px]"
            >
              <div className="bg-[#71AF42] w-[52px] h-[52px] flex items-center justify-center rounded-[16px] mb-4">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-[18px] md:text-[20px] leading-[25px] md:leading-[28px]">
                {feature.title}
              </h3>
              <p className="text-[#696969] text-[16px] mt-2 leading-[26px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
