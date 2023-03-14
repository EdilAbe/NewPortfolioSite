import React from 'react';
import MotionWrap from '../../Wrapper/MotionWrap';
import {motion} from 'framer-motion';
import './About.scss';



function About() {
  const info = [
    {
      title: "Cloud Developer",
      imgUrl: "image",
      description: "I am a cloud developer ..."
    },
    {
      title: "Frontend Developer",
      imgUrl: "image",
      description: "I am a Frontend developer ..."
    },
    {
      title: "Backend Developer",
      imgUrl: "image",
      description: "I am a Backend developer ..."
    }
  ];

  return (
    <>
      <h2 className="header-text">
        <span>Satisfied</span> customers are <br />
        a sign of <span>good</span> work
      </h2>

      <div className="app-info">
        {info.map((profile, index) => (
          <motion.div
            key={profile.title + index}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className = "app-info-item"
          >
            <img src={profile.imgUrl} alt={profile.imgUrl} />
            <h2 className="title-text" style={{ marginTop: 20 }}>
              {profile.title}
            </h2>
            <p className="par-text" style={{ marginTop: 10 }}>
              {profile.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
}
export default MotionWrap(About, "app-about");
//export default About;