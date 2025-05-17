import { motion } from 'framer-motion';
import { useActiveSection } from "../contexts/ActiveSectionContext"
import { useEffect, useState } from 'react';

const menuItems = [{
    icon: <i className="text-3xl group-hover:text-white text-green-btn bi bi-buildings"></i>,
    name: 'Eius provident',
    content: 'Magni repellendus vel ullam hic officia accusantium ipsa dolor omnis dolor voluptatem'
},
{
    icon: <i className="text-3xl group-hover:text-white group-hover:bg-green-btn text-green-btn bi bi-clipboard-pulse"></i>,
    name: 'Rerum aperiam',
    content: 'Autem saepe animi et aut aspernatur culpa facere. Rerum saepe rerum voluptates quia'
},
{
    icon: <i className="text-3xl group-hover:text-white group-hover:bg-green-btn text-green-btn bi bi-command"></i>,
    name: 'Veniam omnis',
    content: 'Omnis perferendis molestias culpa sed. Recusandae quas possimus. Quod consequatur corrupti'
}
,{
    icon: <i className="text-3xl group-hover:text-white group-hover:bg-green-btn text-green-btn bi bi-graph-up-arrow"></i>,
    name: 'Delares sapiente',
    content: 'Sint et dolor voluptas minus possimus nostrum. Reiciendis commodi eligendi omnis quideme lorenda'
}
];

const AboutUs = () => {

    const [isMobile, setIsMobile] = useState(false);

    const { setActiveSection } = useActiveSection();

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleClick = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        setActiveSection(id);
    };

  return (
    <div className="p-4 md:p-5 lg:p-7 mt-8">
        <div className="w-full md:w-[85%] lg:w-[85%] mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
            <motion.div
                className="flex flex-col gap-4 w-full md:w-[80%] lg:w-[42%]"
                initial={{ opacity: 0, x: -120 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                >
                <span className="self-start bg-gray-100 text-green-btn rounded-md p-2 pl-4 pr-4">
                    About Us
                </span>

                <p className="text-blue-word text-4xl font-bold">Ducimus rerum libero reprehenderit cumque</p>

                <p>Ipsa sint sit. Quis ducimus tempore dolores impedit et dolor cumque alias maxime. Enim reiciendis minus et rerum hic non. Dicta quas cum quia maiores iure. Quidem nulla qui assumenda incidunt voluptatem tempora deleniti soluta.</p>

                <div onClick={() => handleClick("Home")} className="flex gap-2 items-center bg-green-btn rounded-md p-2 pl-6 pr-6 self-start hover:bg-green-btn-hv transition-colors duration-[1000ms]">
                    <button className="text-[17px] text-white">Read More</button>
                    <i className="bi bi-arrow-right text-xl text-white"></i>
                </div>
            </motion.div>
            <div className="flex-1 flex flex-wrap gap-4">
                {
                    menuItems.map((item, index) => {
                        const offsetY = index % 2 === 1 ? -20 : 0;

                        return (
                        <motion.div
                            key={index}
                            className="flex w-full md:w-[48.5%] lg:w-[48.5%] flex-col gap-6 bg-white shadow-md p-4 rounded-md group"
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: isMobile ? 0 : offsetY }}
                            transition={{ duration: 1, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="w-20 h-20 flex justify-center items-center rounded-full bg-gray-100 self-start group-hover:bg-green-btn">
                            {item.icon}
                            </div>
                            <p className="text-blue-word font-bold text-xl">{item.name}</p>
                            <p>{item.content}</p>
                        </motion.div>
                        );
                    })
                    }


            </div>
        </div>
    </div>
  )
}

export default AboutUs