import { ProductItemInfo } from "./ProductItemInfo";
import { ProductItemInfoProps } from "./ProductItemInfo.types";

export default {
  title: "Molecules/Product item info",
  component: ProductItemInfo,
  args: {},
};

const Template = ({ ...args }: ProductItemInfoProps) => (
  <ProductItemInfo {...args} />
);

export const defaultProductItemInfo = Template.bind({});
defaultProductItemInfo.args = {
  id: 1,
  heading: "Vans oldschool",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent augue eros, malesuada.",
  image: [
    "/images/image-1.jpg",
    "/images/image-1-1.jpg",
    "/images/image-1-2.jpg",
    "/images/image-1-3.jpg",
    "/images/image-1-4.jpg",
  ],
  altText: "Vans shoes",
  price: 70,
  stock: 5,
  numItems: 1,
  onButtonClick: () => {
    // return console.log("Test click");
  },
};
