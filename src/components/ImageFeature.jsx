import PropTypes from "prop-types";

const ImageFeature = (props) => {
  return (
    <div className={`image-feature ${props.imageFloat}`}>
      <img src={props.image} alt={props.title} />
      <div>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

ImageFeature.propTypes = {
  imageFloat: PropTypes.oneOf(["left", "right"]),
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ImageFeature;
