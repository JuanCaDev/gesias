import * as React from "react";

const TitleSection = ({ children }) => {
  return (
    <h2 class="sm:text-4xl text-2xl font-semibold text-center col-span-2 text-gray-800">{children}</h2>
  );
};

export default TitleSection;
