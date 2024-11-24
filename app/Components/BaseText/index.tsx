import React from "react";

interface BaseTextProps {
  children: any;
  size?: string;
  weight?: string;
  color?: string;
  additionalClasses?: string;
}

function BaseText({
  children,
  size = "base",
  weight = "normal",
  color = "text-black",
  additionalClasses = "",
}: BaseTextProps) {
  return (
    <span className={`${size} ${weight} ${color} ${additionalClasses}`}>
      {children}
    </span>
  );
}

export default BaseText;
