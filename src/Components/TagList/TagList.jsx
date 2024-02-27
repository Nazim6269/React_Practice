import React from "react";

const TagList = ({ tag }) => {
  return (
    <div>
      {" "}
      <li key={tag.id}>
        {tag.icon}-{tag.text}
      </li>
    </div>
  );
};

export default TagList;
