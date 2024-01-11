// import MenuItemList from "../../../components/menu/menu-item-list";

// this will take the slug for menu items category and give the properties needed
// let TACO_DUMMY_DATA: {keys:types}[] = [];
// attempt interface in order to validate the object
let TACO_DUMMY_DATA: {}[] = [];
let DRINK_DUMMY_DATA: {}[] = [];
let SIDE_DUMMY_DATA: {}[] = [];
let TOPPING_DUMMY_DATA: {}[] = [];

// map

export default function MenuItemsByCategory({
  params,
}: {
  params: { menuCategory: string };
}) {
  // if statements for slug = a certain dummy data set ie(if slug == taco use DUMMY DATA == TACO_DUMMY_DATA)

  // will eventually get all the items by category through a getbycategory method that matches api

  // const menuCategory = params.category;

  // console.log(stringify(params.category);

  //   if no menu items return not found

  return (
    <main>
      <title>Tile of page will == category taken from slug</title>
      <p>Description determined by slug {params.menuCategory}</p>
      <p>menuCategory</p>
      <section>{/* <MenuItemList /> */}</section>
    </main>
  );
}
