import SwiperButton from "./SwiperButton";
import { SwiperButtonProps } from "./SwiperButton.types";
import "./SwiperButton.scss";

export default {
  title: "Atom/Swiper button",
  component: SwiperButton,
  args: {},
};

const Template = (args: SwiperButtonProps) => <SwiperButton {...args} />;

export const nextButton = Template.bind({});
nextButton.args = {
  variante: "next",
  content: ">",
};

export const prevButton = Template.bind({});
prevButton.args = {
  variante: "prev",
  content: "<",
};
