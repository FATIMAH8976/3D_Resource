import {motion} from 'framer-motion'
import {useState} from 'react'
import {styles} from '../styles'
import {fadeIn, textVariant} from '../utils/motion'
import {SectionWrapper} from '../hoc' 
import {testimonials} from '../constants'

const FeedbacksCard = ({index, Question, testimonial}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <motion.div variants={fadeIn("", "spring", index * 0.5, 0.75)}>
      <div className='bg-black-200 rounded-[22px] overflow-hidden'>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className='w-full py-6 px-8 flex justify-between items-center text-left hover:bg-black-300 transition-colors'
        >
          <p className='text-white font-semibold text-[18px] pr-4'>{Question}</p>
          <span className='text-white text-[24px] flex-shrink-0'>{isOpen ? '−' : '+'}</span>
        </button>
        
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className='px-8 pb-6'
          >
            <p className='text-white tracking-wider text-[15px] leading-relaxed'>{testimonial}</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

const FAQs = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>For Brands. </p>
          <h2 className={styles.sectionHeadText}>FAQs.</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-col gap-4`}>
        {testimonials.map((testimonial, index) => (
          <FeedbacksCard key={testimonial.id} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(FAQs, "");