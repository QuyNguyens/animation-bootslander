import { motion } from 'framer-motion';
import Title from "./Title"

const menuItems = [
    {
        name: 'Walter White',
        position: 'Chief Executive Officer'
    },{
        name: 'Sarah Jhonson',
        position: 'Product Manager'
    },{
        name: 'William Anderson',
        position: 'CTO'
    }
]

const OurTeams = () => {
  return (
    <div className="p-4 md:p-5 lg:p-7 mt-6">
        <div className="w-full md:w-[85%] lg:w-[85%] mx-auto">
            <Title title={"Team"} content={"Check Our Team"}/>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    menuItems.map((item, index) =>{
                        return <motion.div key={index} 
                                className="relative mb-16"
                                initial={{ opacity: 0, y: 80 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }} 
                            >
                            <img 
                                className="w-full h-full" 
                                src={`https://themewagon.github.io/Bootslander/assets/img/team/team-${index+1}.jpg`} alt=""
                            />
                            <div className="absolute w-[90%] left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 flex flex-col gap-2 bg-white shadow-md p-3">
                                <h2 className="text-[18px] text-blue-word font-bold">{item.name}</h2>
                                <div className="h-[1px] w-[60px] bg-gray-500"></div>
                                <div className="flex justify-between items-center">
                                    <span className="italic text-gray-500 text-sm">{item.position}</span>
                                    <div className="flex gap-2">
                                        <i className="text-[16px] text-gray-400 bi bi-twitter-x"></i>
                                        <i className="text-[16px] text-gray-400 bi bi-facebook"></i>
                                        <i className="text-[16px] text-gray-400 bi bi-instagram"></i>
                                        <i className="text-[16px] text-gray-400 bi bi-linkedin"></i>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default OurTeams