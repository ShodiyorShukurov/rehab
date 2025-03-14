import React, { useState } from 'react';
import { Play } from 'lucide-react';
import videoImg from '../assets/video-section.jpg';

const VideoModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="pt-[60px]">
      <div className="container">
        <div className="flex justify-center">
          <div
            className="relative cursor-pointer group w-full max-w-[820px]"
            // onClick={() => setIsOpen(true)}
            style={{mask: "linear-gradient(rgb(0, 0, 0) 58%, rgba(0, 0, 0, 0) 100%)"}}
          >
            <img
              src={videoImg}
              alt="Thumbnail"
              className="w-full max-w-[820px] rounded-lg"
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

        {isOpen && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            onClick={() => setIsOpen(false)}
          >
            <div
              className="rounded-[16px] max-w-[1000px] w-full relative p-[20px]"
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
    </section>
  );
};

export default VideoModal;
