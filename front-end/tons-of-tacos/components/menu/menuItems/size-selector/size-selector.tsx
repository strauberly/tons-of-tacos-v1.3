import classes from "@/components/menu/menuItems/size-selector/size-selector.module.css";

export default function SizeSelector() {
  return (
    <div className={classes.buttons}>
      <button className={classes.button}>s</button>
      <button className={classes.button}>m</button>
      <button className={classes.button}>l</button>
    </div>
  );
}
