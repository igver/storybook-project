import { UserNameProps } from "./UserName.types";

import "./UserName.scss";

const UserName = ({ userName, date }: UserNameProps) => {
  return (
    <div className="username">
      <span>{userName}</span>, <span>{date}</span>
    </div>
  );
};

export default UserName;
