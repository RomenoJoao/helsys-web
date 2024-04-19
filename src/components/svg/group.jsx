const Group = ({ maxWidth, maxHeight, primaryColor }) => {
  return (
    <svg
      width={maxWidth}
      height={maxHeight}
      viewBox="0 0 37 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.5 0.479168C19.9311 0.479168 21.3035 1.04766 22.3154 2.05957C23.3273 3.07149 23.8958 4.44394 23.8958 5.875C23.8958 7.30607 23.3273 8.67852 22.3154 9.69043C21.3035 10.7023 19.9311 11.2708 18.5 11.2708C17.0689 11.2708 15.6965 10.7023 14.6846 9.69043C13.6727 8.67852 13.1042 7.30607 13.1042 5.875C13.1042 4.44394 13.6727 3.07149 14.6846 2.05957C15.6965 1.04766 17.0689 0.479168 18.5 0.479168ZM7.70833 4.33333C8.57167 4.33333 9.37333 4.56458 10.0671 4.98083C9.83583 7.18542 10.4833 9.37458 11.8092 11.0858C11.0383 12.5658 9.49667 13.5833 7.70833 13.5833C6.48171 13.5833 5.30532 13.0961 4.43796 12.2287C3.57061 11.3613 3.08333 10.185 3.08333 8.95833C3.08333 7.73171 3.57061 6.55532 4.43796 5.68796C5.30532 4.82061 6.48171 4.33333 7.70833 4.33333ZM29.2917 4.33333C30.5183 4.33333 31.6947 4.82061 32.562 5.68796C33.4294 6.55532 33.9167 7.73171 33.9167 8.95833C33.9167 10.185 33.4294 11.3613 32.562 12.2287C31.6947 13.0961 30.5183 13.5833 29.2917 13.5833C27.5033 13.5833 25.9617 12.5658 25.1908 11.0858C26.5167 9.37458 27.1642 7.18542 26.9329 4.98083C27.6267 4.56458 28.4283 4.33333 29.2917 4.33333ZM8.47917 20.1354C8.47917 16.9442 12.9654 14.3542 18.5 14.3542C24.0346 14.3542 28.5208 16.9442 28.5208 20.1354V22.8333H8.47917V20.1354ZM0 22.8333V20.5208C0 18.3779 2.91375 16.5742 6.86042 16.05C5.95083 17.0983 5.39583 18.5475 5.39583 20.1354V22.8333H0ZM37 22.8333H31.6042V20.1354C31.6042 18.5475 31.0492 17.0983 30.1396 16.05C34.0862 16.5742 37 18.3779 37 20.5208V22.8333Z"
        fill={primaryColor}
      />
    </svg>
  );
};

export default Group;