import PropTypes from "prop-types";

export function CloseIcon({ color = "black", className, size = "14px" }) {
  return (
    <svg
      className={className}
      width={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.6667 14.6666L1.33333 1.33331M14.6667 1.33331L1.33333 14.6666"
        stroke={color}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

CloseIcon.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
};
