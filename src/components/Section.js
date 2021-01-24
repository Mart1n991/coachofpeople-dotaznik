import React from "react";
import Headings from "./Headings";

export default function Section({ children, sectionName }) {
  return (
    <div>
      <Headings variant="h4" color={"primary"} align="center">
        {sectionName}
      </Headings>
      {children}
    </div>
  );
}
