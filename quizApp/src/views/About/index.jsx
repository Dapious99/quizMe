import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-200 h-screen px-16 md:px-5 sm:px-3">
      <div className="font-sans flex flex-col gap-4 text-lg py-3">
        <p>
          Welcome to{" "}
          <span className="italic font-bold text-blue-600">quizMe</span>, where
          learning meets fun!
        </p>
        <p>
          At <span className="italic font-semibold">quizMe</span>, we believe
          that education should be engaging, interactive, and accessible to
          everyone. That's why we've created a unique platform that combines the
          thrill of quizzes with the richness of history, making learning both
          enjoyable and informative.
        </p>
        <p>
          Our mission is to provide users with an immersive experience that
          sparks curiosity, encourages exploration, and fosters a deeper
          understanding of the world around us. Whether you're a history
          enthusiast, a trivia buff, or someone simply looking to expand your
          knowledge, <span className="italic font-semibold">quizMe</span> has
          something for everyone.
        </p>
        <p>
          Explore a wide range of topics spanning ancient civilizations, pivotal
          historical events, notable figures, and much more. Test your knowledge
          with our diverse collection of quizzes, designed to challenge and
          inspire learners of all ages.
        </p>
        <p>
          But <span className="italic font-semibold">quizMe</span> is more than
          just a quiz app; it's a journey through time, a portal to the past,
          and a window into the wonders of history. With rich content, engaging
          visuals, and user-friendly features, we strive to make learning
          enjoyable.
        </p>
        <p>
          Join us on this exciting adventure as we explore the annals of history
          together. Let's embark on a quest for knowledge, discovery, and
          enlightenment with{" "}
          <span className="italic font-semibold">quizMe</span>.
        </p>
        <p>Happy learning!</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="shadow-lg rounded-md bg-white text-center text-blue-600 p-3">
          <div>
            <img />
          </div>
          <p>Omotosho Kamalideen Opeyemi(Kodewarlock)</p>
          <p>Frontend & Lead Developer</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
