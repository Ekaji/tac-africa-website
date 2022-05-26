/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import MiniNav from './miniNav';

const HeroBanner = ({
  backgroundImg,
  text,
  activeLink,
}) => {
  return (
    <>
      <div
        className={
          'h-40vh relative bg-fixed bg-center bg-cover bg-no-repeat'
        }
        style={{
          backgroundImage: `linear-gradient(rgba(5, 0, 32, 0.697), rgba(5, 0, 32, 0.697)), url(${backgroundImg})`,
        }}
      >
        <div className="flex items-center justify-center h-full">
          <h2 className="text-white font-bold capitalize">
            {' '}
            {text}{' '}
          </h2>
        </div>
      </div>

      <MiniNav activeLink={activeLink} />
    </>
  );
};

export default HeroBanner;
