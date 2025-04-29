import React  from "react";

export default function Button(props) {
  const { text,children } = props;
  return (
    <div>
      <button className="bg-[#FFCE00] py-2 px-4 rounded hover:bg-[#FFCE00]/90">
        <p>{text}</p> {children}
      </button>
    </div>
  );
}
