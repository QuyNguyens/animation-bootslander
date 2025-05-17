import { motion } from 'framer-motion';

const Title = ({title, content}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
    >
        <span className="uppercase text-[18px] text-gray-400 inline-flex items-center">
            {title}
            <span className="block w-32 h-[2px] bg-green-btn ml-2"></span>
        </span>

        <h1 className="uppercase text-3xl text-blue-word font-bold pb-16">{content}</h1>
    </motion.div>
  )
}

export default Title