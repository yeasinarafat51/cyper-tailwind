/* eslint-disable react/prop-types */

import { cn } from "../lib/utiles"


const Button = ({children,className}) => {
  return (
    <button
    className={cn(
      "font-bold py-2 sm:py-2 px-[25px] sm:px-[25px] bg-gradient-primary opacity-90 transition-all delay-150 hover:opacity-100 text-white rounded-md text-xs md:text-base",
      className
    )}
  >
    {children}
  </button>
  )
}

export default Button
