import 'bootstrap-icons/font/bootstrap-icons.css';
import Title from './Title';
import { motion } from 'framer-motion';

const menuItems = [
    {
        image: 'https://themewagon.github.io/Bootslander/assets/img/details-1.png',
        title: 'Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.',
        content1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        items: ['Ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'Duis aute irure dolor in reprehenderit in voluptate velit.', 'Ullam est qui quos consequatur eos accusamus.']
    },
    {
        image: 'https://themewagon.github.io/Bootslander/assets/img/details-2.png',
        title: 'Corporis temporibus maiores provident.',
        content1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        content2: 'Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    },
    {
        image: 'https://themewagon.github.io/Bootslander/assets/img/details-3.png',
        title: 'Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.',
        content2: 'Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus quia minima quod. Sunt saepe odit aut quia voluptatem hic voluptas dolor doloremque.',
        items: ['Ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'Duis aute irure dolor in reprehenderit in voluptate velit.', 'Facilis ut et voluptatem aperiam. Autem soluta ad fugiat.']
    },
    {
        image: 'https://themewagon.github.io/Bootslander/assets/img/details-4.png',
        title: 'Sunt consequatur ad ut est nulla consectetur reiciendis animi voluptas.',
        content1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        content2: 'Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    }
];

const Details = () => {
  return (
    <div className="p-4 md:p-5 lg:p-7 mt-14">
        <div className="w-full md:w-[85%] lg:w-[85%] mx-auto">
            <Title title={"DETAILS"} content={"Check Our Details"}/>
            {
                menuItems.map((item, index) =>{
                    return <div key={index} className="flex flex-col lg:flex-row items-center gap-6 mb-20">
                            <motion.img 
                                className={`${index%2===0?'order-1':'order-1 lg:order-2'} w-[95%] lg:w-[45%]`} src={item.image} alt=""
                                initial={{ scale: 1.2, opacity: 0 }} 
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                                viewport={{ once: true }}
                            />
                            <motion.div 
                                className={`${index%2===0?'order-2':'order-2 lg:order-1'} flex flex-1 flex-col gap-3`}
                                initial={{ opacity: 0, y: 80 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl font-bold text-blue-word">{item.title}</h2>
                                <p className="italic text-[16px]">{item?.content1}</p>
                                <p className="text-[16px]">{item?.content2}</p>
                                {item?.items && item.items.map((itemIn, index) =>{
                                    return <div key={index} className="flex gap-2 items-center">
                                            <i className="text-green-btn bi bi-check"></i>
                                            <p>{itemIn}</p>
                                        </div>
                                })}
                            </motion.div>
                        </div>
                })
            }
        </div>
    </div>
  )
}

export default Details