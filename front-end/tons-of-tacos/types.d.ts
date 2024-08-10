type Category = {
  name: string;
  description: string;
};

type MenuItem = {
  itemName: string;
  category: string;
  imageUrl: string;
  description: string;
  itemSize: string;
  unitPrice: number;
};

type CartItem = {
  id: string;
  itemName: string;
  quantity: number;
  size: string;
  price: string;
};

type Cart = {
  cartItems: CartItem[];
  total: number;
};

type CustomerInfoForm = {
  name: string;
};
