// import clsx from "clsx";
// import { RiRadioButtonLine } from "react-icons/ri";
// import { CiWifiOff } from "react-icons/ci";

// import iconReact from "../../../assets/react.svg";

import "./Profile.css";

const Profile = ({
  name,
  phone,
  email,
  status = "offline",
  hasPhisicalAddress,
}) => {
  return (
    <div
      className={`profile ${hasPhisicalAddress ? "hasPhisicalAddress" : ""}`}
    >
      {/* <img src={iconReact} alt="" /> */}
      <h2>
        Name: {name} {hasPhisicalAddress ? "🏡" : ""}
      </h2>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
      <p
      // className={clsx(
      //   css.fieldRow,
      //   status === "online" && css.online,
      //   status === "offline" && css.offline
      // )}

      //   [css.online]: status === "online",
      //   [css.offline]: status === "offline",
      // })}
      >
        Status: {status}
      </p>
    </div>
  );
};

export default Profile;

// <div className={clsx("profile", {
//   "hasPhisicalAddress": hasPhisicalAddress === true
// })}>
// а якщо у нас умова: якщо статус онлайн то текст зеленим,
// а якщо офлайн-червоним, то треба додавати додаткові класи
// на статус, описати в css, а потім їх вказувати в цій умові?
