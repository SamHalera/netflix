import Image from "./Image";
const Carousel = (props) => {
  return (
    <div className="movies-carousel">
      {props.images.map((image, index) => {
        return <Image key={index} image={image} />;
      })}
    </div>
  );
};

export default Carousel;
