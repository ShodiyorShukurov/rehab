import data from '../mock/data.json'

const Testimonials = () => {
  const testimonials = [
    {
      name: data.testimonial.card1_title,
      role: data.testimonial.card1_subtitle,
      text: data.testimonial.card1_text,
      image: 'https://randomuser.me/api/portraits/women/1.jpg',
    },
    {
      name: data.testimonial.card2_title,
      role: data.testimonial.card2_subtitle,
      text: data.testimonial.card2_text,
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      name: data.testimonial.card3_title,
      role: data.testimonial.card3_subtitle,
      text: data.testimonial.card3_text,
      image: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    {
      name: data.testimonial.card4_title,
      role: data.testimonial.card4_subtitle,
      text: data.testimonial.card4_text,
      image: 'https://randomuser.me/api/portraits/men/2.jpg',
    },
    {
      name: data.testimonial.card5_title,
      role: data.testimonial.card5_subtitle,
      text: data.testimonial.card5_text,
      image: 'https://randomuser.me/api/portraits/women/3.jpg',
    },
    {
      name: data.testimonial.card6_title,
      role: data.testimonial.card6_subtitle,
      text: data.testimonial.card6_text,
      image: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
  ];

  return (
    <section
      className="py-[100px] bg-[#F7F7F7]"
      style={{
        mask: 'linear-gradient(rgb(0, 0, 0) 75%, rgba(0, 0, 0, 0) 100%)',
      }}
    >
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-[28px] md:text-[32px] 2xl:text-[36px] leading-[39px] md:leading-[45px] 2xl:leading-[50px] font-semibold">{data.testimonial.title}</h2>
          <p className="text-gray-600">
          {data.testimonial.text}
          </p>
        </div>
        <div className="grid md:grid-cols-2 2xl:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-white p-6 rounded-[16px]">
              <div className="flex items-center justify-between gap-4 mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    focusable="false"
                    color="var(#007bbd, rgb(0, 123, 189))"
                    style={{
                      userSelect: 'none',
                      width: '28px',
                      height: '28px',
                      display: 'inline-block',
                      fill: '#007bbd',
                      color: 'var(#007bbd, rgb(0, 123, 189))',
                      flexShrink: 0,
                    }}
                  >
                    <g color="var(#007bbd, rgb(0, 123, 189))" weight="fill">
                      <path d="M116,72v88a48.05,48.05,0,0,1-48,48,8,8,0,0,1,0-16,32,32,0,0,0,32-32v-8H40a16,16,0,0,1-16-16V72A16,16,0,0,1,40,56h60A16,16,0,0,1,116,72ZM216,56H156a16,16,0,0,0-16,16v64a16,16,0,0,0,16,16h60v8a32,32,0,0,1-32,32,8,8,0,0,0,0,16,48.05,48.05,0,0,0,48-48V72A16,16,0,0,0,216,56Z"></path>
                    </g>
                  </svg>
                </div>
              </div>
              <h4 className="text-[16px] leading-[22px] font-semibold text-[#121418]">
                {t.name}
              </h4>
              <p className="text-[14px] leading-[22px] text-[#696969] mt-[4px]">
                {t.role}
              </p>
              <p className="text-[16px] leading-[22px]  text-[#121418] mt-[10px]">
                "{t.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
