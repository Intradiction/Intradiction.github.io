import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { github, website } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const ProjectCard = ({ index, name, description, tags, image, source_code_link, deployment_link }) => {
  return (
    <motion.div variants={ fadeIn("up", "spring", index * 0.5)}>
      <Tilt 
        options={{ max: 45, scale: 1, speed: 450 }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl'/>
          <div className='absolute inset-0 flex justify-end m-1 card-img_hover'>
            { deployment_link ? (
                <div 
                  onClick={() => window.open(deployment_link, "_blank")} 
                  className='black-gradient w-10 h-10 mr-1 rounded-full flex justify-center items-center cursor-pointer'
                >
                  <img src={website} alt='github' className='w-[65%] h-[65%] object-contain'/>  
                </div>
              ) : (
                <></>
              )
            }

            <div 
              onClick={() => window.open(source_code_link, "_blank")} 
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img src={github} alt='github' className='w-[75%] h-[75%] object-contain'/>  
            </div>
          </div>
        </div>
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={tag.name} className={`text-white[14px] ${tag.color}`}>
              {tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Stuff I've made
        </p>
        <h2 className={styles.sectionHeadText}>
          Personal Projects
        </h2>
      </motion.div>
      <div className='w-full flex'>
        <motion.p 
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          The following projects are ones that I've pursued on my own time, with descriptions and links to my github repos. 
          I believe they demonstrate my ability to convert ideas/concepts into tangible code using various technologies
        </motion.p>
      </div>
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "")