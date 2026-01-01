import Tilt from 'react-parallax-tilt'
import { motion } from "framer-motion"

import { styles } from "../styles"

import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"
const ProjectCard = ({ index, name, description, image, }) => {

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <div className="relative w-full h-[360px]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain rounded-2xl"
        />
      </div>
       
        </Tilt>
      </motion.div>
  
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>How Clypso Works for </p>
        <h2 className={styles.sectionHeadText}>Brands</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
         Clypso helps engineer predictable organic reach by injecting high performing short form content into the algorithm through thousands of real creators , clippers , theme page owners. 

Instead of relying on a single brand page, we distribute multiple content angles at scale, letting the algorithm naturally pick winners and push them further. With fixed CPMs and pay-per-view campaigns, brands can forecast reach before launch, making organic growth measurable and repeatable. To the audience it looks organic, but for brands it scales with the precision of paid media that can target any demographic.        </motion.p>
      </div>      
      <div className="mt-20 flex flex-wrap gap-7" >
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
        
        </div>                        
    </>
  )
}

export default SectionWrapper(Works, "works")