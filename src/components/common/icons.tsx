import { IIcon } from "../../utils/interfaces/icon.interface";
export const Icon: React.FC<IIcon> = ({ name }) => {
  return (
    <>
      <span className="material-icons hover:cursor-pointer">{name}</span>
    </>
  );
};
