import { createElement } from "react";

const Heading = ({ size, children, className, ...props }) => {
  return createElement(
    `h${size}`,
    {
      props,
      className,
    },
    children
  );
};

export default Heading;
