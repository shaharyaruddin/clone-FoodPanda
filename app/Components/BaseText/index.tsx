import React from "react";

function BaseText(
    {
  children,
  size = "base",
  weight = "normal",
  color = "text-black",
  additionalClasses = "",
}) {
  return (
    <span className={`${size} ${weight} ${color} ${additionalClasses}`}>
      {children}
    </span>
  );
}

export default BaseText;
