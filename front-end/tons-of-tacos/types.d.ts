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

type RadioProps = {
  name: string;
  labels: { value: string; label: string }[];
  value: string | null;
  onChange: (value: string) => void;
};
