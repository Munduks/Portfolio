import PropTypes from "prop-types";
import "./Button.scss";

const Button = ({ className, children, variant, color, ...props }) => {
  const buttonClasses = `styled-button ${variant} ${color} ${className}`;

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};
Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
  color: PropTypes.string,
};
export default Button;
