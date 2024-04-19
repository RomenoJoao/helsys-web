const Bars = ({ maxWidth, maxHeight, primaryColor, secondaryColor }) => {
  return (
    <svg width={maxWidth} height={maxHeight} viewBox="0 0 28 32" fill="none">
      <path
        d="M0.837219 31.2576V9.88636H6.69768V31.2576H0.837219ZM11.093 31.2576V0.727264H16.9535V31.2576H11.093ZM21.3488 31.2576V19.0454H27.2093V31.2576H21.3488Z"
        fill={primaryColor}
      />
    </svg>
  );
};

export default Bars;
