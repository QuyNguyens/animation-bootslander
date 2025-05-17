import { motion } from 'framer-motion';
import Title from "./Title"
import { useActiveSection } from "../contexts/ActiveSectionContext"

const menuItems = [
    {
        isPolular: false,
        type: 'Free Plan',
        desc: 'Ullam mollitia quasi nobis soluta in voluptatum et sint palora dex strater',
        amount: 0,
        isActive: false,
        whiteList: ['Quam adipiscing vitae proin', 'Nec feugiat nisl pretium', 'Nulla at volutpat diam uteera'],
        backList: ['Pharetra massa massa ultricies','Massa ultricies mi quis hendrerit','Voluptate id voluptas qui sed aperiam rerum','Iure nihil dolores recusandae odit voluptatibus']
    },
    {
        isPolular: true,
        type: 'Business Plan',
        desc: 'Ullam mollitia quasi nobis soluta in voluptatum et sint palora dex strater',
        amount: 29,
        isActive: true,
        whiteList: ['Quam adipiscing vitae proin', 'Nec feugiat nisl pretium', 'Nulla at volutpat diam uteera', 'Pharetra massa massa ultricies','Massa ultricies mi quis hendrerit','Voluptate id voluptas qui sed aperiam rerum'],
        backList: ['Iure nihil dolores recusandae odit voluptatibus']
    },
    {
        isPolular: false,
        type: 'Developer Plan',
        desc: 'Ullam mollitia quasi nobis soluta in voluptatum et sint palora dex strater',
        amount: 49,
        isActive: false,
        whiteList: ['Quam adipiscing vitae proin', 'Nec feugiat nisl pretium', 'Nulla at volutpat diam uteera','Pharetra massa massa ultricies','Massa ultricies mi quis hendrerit','Voluptate id voluptas qui sed aperiam rerum','Iure nihil dolores recusandae odit voluptatibus'],
    }
]
const Price = () => {

    const { setActiveSection } = useActiveSection();

    const handleClick = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        setActiveSection(id);
    };

  return (
    <div className="p-4 md:p-5 lg:p-7 mt-6">
        <div className="w-full md:w-[85%] lg:w-[85%] mx-auto">
            <Title title={"Pricing"} content={"Check Our Pricing"}/>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
                {
                    menuItems.map((item, index) =>{
                        return <motion.div key={index} 
                                    className="relative bg-accent-faint rounded-2xl flex flex-col gap-4 p-8"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    viewport={{ once: true }} 
                                >
                            <h2 className="text-2xl text-blue-word font-medium">{item.type}</h2>
                            <p className='w-[80%]'>{item.desc}</p>
                            <h4 className="text-green-btn font-bold text-5xl"><sup>$</sup>{item.amount} <span className="text-gray-400 text-xl font-normal">/ month</span></h4>
                            <div className="flex flex-col gap-1 overflow-hidden">
                                <button onClick={() => handleClick("Home")} className={`${item.isActive?'bg-green-btn text-white':'border border-1 border-gray-600 hover:bg-green-btn hover:text-white hover:border-green-btn duration-500'} rounded-md p-3`}>Start a free trial</button>    
                                <span className="text-sm text-center">No credit card required</span>
                            </div>
                            {
                                item?.whiteList && item.whiteList.map((item, index) =>{
                                    return <div key={index} className="flex gap-1 items-center">
                                                <i className="bi bi-check text-xl text-green-btn font-bold"></i>
                                                <span className="text-gray-700">{item}</span>
                                    </div>
                                })
                            }
                            {
                                item?.backList && item.backList.map((item, index) =>{
                                    return <div key={index} className="flex gap-2 items-center">
                                                <i className="bi bi-x text-xl text-gray-500"></i>
                                                <span className=" text-gray-400 line-through">{item}</span>
                                    </div>
                                })
                            }
                            {
                               item.isPolular && <button className="px-4 py-[6px] bg-green-btn text-white font-medium rounded-md absolute right-4 top-4">Popular</button>

                            }
                        </motion.div>
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Price