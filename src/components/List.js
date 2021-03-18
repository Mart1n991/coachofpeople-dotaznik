import React from "react";
import { listStyles } from "../styles/style";

export default function List({ list, onClick }) {
  const classes = listStyles();

  return (
    <div className={classes.listContainer}>
      <div className={classes.list} onClick={onClick}>
        {list}
      </div>
    </div>
  );
}
