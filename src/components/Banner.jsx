import 'bootstrap-icons/font/bootstrap-icons.css';
import Waves from './Waves';

const Banner = () => {
  return (
    <div className="relative bg-cover bg-center text-white flex items-center justify-center"
        style={{backgroundImage: "url('https://themewagon.github.io/Bootslander/assets/img/hero-bg-2.jpg')"}}
    >
        <div className="bg-blue-700/90 w-full md:p-5 lg:p-7 pb-20 lg:pb-20 md:pb-20 p-4">
            <div className="w-full md:w-[85%] lg:w-[85%] mx-auto flex flex-col lg:flex-row items-center justify-between">
                <div className="order-2 lg:order-1 w-full md:w-[80%] lg:w-[45%] flex flex-col gap-6">
                    <h1 className="text-gray-300 text-[50px] font-bold">Build Your Landing Page With <span className="relative text-white after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-full after:bg-green-btn after:h-[4px]">Bootslander</span></h1>
                    <p className="text-2xl text-gray-300">We are team of talented designers making websites with Bootstrap</p>
                    <div className="flex gap-6">
                        <button className="bg-green-btn hover:bg-green-btn-hv transition-colors duration-[1000ms] text-white text-xl rounded-full py-2 px-6">Get started</button>
                        <div className='flex items-center gap-2'>
                            <i className="bi bi-play-circle text-3xl text-green-btn"></i>
                            <button className='text-white font-bold hover:text-green-btn transition-colors duration-[1000ms]'>Watch video</button>    
                        </div>
                    </div>
                </div>
                <img className='order-1 lg:order-2 h-full lg:h-[555px] animate-float' src="https://themewagon.github.io/Bootslander/assets/img/hero-img.png" alt="" />
            </div>
        </div>
        <Waves/>
    </div>
  )
}

export default Banner