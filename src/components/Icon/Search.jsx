import PropTypes from "prop-types";

export function SearchIcon({ color = "white", className, size = "18px" }) {
  return (
    <svg
      className={className}
      height={size}
      viewBox="0 -960 960 960"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"
        fill={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
SearchIcon.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
};
