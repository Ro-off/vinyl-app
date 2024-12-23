import PropTypes from "prop-types";

export function LikedIcon({ color = "white", className, size = "20px" }) {
  return (
    <svg
      className={className}
      width={size}
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 6.32647C19 11.4974 10 17 10 17C10 17 1 11.4974 1 6.32647C1 -0.694364 10 -0.599555 10 5.57947C10 -0.599555 19 -0.507124 19 6.32647Z"
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

LikedIcon.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
};
