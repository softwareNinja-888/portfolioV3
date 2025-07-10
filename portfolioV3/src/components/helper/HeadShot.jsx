import headShot from '/profile.jpg';


export function HeadShot({ className = '' }) {
  return (
    // The container has relative positioning so that the absolutely positioned children (the box and image) work together.
    <div className={`mt-[0px] cursor-pointer  px-5 `}>
      {/* The headshot container */}
      <div className={`-top-75 ${className}`}>
        <a
          href="http://github.com/softwareNinja-888"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={headShot}
            alt="Head shot"
            className="z-500 w-[80vw] h-[300px] absolute transition-transform duration-500 ease-in-out transform cursor-pointer hover:-translate-x-5 hover:-translate-y-5 active:-translate-x-5 active:-translate-y-5"
            loading="lazy"
          />
        </a>
      </div>
    </div>
  );
}

