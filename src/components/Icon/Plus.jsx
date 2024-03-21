import PropTypes from "prop-types";

export function Plus({ color = "white", className, size = "16px" }) {
  return (
    <svg
      className={className}
      width={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.99998 14.6667V7.99999M7.99998 7.99999V1.33333M7.99998 7.99999H14.6666M7.99998 7.99999H1.33331"
        stroke={color}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

Plus.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
};
