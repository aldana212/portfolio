import React from "react";

const CustomInput = ({
  type,
  value,
  label,
  onChange,
  placeholder,
  ...rest
}) => {
  return (
    <div className="w-full h-[86px] flex flex-col items-start gap-[9px]">
      <label
        htmlFor=""
        className="text-[16px] text-(--muted-foreground) leading-[20x] font-medium"
      >
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...rest}
        className="w-full h-[57px] bg-input px-[20px] py-[18px] rounded-[16px] border border-(--border) text-(--foreground)  placeholder:text-(--muted-foreground)/50
        text-[16px]
        focus:outline-none  focus:border-(--primary)
        focus:ring-2 focus:ring-(--primary)/10 transition-all
        cursor-pointer
        "
      />
    </div>
  );
};

export default CustomInput;
