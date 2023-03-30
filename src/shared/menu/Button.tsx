import { Typography } from "@mui/material";
import { useEffect, useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";

import styles from "./styles/Button.module.scss";

interface IProps {
  Icon: any;
  route: string;
  title: string;
}

function Button({ Icon, route, title }: IProps) {
  const [color, setColor] = useState("#6A6A84");

  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === route) {
      setColor("#ff4c29");
    } else {
      setColor("#6A6A84");
    }
  }, [pathname, route]);

  const handleClick = () => {
    navigate(route);
  };

  return (
    <div className={styles.container} onClick={handleClick}>
      <Icon sx={{ color }} />
      <Typography sx={{ color }}>{title.toUpperCase()}</Typography>
    </div>
  );
}

export default Button;
