import React from "react";
import { formateDate, getDay } from "../../utils/Date";
import Comment from "../Comment/Comment";
import TagList from "../TagList/TagList";
import style from "./taskCard.module.css";

const TaskCard = ({ task }) => {
  return (
    <div className={style.cardGroups}>
      <h2>
        {getDay(task.createdAt)},{formateDate(task.createdAt)}
      </h2>
      <h3>{task.subtitle}</h3>
      <ul>
        {task.tags.map((tag) => {
          return <TagList key={tag.id} tag={tag} />;
        })}
        <hr />
        <p>Note to link this</p>
        <div>
          {task.comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </div>
      </ul>
    </div>
  );
};

export default TaskCard;
