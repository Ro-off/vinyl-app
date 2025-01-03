import PropTypes from "prop-types";

export function PlayIcon({ color = "#0A2530", className, size = "19px" }) {
  return (
    <svg
      className={className}
      width={size}
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.6428 7.38426C19.4523 8.32467 19.4523 10.6757 17.6428 11.6161L4.07137 18.6692C2.26184 19.6096 -6.10352e-05 18.4341 -6.10352e-05 16.5533V2.44709C-6.10352e-05 0.566264 2.26184 -0.609249 4.07137 0.331164L17.6428 7.38426Z"
        fill={color}
      />
    </svg>
  );
}

PlayIcon.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
};
