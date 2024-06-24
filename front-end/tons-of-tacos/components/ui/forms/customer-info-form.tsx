import { useDisplayContext } from "@/context/display-context";

export default function CustomerInfoForm() {
  // styling should be conditional, at x media query change from slide out to drop down
  return (
    <>
      <form>
        <label>name</label>
        <input type="text" name="first name" placeholder="Enter First Name" />
        <input type="text" name="last name" placeholder="Enter Last Name" />
        <label>phone</label>
        <input type="text" name="phone" placeholder="Enter Phone Number" />
        <label>email</label>
        <input type="text" name="e-mail" placeholder="Enter E-Mail Address" />
      </form>
      {/* <div>
        <p>first name placeholder</p>
        <p>last name placeholder</p>
        <p>phone placeholder</p>
        <p>email placeholder</p>
        <p>submit info button placeholder</p>
      </div> */}
    </>
  );
}
