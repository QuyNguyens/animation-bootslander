import { useState } from "react"

const Question = ({title, content}) => {
    const [isShow, setIsShow] = useState(false);

  return (
    <div className="px-6 py-3 bg-white shadow-sm flex flex-col gap-2">
        <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
                <i className="faq-icon bi bi-question-circle text-2xl text-green-btn"></i>
                <p className={`font-medium text-[18px] ${isShow ? 'text-green-btn' : 'text-blue-word'} text-blue-word hover:text-green-btn`}>{title}</p>
            </div>
            <button onClick={() => setIsShow(!isShow)}>
                <i
                    className={`bi bi-chevron-right inline-block transition-transform duration-500 origin-center hover:text-green-btn ${
                        isShow ? "rotate-90 text-green-btn" : "rotate-0"
                    }`}
                />
            </button>

        </div>
        <div
            className={`overflow-hidden transition-all duration-700 ease-in-out ${
                isShow ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            }`}
            >
            <p className="mt-1">{content}</p>
        </div>
    </div>
  )
}

export default Question