import Title from "./Title";
import Carousel from "./Carousel";
const Category = (props) => {
  //console.log(props.images);
  return (
    <div className="category">
      <Title name={props.name} />
      <Carousel images={props.images} />
    </div>
  );
};

export default Category;
