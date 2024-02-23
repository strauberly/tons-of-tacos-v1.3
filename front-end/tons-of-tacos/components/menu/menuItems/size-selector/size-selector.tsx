import RadioButton from "@/components/ui/radio-buttons/radio-button";
import classes from "@/components/menu/menuItems/size-selector/size-selector.module.css";

//  get list of sizes, map over and create radio button passing it the name of the

export default function SizeSelector(props: { sizes: string[] }) {
  console.log("size selector: " + props.sizes);

  return (
    <section className={classes.selectorGroup}>
      {props.sizes.map((size: string) => (
        <RadioButton key={size} size={size} />
      ))}
    </section>
  );
}

// export default function RadioGroup({
//   name,
//   labels,
//   value,
//   onChange,
// }: RadioProps) {
//   return (
//     <>
//       {labels.map((label) => (
//         <div key={label.value}>
//           <input
//             name={name}
//             type="radio"
//             value={label.value}
//             id={name + label.value}
//             checked={value === label.value}
//             onChange={(e) => onChange(e.target.value)}
//           />
//           <label htmlFor={name + label.value}>{label.label}</label>
//         </div>
//       ))}
//     </>
//   );
// }

// export default function SizeSelector() {
//   return (
//     <div className={classes.buttons}>
//       <input
//         type="radio"
//         className={classes.radio__input}
//         name="size"
//         id="small"
//         value="radio1"
//       />
//       <label className={classes.label} htmlFor="small">
//         s
//       </label>

//       <input
//         type="radio"
//         className={classes.radio__input}
//         name="size"
//         id="medium"
//         value="radio2"
//       />
//       <label className={classes.label} htmlFor="medium">
//         m
//       </label>
//       <input
//         type="radio"
//         className={classes.radio__input}
//         name="size"
//         id="large"
//         value="radio3"
//       />
//       <label className={classes.label} htmlFor="large">
//         l
//       </label>
//       {/* <input type="radio" name="size">
//         <label>m</label>
//       </input>
//       <input type="radio" name="size">
//         <label>l</label>
//       </input> */}

//       {/* <button className={classes.button}>s</button>
//       <button className={classes.button}>m</button>
//       <button className={classes.button}>l</button> */}
//     </div>
//   );
// }
