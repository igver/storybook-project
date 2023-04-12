import UserName from "./UserName";
import { UserNameProps } from "./UserName.types";

export default {
  title: "Atom/Username",
  component: UserName,
  argTypes: {},
};

const Template = (args: UserNameProps) => <UserName {...args} />;

export const defaultUserName = Template.bind({});
defaultUserName.args = {
  userName: "Judith W",
  date: "16.01.2017",
};
