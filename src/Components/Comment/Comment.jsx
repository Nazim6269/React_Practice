import React from "react";

const Comment = ({ comment }) => {
  return (
    <div key={comment.id}>
      <h2>{comment.user.name}</h2>
      <p>{comment.text}</p>
    </div>
  );
};

export default Comment;
