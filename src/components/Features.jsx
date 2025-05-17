import 'bootstrap-icons/font/bootstrap-icons.css';
import { motion } from "framer-motion";
import { useActiveSection } from "../contexts/ActiveSectionContext"

import CountUpNumber from './CountUpNumber';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

const menuItems = [
    {
        icon: <i className="text-3xl bi bi-eye" style={{color: '#ffbb2c'}}></i>,
        title: 'Lorem Ipsum'
    },
    {
        icon: <i className="text-3xl bi bi-infinity" style={{color: '#5578ff'}}></i>,
        title: 'Dolor Sitema'
    },
    {
        icon: <i className="text-3xl bi bi-mortarboard" style={{color: '#e80368'}}></i>,
        title: 'Sed perspiciatis'
    },
    {
        icon: <i className="text-3xl bi bi-nut" style={{color: '#e361ff'}}></i>,
        title: 'Magni Dolores'
    },
    {
        icon: <i className="text-3xl bi bi-shuffle" style={{color: '#47aeff'}}></i>,
        title: 'Nemo Enim'
    },
    {
        icon: <i className="text-3xl bi bi-star" style={{color: '#ffa76e'}}></i>,
        title: 'Eiusmod Tempor'
    },{
        icon: <i className="text-3xl bi bi-x-diamond" style={{color: '#11dbcf'}}></i>,
        title: 'Midela Teren'
    },{
        icon: <i className="text-3xl bi bi-camera-video" style={{color: '#4233ff'}}></i>,
        title: 'Pira Neve'
    },{
        icon: <i className="text-3xl bi bi-command" style={{color: '#b2904f'}}></i>,
        title: 'Dirada Pack'
    },{
        icon: <i className="text-3xl bi bi-dribbble" style={{color: '#b20969'}}></i>,
        title: 'Moton Ideal'
    },{
        icon: <i className="text-3xl bi bi-activity" style={{color: '#ff5828'}}></i>,
        title: 'Verdo Park'
    },{
        icon: <i className="text-3xl bi bi-brightness-high" style={{color: '#29cc61'}}></i>,
        title: 'Flavor Nivelanda'
    }
];

const menuItems2 = [
    {
        icon: <i className=" text-2xl text-green-btn bi bi-emoji-smile"></i>,
        number: '232',
        name: 'Happy Clients'
    },
    {
        icon: <i className=" text-2xl text-green-btn bi bi-journal-richtext"></i>,
        number: '521',
        name: 'Projects'
    },
    {
        icon: <i className=" text-2xl text-green-btn bi bi-headset"></i>,
        number: '1463',
        name: 'Hours Of Support'
    },
    {
        icon: <i className=" text-2xl text-green-btn bi bi-people"></i>,
        number: '15',
        name: 'Hard Workers'
    }
]
const Features = () => {

  const { activeSection, setActiveSection } = useActiveSection();

  const handleClick = (id) => {
      const el = document.getElementById(id);
      if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      setActiveSection(id);
  };

  return (
    <div id="Features" className="mt-8">
      <div className="p-4 md:p-5 lg:p-7 w-full mx-auto md:w-[85%] lg:w-[85%] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {menuItems.map((item, index) => (
          <motion.div
            onClick={() => handleClick("Home")}
            key={index}
            className="flex items-center gap-3 p-5 border border-gray-200 hover:border-green-btn duration-500 group"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={index}
          >
            {item.icon}
            <span className="text-[18px] font-bold text-blue-word group-hover:text-green-btn duration-500">
              {item.title}
            </span>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 w-full p-20 md:p-5 lg:p-7 md:pt-20 md:pb-20 lg:pt-20 lg:pb-20 bg-purple-200">
        <div className="w-full mx-auto md:w-[85%] lg:w-[85%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6">
          {menuItems2.map((item, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col gap-2 justify-center items-center p-5 pt-8 bg-white shadow-md rounded-sm"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={index}
            >
              <div className="absolute left-1/2 -translate-x-1/2 -top-6 w-[52px] h-[52px] flex items-center justify-center rounded-full bg-white shadow-md">
                {item.icon}
              </div>
              <span className="text-gray-word text-4xl font-bold">
                <CountUpNumber to={parseInt(item.number)} />
              </span>
              <p className="text-gray-500">{item.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features