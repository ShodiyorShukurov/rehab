import React from 'react';
import { User, Search, Shield, MapPin } from 'lucide-react';

const features = [
  {
    icon: <User className="w-6 h-6 text-white" />,
    title: 'Expert Medical Team',
    description:
      'Our skilled doctors and specialists bring years of experience health care.',
  },
  {
    icon: <Search className="w-6 h-6 text-white" />,
    title: 'Patient-Centered',
    description:
      'Your health and comfort come first, with personalized care plans for each patient.',
  },
  {
    icon: <Shield className="w-6 h-6 text-white" />,
    title: 'Advanced Diagnostic',
    description:
      'We use the latest medical equipment to ensure accurate diagnoses.',
  },
  {
    icon: <MapPin className="w-6 h-6 text-white" />,
    title: 'Convenient Location',
    description:
      'Easily accessible clinic with flexible hours and booking to fit your busy schedule.',
  },
];

const FeaturesSection = () => {
  return (
    <section className="pt-[60px] md:pt-[120px]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5">
          <h4 className="flex lg:hidden items-center  text-[#007bbd] text-[14px]  border-b-4 border-[#007bbd] pb-[10px] w-[200px] gap-3">
            <span className="w-[8px] h-[8px] flex items-center text-[30px]">
              •
            </span>
            Features
          </h4>
          <h2 className="text-[28px] md:text-[32px] lg:text-[36px] leading-[39px] md:leading-[45px] lg:leading-[50px] font-semibold text-[#121418]">
            Why Choose Us for Your Healthcare Needs?
          </h2>

          <div className="flex flex-col">
            <h4 className="hidden lg:flex items-center  text-[#007bbd] text-[14px]  border-b-4 border-[#007bbd] pb-[10px] w-[200px] gap-3">
              <span className="w-[8px] h-[8px] flex items-center text-[30px]">
                •
              </span> 
              Features
            </h4>

            <p className="lg:mt-[24px] text-[#696969]">
              Choosing the right clinic is essential for your well-being. At our
              medical clinic, we are dedicated to providing exceptional,
              personalized care. With our experienced staff and advanced
              technology, we prioritize your health and comfort.
            </p>

            <button className="mt-6 bg-[#007bbd] text-white px-6 py-3 rounded-full  hover:bg-blue-600 transition w-fit">
              Learn More
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-[24px]">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 border border-[#CFCFCF] rounded-[20px]"
            >
              <div className="bg-[#007bbd] w-[52px] h-[52px] flex items-center justify-center rounded-[16px] mb-4">
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
