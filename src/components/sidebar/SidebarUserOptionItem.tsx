import { useDispatch } from "react-redux";
import {
  changeHistoryModal,
  changeProfileModal,
  changeMessagesModal,
} from "../../store/slices/modalSlice";

import styles from "./styles/SidebarUserOptionsItem.module.scss";

interface IProps {
  Icon: any;
  title: string;
}

function SidebarOptionItem({ Icon, title }: IProps) {
  const dispatch = useDispatch();

  const handleClick = () => {
    if (title === "Histórico") {
      dispatch(changeHistoryModal(true));
    } else if (title === "Meu Perfil") {
      dispatch(changeProfileModal(true));
    } else if (title === "Mensagens") {
      dispatch(changeMessagesModal(true));
    }
  };

  return (
    <div className={styles.container} onClick={handleClick}>
      <Icon
        sx={{
          alignSelf: "center",
          color: "#FFF",
          fontSize: 26,
        }}
      />
      <p className={styles.title}>{title}</p>
    </div>
  );
}

export default SidebarOptionItem;
