import PropTypes from "prop-types";

//todo: fix icon
export function HeartOutline({ color = "#083644", className, size = "18px" }) {
  return (
    <svg
      className={className}
      width={size}
      viewBox="0 0 18 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 5.99679C17 10.5323 9 15.3588 9 15.3588C9 15.3588 1 10.5323 1 5.99679C1 -0.161333 9 -0.0781743 9 5.34158C9 -0.0781743 17 0.00289854 17 5.99679Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

HeartOutline.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
};
