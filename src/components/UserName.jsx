import { HiUser } from "react-icons/hi";

const UserName = ({ name }) => {
  return (
    <div>
      <h1>
        <HiUser className="my-icon" size="24" color="red" /> {name}
      </h1>
    </div>
  );
};
export default UserName;
