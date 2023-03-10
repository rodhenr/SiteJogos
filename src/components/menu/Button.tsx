import { useNavigate } from "react-router-dom";

import styles from "./styles/Button.module.scss";

interface IProps {
  Icon: any;
  route: string;
  title: string;
}

function Button({ Icon, route, title }: IProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route);
  };

  return (
    <div className={styles.container} onClick={handleClick}>
      <Icon sx={{ color: "#6A6A84" }} />
      <p>{title.toUpperCase()}</p>
    </div>
  );
}

export default Button;
