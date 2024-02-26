import classes from "@/components/ui/radio-buttons/radio-buttons.module.css";
import { useId } from "react";

// button will end up accepting a size for the value from available sides in menu item
export default function RadioButton(props: {
  size: string;
  sizeSetter: (selectedSize: string) => void;
}) {
  const size = props.size;
  const itemId = useId();

  // useEffect(() => {
  //   setId(id + 1);
  // }, [id]);

  // console.log(id);
  // console.log("button: " + size);
  return (
    <>
      <input
        type="radio"
        className={classes.radioButton}
        name="size"
        value={size}
        id={itemId}
      />
      <label
        onClick={() => props.sizeSetter(props.size)}
        htmlFor={`${itemId}`}
        className={classes.radioButtonLabel}
      >
        {size.charAt(0)}
      </label>
    </>
  );
}
