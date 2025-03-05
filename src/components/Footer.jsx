import data from '../mock/data.json';

const Footer = () => {
  return (
    <footer className="bg-[#121418] text-white py-[48px]">
      <div className="container">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center w-full pb-6 border-b-[1px] border-[#505254]">
          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.3333 8.5C16.3333 12.6421 12.9754 16 8.83325 16H1.33325V8.5C1.33325 4.35786 4.69111 1 8.83325 1C12.9754 1 16.3333 4.35786 16.3333 8.5Z"
                  fill="#fff"
                />
                <path
                  d="M16.3333 23.5C16.3333 19.3579 19.6911 16 23.8333 16H31.3333V23.5C31.3333 27.6421 27.9754 31 23.8333 31C19.6911 31 16.3333 27.6421 16.3333 23.5Z"
                  fill="#fff"
                />
                <path
                  d="M1.33325 23.5C1.33325 27.6421 4.69111 31 8.83325 31H16.3333V23.5C16.3333 19.3579 12.9754 16 8.83325 16C4.69111 16 1.33325 19.3579 1.33325 23.5Z"
                  fill="#fff"
                />
                <path
                  d="M31.3333 8.5C31.3333 4.35786 27.9754 1 23.8333 1H16.3333V8.5C16.3333 12.6421 19.6911 16 23.8333 16C27.9754 16 31.3333 12.6421 31.3333 8.5Z"
                  fill="#fff"
                />
              </svg>

              <h4 className="font-semibold text-[24px] leading-[34px]">
                Enima
              </h4>
            </div>
            <p className="text-[16px] leading-[26px] mt-[16px] md:max-w-[360px] mb-[40px] md:mb-0">
              {data.footer.title}
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:pr-6">
            <div className="flex flex-col gap-1">
              <h4 className="font-semibold text-[16px] leading-[22px]">
                {data.footer.email_address}
              </h4>
              <a
                href="malito:enima@mail.com"
                className="text-[14px] leading-[22px]"
              >
                enima@mail.com
              </a>
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="font-semibold text-[16px] leading-[22px]">
                {data.footer.phone_number}
              </h4>
              <a href="tel:(+1) 2912324" className="text-[14px] leading-[22px]">
                (+1) 2912324
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between py-[24px] border-b-[1px] border-[#505254]">
          <div className="flex  flex-col gap-1">
            <h4 className="font-semibold text-[16px] leading-[22px]">
              {data.footer.hours}
            </h4>
            <p className="text-[14px] leading-[22px] text-[#fffc]">
              {data.footer.weekdays}: 09:00 - 18:00
            </p>
            <p className="text-[14px] leading-[22px] text-[#fffc]">
              {data.footer.weekend}: 09:00 - 15:00
            </p>
          </div>

          <div className="hidden md:block border-l-[1px] border-[#505254] h-[230px]"></div>

          <ul className="flex  flex-col md:flex-row  justify-between gap-10 mt-[50px] md:mt-0 md:pr-6">
            <li className="flex flex-col gap-3">
              <h4 className="font-semibold text-[16px] leading-[22px]">
                {data.footer.subtitle1}
              </h4>
              <a href="#" className="text-[16px] leading-[26px]">
                {data.footer.link1}
              </a>
              <a href="#" className="text-[16px] leading-[26px]">
                {data.footer.link2}
              </a>
              <a href="#" className="text-[16px] leading-[26px]">
                {data.footer.link3}
              </a>
              <a href="#" className="text-[16px] leading-[26px]">
                {data.footer.link4}
              </a>
              <a href="#" className="text-[16px] leading-[26px]">
                {data.footer.link5}
              </a>
            </li>
            <li className="flex flex-col gap-3">
              <h4 className="font-semibold text-[16px] leading-[22px]">
                {data.footer.subtitle2}
              </h4>
              <a href="#" className="text-[16px] leading-[26px]">
                {data.footer.link6}
              </a>
              <a href="#" className="text-[16px] leading-[26px]">
                {data.footer.link7}
              </a>
              <a href="#" className="text-[16px] leading-[26px]">
                {data.footer.link8}
              </a>
            </li>
            <li className="flex flex-col gap-3">
              <h4 className="font-semibold text-[16px] leading-[22px]">
                {data.footer.subtitle3}
              </h4>
              <a href="#" className="text-[16px] leading-[26px]">
                Twitter
              </a>
              <a href="#" className="text-[16px] leading-[26px]">
                Instagram
              </a>
              <a href="#" className="text-[16px] leading-[26px]">
                Linkedin
              </a>
              <a href="#" className="text-[16px] leading-[26px]">
                Facebook
              </a>
            </li>
          </ul>
        </div>

        <div className="flex  flex-col md:flex-row  items-center justify-between pt-[24px]">
          <p className="text-[14px] leading-[22px]">Copyright © Enima </p>
          <p className="text-[14px] leading-[22px] mt-[14px] md:mt-0">
          {data.footer.powered}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
