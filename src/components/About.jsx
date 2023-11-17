import React from 'react'
import { Tilt} from 'react-tilt';
import { motion } from 'framer-motion';


import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc';


const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
   <>
   <motion.div variants={textVariant()} className='mt-4 text-secondary text-[19px] max-w-3xl leading-[30px] mb-10'>
    <p className={ styles.sectionSubText}>Introduction</p>
    <h2 className={`${styles.sectionHeadText} mt-3`} >Overview</h2>
   </motion.div>

   <motion.p variants={fadeIn("", "", 0.1, 1)}>
   Greetings! I am a passionate MERN Stack Developer with a flair for creativity and a love for challenging projects.
    My journey in the world of software development has been a thrilling adventure,
     marked by the fusion of cutting-edge technology, artistic design, and a competitive spirit derived from my proficiency in sports.
     Here's a glimpse into who I am and what I bring to the table:
<div className='mt-5'>
👨‍💻 Technical Expertise:
As a MERN Stack Developer, I thrive on transforming ideas into functional, user-friendly applications.
 My hands-on experience with MongoDB, Express.js, React, and Node.js has enabled me to craft dynamic and responsive web solutions that cater to diverse user needs. 
 In addition, my proficiency in C++ has provided me with a strong foundation in programming principles and problem-solving skills, enhancing my ability to tackle complex challenges.
</div>

<div className='mt-5'>

 ⚽ Sports Enthusiast:
Beyond the realm of coding, I am a fervent sports enthusiast.
 Just as in software development, I approach sports with dedication, discipline, and a goal-oriented mindset. My experiences in sports have instilled in me
  valuable traits such as teamwork, leadership, and resilience—qualities that 
  seamlessly translate into my approach to collaborative software development.
  </div>
      
   </motion.p>
   <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
   </>
  )
}

export default SectionWrapper(About, "about");