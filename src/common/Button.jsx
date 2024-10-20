/* eslint-disable react/prop-types */

import { cn } from "../lib/utiles";

const Button = ({ children, className }) => {
  return (
    <button
      className={cn(
        "lg:font-bold font-normal lg:py-3 md:py-1 lg:px-[25px] px-3 py-3 bg-gradient-primary opacity-90 transition-all delay-150 hover:opacity-100 text-white rounded-md text-[10px] md:text-[12px]",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;