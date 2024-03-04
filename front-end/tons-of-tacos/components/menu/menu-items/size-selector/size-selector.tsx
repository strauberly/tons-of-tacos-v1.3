import RadioButton from "@/components/ui/radio-buttons/radio-button";
import classes from "@/components/menu/menu-items/size-selector/size-selector.module.css";

// Will want to refactor so that additional available sizes can be passed in dynamically, as well as set pricing parameters (ie a small guacamole will have a different price than small horchata)

export default function SizeSelector(props: {
  sizes: string[];
  sizeSetter: (selectedSize: string) => void;
  sizeAvailable: boolean;
}) {
  return (
    <section
      className={`${classes.selectorGroup} ${
        props.sizeAvailable === false ? classes.notShowing : " "
      }`}
    >
      {props.sizes.map((size: string) => (
        <RadioButton key={size} size={size} sizeSetter={props.sizeSetter} />
      ))}
    </section>
  );
}
