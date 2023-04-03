import { createTheme, ThemeProvider } from "@mui/material/styles";
import { breakpointsTheme } from "../utils/themes";

import Menu from "./components/Menu";
import Sidebar from "../features/sidebar/index";

import styles from "./styles/Layout.module.scss";

interface IProps {
  children: JSX.Element | JSX.Element[];
}
function MainLayout({ children }: IProps) {
  const theme = createTheme(breakpointsTheme);

  return (
    <ThemeProvider theme={theme}>
      <div className={styles.container}>
        <Sidebar />
        <div className={styles.mainContainer}>
          <Menu />
          <div className={styles.main}>{children}</div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MainLayout;
