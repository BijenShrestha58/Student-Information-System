// import { successNotification } from "../../utils/helpers/notifications";
import logo from "../../assets/logo.png";

export const Logo = () => {
  // const showNotifications = () => {
  //     successNotification({
  //         title: 'Hahaha',
  //         message: 'hehehehe',
  //     });
  // };

  return (
    <div className="h-16 items-center cursor-pointer text-2xl">
      <img src={logo} alt="Logo" className="h-full object-contain w-full" />
    </div>
  );
};
