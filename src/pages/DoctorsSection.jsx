import { Linkedin } from 'lucide-react';
import data from '../mock/data.json'

const doctors = [
  {
    name: data.doctors.card1_title,
    specialty: data.doctors.card1_text,
    image: 'https://placehold.co/300',
  },
  {
    name: data.doctors.card2_title,
    specialty: data.doctors.card2_text,
    image: 'https://placehold.co/300',
  },
  {
    name: data.doctors.card3_title,
    specialty: data.doctors.card3_text,
    image: 'https://placehold.co/300',
  },
  {
    name: data.doctors.card4_title,
    specialty: data.doctors.card4_text,
    image: 'https://placehold.co/300',
  },
];

const DoctorsSection =()=> {
  return (
    <section className="py-[100px]">
      <div className="container">
        <h4 className="text-[#007bbd] text-[14px]  border-b-4 border-[#007bbd] pb-[10px] w-[200px] flex items-center gap-3">
          <span className="w-[8px] h-[8px] flex items-center text-[30px]">
            •
          </span>
          {data.doctors.teams}
        </h4>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center my-8">
          <div>
            <h2 className="text-[32px] 2xl:text-[36px] leading-[45px] 2xl:leading-[50px] font-semibold text-[#121418]">{data.doctors.title}</h2>
            <p className="text-[#696969] text-[16px] leading-[26px] mt-[10px]">
              {data.doctors.text}
            </p>
          </div>
          <button className="bg-[#007bbd] text-white px-[24px] py-[12px] rounded-full text-[16px] leading-[26px] w-fit mt-[24px] md:mt-0">
           {data.doctors.button_text}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-6">
          {doctors.map((doctor, index) => (
            <div key={index} className="overflow-hidden">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-[395px] object-cover rounded-[16px]"
              />
              <div className="mt-4 flex justify-between w-full">
                <div>
                  <h3 className="text-[18px] md:text-[20px] font-semibold leading-[25px] md:leading-[28px] text-[#121418]">
                    {doctor.name}
                  </h3>
                  <p className="text-[14px] leading-[22px] text-[#11131799] mt-[2px]">
                    {doctor.specialty}
                  </p>
                </div>
                <Linkedin className="stroke-[#121418] text-xl cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


export default DoctorsSection