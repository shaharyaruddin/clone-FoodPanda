import React from "react";

interface BaseTextProps {
  children?: React.ReactNode; // Optional because `htmlContent` can be used instead.
  size?: string;
  weight?: string;
  color?: string;
  additionalClasses?: string;
  htmlContent?: string; // for rendering HTML.
}

function BaseText({
  children,
  size = "base",
  weight = "normal",
  color = "text-black",
  additionalClasses = "",
  htmlContent, 
}: BaseTextProps) {
  return htmlContent ? (
    <span
      className={`${size} ${weight} ${color} ${additionalClasses}`}
      dangerouslySetInnerHTML={{ __html: htmlContent }} // Render HTML content.
    />
  ) : (
    <span className={`${size} ${weight} ${color} ${additionalClasses}`}>
      {children}
    </span>
  );
}

export default BaseText;
