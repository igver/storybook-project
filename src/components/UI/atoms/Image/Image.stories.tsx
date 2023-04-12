import { Image } from "./Image";
import { ImageProps } from "./Image.types";

export default {
  title: "Atom/Image",
  component: Image,
  argTypes: {},
};

const Template = (args: ImageProps) => <Image {...args} />;

export const defaultImage = Template.bind({});
defaultImage.args = {
  src: "./images/image-1.jpg",
  altText: "altText",
};
