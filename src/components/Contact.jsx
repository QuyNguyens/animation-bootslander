import { motion } from 'framer-motion';
import Title from "./Title"

const menuItems = [
    {
        icon: <i className="text-green-btn group-hover:text-white text-xl bi bi-geo-alt flex-shrink-0"></i>,
        name: 'Address',
        contact: 'A108 Adam Street, New York, NY 535022'
    },
     {
        icon: <i className="text-green-btn group-hover:text-white text-xl bi bi-telephone flex-shrink-0"></i>,
        name: 'Call Us',
        contact: '+1 5589 55488 55'
    },
     {
        icon: <i className="text-green-btn group-hover:text-white text-xl bi bi-envelope flex-shrink-0"></i>,
        name: 'Email Us',
        contact: 'info@example.com'
    }
]
const Contact = () => {
  return (
    <div id="Contact" className="p-4 md:p-5 lg:p-7 mt-8">
        <div className="w-full md:w-[85%] lg:w-[85%] mx-auto">
            <Title title={"Contact"} content={"Check Our Contact"}/>
            <div className="flex flex-col lg:flex-row justify-between gap-6">
                <div className="flex flex-col gap-8 w-full lg:w-[30%]">
                    {
                        menuItems.map((item, index) =>{
                            return <motion.div key={index} className="flex items-center gap-3"
                                        initial={{opacity: 0, y:50}}
                                        whileInView={{opacity: 1, y: 0}}
                                        transition={{duration: 1, delay: index * 0.2}}
                                        viewport={{once: true}}
                                >
                                <div className="w-11 h-11 flex justify-center items-center rounded-full hover:bg-green-btn group bg-accent-green">
                                    {item.icon}
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[18px] font-medium text-blue-word">{item.name}</span>
                                    <p className="text-sm">{item.contact}</p>
                                </div>
                            </motion.div>
                        })
                    }
                </div>
                <motion.div className="flex flex-col gap-7 flex-1"
                    initial={{opacity: 0, y:80}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 1, delay: 0.2}}
                    viewport={{once: true}}
                >
                    <div className="grid grid-cols-2 gap-6">
                        <input className="py-3 px-4 border border-gray-300 outline-none focus:border-green-btn" type="text" placeholder="Your Name"/>
                        <input className="py-3 px-4 border border-gray-300 outline-none focus:border-green-btn" type="email" placeholder="Your Email"/>
                    </div>
                    <input className="py-3 px-4 border border-gray-300 outline-none focus:border-green-btn" type="text" placeholder="Subject"/>
                    <textarea className="py-3 px-4 border border-gray-300 rounded-md resize-none h-[120px] outline-none focus:border-green-btn" placeholder="Message" type="text" >
                    </textarea>
                    <div className="flex justify-center">
                        <button className="text-white bg-green-btn hover:bg-green-btn-hv rounded-full transition-colors duration-500 px-8 py-3">Send Message</button>
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Contact