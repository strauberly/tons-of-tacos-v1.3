"use client";

import classes from "@/app/page.module.css";

export default function Error({ error }: { error: Error }) {
  return (
    <div className={classes.error}>
      <h1>Whoops!</h1>
      <p>An error has occurred, we`ll get back to you.</p>
      <p>{`Looking into ${error}`}</p>
    </div>
  );
}
