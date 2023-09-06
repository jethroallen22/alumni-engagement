import React from "react";

export default function Content({ children }) {
  return (
    <div>
      <Sidebar>{children}</Sidebar>
    </div>
  );
}
