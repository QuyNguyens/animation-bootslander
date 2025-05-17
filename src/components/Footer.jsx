import { useActiveSection } from "../contexts/ActiveSectionContext"

const Footer = () => {

    const { setActiveSection } = useActiveSection();

    const handleClick = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        setActiveSection(id);
    };

  return (
    <div className="bg-blue-700 p-4 md:p-5 lg:p-7 lg:pt-12 mt-8">
        <div className="w-full md:w-[85%] lg:w-[85%] mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] lg:grid-cols-[2fr_1fr_1fr_2fr] gap-4 lg:gap-0 pb-5 border-b-[1px] border-b-gray-600">
            <div className="flex flex-col gap-3 text-gray-300">
                <h1 className="text-3xl text-white pb-7 font-bold">Bootslander</h1>
                <div>
                    <span>A108 Adam Street</span><br />
                    <span>New York, NY 535022</span>
                </div>
                <div>
                    <p><b className="text-white font-medium">Phone: </b>+1 5589 55488 55</p>
                    <p><b className="text-white font-medium">Email: </b>info@example.com</p>
                </div>
                <div className="mt-2 flex gap-2">
                    <div className="w-11 h-11 border-2 border-gray-600 rounded-full flex justify-center items-center group duration-500 hover:border-green-btn">
                        <i className="text-[18px] text-gray-400 bi bi-twitter-x group-hover:text-green-btn"></i>
                    </div>
                    <div className="w-11 h-11 border-2 border-gray-600 rounded-full flex justify-center items-center group duration-500 hover:border-green-btn">
                        <i className="text-[18px] text-gray-400 bi bi-facebook group-hover:text-green-btn"></i>
                    </div>
                    
                    <div className="w-11 h-11 border-2 border-gray-600 rounded-full flex justify-center items-center group duration-500 hover:border-green-btn">
                        <i className="text-[18px] text-gray-400 bi bi-instagram group-hover:text-green-btn"></i>
                    </div>
                    <div className="w-11 h-11 border-2 border-gray-600 rounded-full flex justify-center items-center group duration-500 hover:border-green-btn">
                        <i className="text-[18px] text-gray-400 bi bi-linkedin group-hover:text-green-btn"></i>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-3 text-gray-300">
                <h1 className="text-white text-[16px] font-bold hover:text-green-btn duration-300">Useful Links</h1>
                <p className="hover:text-green-btn duration-300" onClick={() => handleClick("Home")}>Home</p>
                <p className="hover:text-green-btn duration-300" onClick={() => handleClick("About")}>About us</p>
                <p className="hover:text-green-btn duration-300" onClick={() => handleClick("Home")}>Services</p>
                <p className="hover:text-green-btn duration-300" onClick={() => handleClick("Home")}>Terms of service</p>
                <p className="hover:text-green-btn duration-300" onClick={() => handleClick("Home")}>Privacy policy</p>
            </div>
            <div className="flex flex-col gap-3 text-gray-300">
                <h1 className="text-white text-[16px] font-bold hover:text-green-btn duration-300">Our Services</h1>
                <p className="hover:text-green-btn duration-300" onClick={() => handleClick("Home")}>Web Design</p>
                <p className="hover:text-green-btn duration-300" onClick={() => handleClick("Home")}>Web Development</p>
                <p className="hover:text-green-btn duration-300" onClick={() => handleClick("Home")}>Product Management</p>
                <p className="hover:text-green-btn duration-300" onClick={() => handleClick("Home")}>Marketing</p>
                <p className="hover:text-green-btn duration-300" onClick={() => handleClick("Home")}>Graphic Design</p>
            </div>
            <div className="md:col-span-3 lg:col-span-1 flex flex-col gap-3">
                <h1 className="text-white text-[16px] font-bold">Our Newsletter</h1>
                <p className="text-white text-sm">Subscribe to our newsletter and receive the latest news about our products and services!</p>
                <div className="flex mt-4">
                    <input className="flex-1 py-2 px-4 border bg-transparent text-white border-gray-500 outline-none focus:border-green-btn" type="text"/>
                    <button className="w-auto py-2 px-4 text-white bg-green-btn duration-500 hover:bg-green-btn-hv">Subscribe</button>
                </div>
            </div>
        </div>
        <div className="mt-7">
            <p className="text-white font-medium text-[15px] text-center">© Copyright <b>Bootslander</b> All Rights Reserved</p>
            <p className="text-sm text-white text-center mt-2">Designed by <span className="text-green-btn">BootstrapMade</span> Distributed By <span className="text-green-btn">ThemeWagon</span></p>
        </div>
    </div>
  )
}

export default Footer