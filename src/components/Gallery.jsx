import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

import Lightbox from "yet-another-react-lightbox";
import { Zoom } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";


import { motion } from 'framer-motion';

import Title from "./Title";
import { useState } from "react";

const menuItems = [
    {
        name: 'Saul Goodman',
        position: 'Ceo & Founder',
        rating: 5,
        desc: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.'
    },
     {
        name: 'Sara Wilsson',
        position: 'Designer',
        rating: 5,
        desc: 'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.'
    },
     {
        name: 'Jena Karlis',
        position: 'Store Owner',
        rating: 5,
        desc: 'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.'
    },
     {
        name: 'Matt Brandon',
        position: 'Freelancer',
        rating: 5,
        desc: 'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.'
    },
     {
        name: 'John Larson',
        position: 'Entrepreneur',
        rating: 5,
        desc: 'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.'
    }
]
const Gallery = () => {

    const settings = {
        dots: true,          
        infinite: true,        
        speed: 500,             
        slidesToShow: 1,       
        slidesToScroll: 1,   
        autoplay: true,     
        autoplaySpeed: 3000, 
        arrows: false,
        appendDots: dots => (
            <div className="mt-6">
                <ul className="flex justify-center">{dots}</ul>
            </div>
        ),
        customPaging: i => (
            <div className="w-3 h-3 rounded-full cursor-pointer bg-gray-300 hover:bg-blue-500 transition-all duration-300"></div>
        ),

    };

    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [1, 2, 3, 4, 5, 6, 7, 8].map((item) => ({
        src: `https://themewagon.github.io/Bootslander/assets/img/gallery/gallery-${item}.jpg`,
    }));

  return (
    <div className="mt-6">
        
        <div className="w-full md:w-[85%] lg:w-[85%] mx-auto p-4 md:p-5 lg:p-7 ">
            <Title title={"Gallery"} content={"Check Our Gallery"}/>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[3px]">
                {slides.map((slide, index) => (
                    <div key={index} className="overflow-hidden">
                        <motion.img
                        className="w-full h-full object-cover transform transition-transform duration-1000 hover:!scale-125 cursor-pointer"
                        src={slide.src}
                        alt=""
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        onClick={() => {
                            setCurrentIndex(index);
                            setIsOpen(true);
                        }}
                        />
                    </div>
                ))}
                <Lightbox
                    open={isOpen}
                    close={() => setIsOpen(false)}
                    index={currentIndex}
                    slides={slides}
                    plugins={[Zoom]}
                />
            </div>
        </div>
        <div className="mt-5 relative bg-cover bg-center text-white"
            style={{backgroundImage: "url('https://themewagon.github.io/Bootslander/assets/img/testimonials-bg.jpg')"}}
        >
            <div className="bg-blue-img/50 w-full p-4 md:p-5 lg:p-7 pt-20 lg:pt-20 md:pt-20 pb-20 lg:pb-20 md:pb-20 sm:pb-20">
                <motion.div className="w-full md:w-[85%] lg:w-[85%] mx-auto"
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    <Slider {...settings}>
                        {menuItems.map((item, index) => (
                        <div key={index} 
                            className="flex flex-col justify-center items-center text-center px-4"
                        >
                            <div className="flex justify-center">
                                <div className="overflow-hidden w-24 h-24 p-[2px] rounded-full flex justify-center items-center border-2 border-blue-word">
                                    <img className="w-full h-full rounded-full" src={`https://themewagon.github.io/Bootslander/assets/img/testimonials/testimonials-${index + 1}.jpg`} alt={item.name} />
                                </div>
                            </div>
                            <h2 className="mt-3 text-xl font-bold">{item.name}</h2>
                            <span className="mt-3 text-sm text-gray-400">{item.position}</span>
                            <div className="mt-3 flex justify-center gap-[2px]">
                                {Array.from({ length: item.rating }).map((_, i) => (
                                    <i key={i} className="bi bi-star-fill text-[16px] text-yellow-400"></i>
                                ))}
                            </div>
                            <div className="mt-5 flex justify-center">
                                <p className="text-center max-w-2xl italic">
                                    <i className="bi bi-quote quote-icon-left mr-2"></i>
                                    <span>{item.desc}</span>
                                    <i className="bi bi-quote quote-icon-right ml-2"></i>
                                </p>
                            </div>
                        </div>
                        ))}
                    </Slider>
                </motion.div>

            </div>
        </div>
    </div>
  )
}

export default Gallery