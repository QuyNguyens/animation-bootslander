import Question from "./Question";
import { motion } from 'framer-motion';

const menuItems = [
    {
        title: 'Non consectetur a erat nam at lectus urna duis?',
        content: 'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.'
    },{
        title: 'Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?',
        content: 'Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.'
    },{
        title: 'Dolor sit amet consectetur adipiscing elit pellentesque?',
        content: 'Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis'
    }
];

const Questions = () => {
  return (
    <div className="mt-6 p-3 pt-12 bg-purple-200 flex flex-col lg:flex-row items-start gap-10">
        <motion.div className="flex flex-col gap-4 p-12 order-2 lg:order-1 w-full lg:w-[60%]"
            initial={{opacity: 0, y:80}}
            whileInView={{opacity: 1, y:0}}
            transition={{duration: 1, delay: 0.1}}
            viewport={{once: true}}
        >
            <p className="text-blue-word text-4xl mb-0">
                Frequently Asked <b className="font-medium">Questions</b>
            </p>
            <p className="text-gray-600 text-[18px] mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
            </p>
            {menuItems.map((item, index) => (
            <Question key={index} title={item.title} content={item.content} />
            ))}
        </motion.div>
        <motion.img
            className="order-1 lg:order-2 w-full lg:w-[40%] object-contain"
            src="https://themewagon.github.io/Bootslander/assets/img/faq.jpg"
            alt=""
            initial={{opacity: 0, scale: 0.5}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{duration: 1, delay: 0.1}}
            viewport={{once: true}}
        />
    </div>

  )
}

export default Questions