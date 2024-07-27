import PropTypes from "prop-types";

const People = (props) => {
  return (
    <div>
      <img src={props.icon} alt={props.icon} />
      <h3>{props.name}</h3>
      <p>{props.description}</p>
    </div>
  );
};

People.propTypes = {
  icon: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default People;
