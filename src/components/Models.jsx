import React from 'react';
import PropTypes from 'prop-types';
import SectionCard from './SectionCard'; 
import SpotlightCard from './SpotlightCard';

const images = [
  {
    img: "https://thumbs.dreamstime.com/b/healthy-concept-mental-physical-social-health-isolated-white-background-three-important-things-necessary-good-state-188091536.jpg",
    title: "Your Health + ",
    text: "Know more about your personal health and simple yet impactful ways to improve it !!",
  },
  {
    img: "https://thumbs.dreamstime.com/b/healthy-concept-mental-physical-social-health-isolated-white-background-three-important-things-necessary-good-state-188091536.jpg",
    title: "Manage Diet",
    text: "Know more about your personal health and simple yet impactful ways to improve it !!",
  },
  {
    img: "https://thumbs.dreamstime.com/b/healthy-concept-mental-physical-social-health-isolated-white-background-three-important-things-necessary-good-state-188091536.jpg",
    title: "Fitness",
    text: "Know more about your personal health and simple yet impactful ways to improve it !!",
  }
];

const Models = (props) => {
  return (
    <section className="mx-auto p-6 h-[75vh]">
      {/* Section Title */}
      <div className="text-center animate-popIn">
        <h2 className="font-bold tracking-wider text-4xl text-primary">
          Try Our AI-Enhanced Chatbot
        </h2>
        <p className="mt-2 text-[blueviolet] text-lg">
          Experience next-gen AI with our interactive models.
        </p>
      </div>

      {/* Section Cards Grid */}
      <div className="mt-16 w-full flex flex-wrap gap-10 justify-around">
        {images.map((image, index) => (
          <SpotlightCard
            key={index}
            className="custom-spotlight-card flex-1 py-8 h-auto flex flex-col justify-center"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <SectionCard
              key={index}
              title={image.title}
              description={image.text}
              image={image.img}
            />
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
};

export default Models;