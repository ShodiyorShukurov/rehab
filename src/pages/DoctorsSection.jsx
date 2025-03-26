import { Linkedin } from 'lucide-react';
import data from '../mock/data.json';
import card1Img from '../assets/card-1.png';
import card2Img from '../assets/card-2.png';
import card3Img from '../assets/card-3.png';
import card4Img from '../assets/card-4.png';
import card5Img from '../assets/card-5.png';

const doctors = [
  {
    name: data.doctors.card1_title,
    specialty: data.doctors.card1_text,
    image: card1Img,
  },
  {
    name: data.doctors.card2_title,
    specialty: data.doctors.card2_text,
    image: card2Img,
  },
  {
    name: data.doctors.card3_title,
    specialty: data.doctors.card3_text,
    image: card3Img,
  },
  {
    name: data.doctors.card4_title,
    specialty: data.doctors.card4_text,
    image: card4Img,
  },
  {
    name: data.doctors.card5_title,
    specialty: data.doctors.card5_text,
    image: card5Img,
  },
];

const DoctorsSection = () => {
  return (
    <section className="py-[100px]" id="team">
      <div className="container">
        <h4 className="text-[#71AF42] text-[14px]  border-b-4 border-[#71AF42] pb-[10px] w-[200px] flex items-center gap-3">
          <span className="w-[8px] h-[8px] flex items-center text-[30px]">
            •
          </span>
          {data.doctors.teams}
        </h4>
        <div className=" my-8">
          <div>
            <h2 className="text-[32px] 2xl:text-[36px] leading-[45px] 2xl:leading-[50px] font-semibold text-[#121418]">
              {data.doctors.title}
            </h2>
            <p className="text-[#696969] text-[16px] leading-[26px] mt-[10px]">
              {data.doctors.text}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-6">
          {doctors.map((doctor, index) => (
            <div key={index} className="overflow-hidden">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-[395px] object-contain rounded-[16px] border p-2"
              />
              <div className="mt-4 w-full">
                <div>
                  <h3 className="text-[18px] md:text-[20px] font-semibold leading-[25px] md:leading-[28px] text-[#121418]">
                    {doctor.name}
                  </h3>
                  <p className="text-[14px] leading-[22px] text-[#11131799] mt-[2px]">
                    {doctor.specialty}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
