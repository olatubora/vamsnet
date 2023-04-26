import React from "react";

export const CustomButton = ({ text, className }) => {
  return <button className={`${className}`}>{text}</button>;
};
