import PropTypes from "prop-types";

//todo: fix icon
export function HeartFilledIcon({
  color = "#FF4500",
  className,
  size = "18px",
}) {
  return (
    <svg
      className={className}
      width={size}
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 4.99679C16 9.53232 8 14.3588 8 14.3588C8 14.3588 0 9.53232 0 4.99679C0 -1.16133 8 -1.07817 8 4.34158C8 -1.07817 16 -0.997097 16 4.99679Z"
        fill={color}
      />
    </svg>
  );
}

HeartFilledIcon.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
};
