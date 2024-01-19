import classes from "./card.module.css";
// just encapsulates the actual meal item details styled as an individual

export default function Card(props: any) {
  return <div className={classes.menucard}>{props.children}</div>;
}
