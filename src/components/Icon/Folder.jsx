import PropTypes from "prop-types";

export function FolderIcon({ color = "white", className, size = "20px" }) {
  return (
    <svg
      className={className}
      width={size}
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 15.2222V6.33333C19 5.86184 18.8104 5.40965 18.4728 5.07625C18.1352 4.74286 17.6774 4.55556 17.2 4.55556H11.1124C10.7781 4.55554 10.4503 4.46356 10.1659 4.28992C9.88155 4.11628 9.65175 3.86783 9.5023 3.57244L8.6977 1.98311C8.54818 1.68759 8.31824 1.43906 8.03368 1.2654C7.74912 1.09175 7.4212 0.999846 7.0867 1H2.8C2.32261 1 1.86477 1.1873 1.52721 1.5207C1.18964 1.8541 1 2.30628 1 2.77778V15.2222C1 15.6937 1.18964 16.1459 1.52721 16.4793C1.86477 16.8127 2.32261 17 2.8 17H17.2C17.6774 17 18.1352 16.8127 18.4728 16.4793C18.8104 16.1459 19 15.6937 19 15.2222Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

FolderIcon.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
};
