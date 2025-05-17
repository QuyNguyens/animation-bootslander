import './wave.css';

const Waves = () => {
  return (
        <svg
        className="hero-waves absolute bottom-0 left-0 w-full h-20"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        >
        <defs>
            <path
            id="wave-path"
            d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            ></path>
        </defs>
        <g className="wave1">
            <use xlinkHref="#wave-path" x="50" y="3"></use>
        </g>
        <g className="wave2">
            <use xlinkHref="#wave-path" x="50" y="0"></use>
        </g>
        <g className="wave3">
            <use xlinkHref="#wave-path" x="50" y="9"></use>
        </g>
        </svg>
  );
};

export default Waves;
