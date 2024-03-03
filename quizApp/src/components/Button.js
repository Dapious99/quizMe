import React from "react";
import classNames from "classnames";

const Button = ({
  title,
  size = "sm || md",
  variant = "primary || secondary",
  ...props
}) => (
  <button
    className={classNames(
      "inline-flex items-center justify-center w-auto font-medium rounded-md shadow focus:outline-none disabled:opacity-50",
      {
        "py-2 px-10 text-sm font-normal": size === "sm",
        "py-3 px-24 md:px-24 sm:px-20 text-sm font-normal": size === "md",
        "bg-[#3B82F6] text-white hover:bg-blue-500 transform hover:translate-x-3 duration-700":
          variant === "primary",
        "bg-transparent text-[#d11d1b] border border-[#3B82F6] hover:bg-[#3B82F6] hover:border-[#d11d1b] transform hover:translate-x-4 duration-700 ":
          variant === "secondary",
      }
    )}
    {...props}
  >
    {title}
  </button>
);

export default Button;
