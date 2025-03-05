import { Linkedin } from 'lucide-react';

const doctors = [
  {
    name: 'Dr. Emily Claire',
    specialty: 'Pediatrician',
    image: 'https://placehold.co/300',
  },
  {
    name: 'Dr. John Doe',
    specialty: 'Pediatrician',
    image: 'https://placehold.co/300',
  },
  {
    name: 'Dr. Ema Watson',
    specialty: 'Dermatologist',
    image: 'https://placehold.co/300',
  },
  {
    name: 'Dr. Rose J',
    specialty: 'General Practitioner',
    image: 'https://placehold.co/300',
  },
];

const DoctorsSection =()=> {
  return (
    <section className="py-12">
      <div className="container">
        <h4 className="text-[#007bbd] text-[14px]  border-b-4 border-[#007bbd] pb-[10px] w-[200px] flex items-center gap-3">
          <span className="w-[8px] h-[8px] flex items-center text-[30px]">
            •
          </span>
          Teams
        </h4>
        <div className="flex justify-between items-center my-8">
          <div>
            <h2 className="text-[36px] leading-[50px] font-semibold text-[#121418]">Meet Our Doctor</h2>
            <p className="text-[#696969] text-[16px] leading-[26px] mt-[10px]">
              Our doctor is highly skilled and an expert in their field.
            </p>
          </div>
          <button className="bg-[#007bbd] text-white px-[24px] py-[12px] rounded-full text-[16px] leading-[26px]">
            View More
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doctor, index) => (
            <div key={index} className="overflow-hidden">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-[395px] object-cover rounded-[16px]"
              />
              <div className="mt-4 flex justify-between w-full">
                <div>
                  <h3 className="text-[20px] font-semibold leading-[28px] text-[#121418]">
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