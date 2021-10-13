import * as React from "react";

const TitleSection = ({ children }) => {
  return (
    <h2 className="col-span-2 text-2xl font-semibold text-center sm:text-4xl text-blue">{children}</h2>
  );
};

export default TitleSection;
