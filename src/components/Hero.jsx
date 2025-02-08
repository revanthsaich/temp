import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const images = [
  "https://www.hellotars.com/blog/wp-content/uploads/2023/06/7971251_3800893-1-1536x1536.jpg",
  "https://rumorfix.com/wp-content/uploads/2022/12/Medical-Marketing-SEO-Services-For-Best-Healthcare-Providers.png",
  "https://blog.altabel.com/wp-content/uploads/2022/10/chatbot.jpg",
  "https://cdn.clickworker.com/wp-content/uploads/2022/09/HealthcareChatbotTrainingData.webp"
];

const Hero = () => {
  return (
    <>
      {/* Add margin above and below */}
      <div className="grid w-full lg:grid-cols-2 gap-24 items-center mx-5 sm:mx-16 my-[20vh] relative z-10">
        {/* Left Section */}
        <div className="z-20">
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
            AI-Powered Healthcare, Anytime, Anywhere, now easier than ever
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8">
            Get instant, reliable medical insights with our AI-powered consultant.
            Accessible, intelligent, and always ready to guide your healthcare journey with accuracy and care.
          </p>
          <div className="mt-10">
            <Link to="/about" className="btn btn-primary bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300">
              About Us
            </Link>
          </div>
        </div>

        {/* Right Section - Carousel */}
        <div className="hidden lg:block animate-slideRight relative z-10">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            className="rounded-box h-[32rem] w-full overflow-hidden"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                {/* Ensure image fits and fills the container */}
                <img
                  src={image}
                  alt={`carousel-${index}`}
                  className="rounded-box h-full w-full object-contain"
                  style={{ zIndex: 1 }} // Add z-index to images
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Divider */}
      <div className="divider divider-start"></div>
    </>
  );
};

export default Hero;