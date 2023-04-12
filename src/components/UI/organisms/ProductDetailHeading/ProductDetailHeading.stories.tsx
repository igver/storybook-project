import ProductDetailHeading from "./ProductDetailHeading";
import { ProductDetailHeadingProps } from "./ProductDetailHeading.types";

import { withRouter } from "storybook-addon-react-router-v6";

export default {
  title: "Template/Product Detail Heading",
  component: ProductDetailHeading,
  args: {},
  decorators: [withRouter],
};

const Template = ({ ...args }: ProductDetailHeadingProps) => (
  <ProductDetailHeading {...args} />
);

export const defaultProductDetailHeading = Template.bind({});

defaultProductDetailHeading.story = {
  parameters: {
    reactRouter: {
      routePath: "/product/:productId",
      routeParams: { productId: "2" },
      routeHandle: "Profile",
      searchParams: { tab: "activityLog" },
      routeState: { fromPage: "homePage" },
    },
  },
};

defaultProductDetailHeading.args = {
  id: 1,
  heading: "Vans oldschool",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent augue eros, malesuada.",
  image: ["./images/image-1.jpg", "./images/image-1-1.jpg"],
  altText: "Vans shoes",
  price: 70,
  stock: 5,
  numItems: 1,
  similarProducts: [2, 3],
};
