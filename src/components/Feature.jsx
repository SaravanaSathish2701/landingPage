import PropTypes from "prop-types";

const Feature = (props) => {
  return (
    <div>
      {props.image}
      <br></br>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
};

Feature.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Feature;
