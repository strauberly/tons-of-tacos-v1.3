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

type OrderItem = {
  itemName: string;
  quantity: number;
  size: string;
};

type CartItem = {
  itemName: string;
  quantity: number;
  size: string;
  price: string;
};

type Cart = {
  cartItems: CartItem[];
  total: number;
};
