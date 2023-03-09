import styles from "./styles/SidebarUserOptionsItem.module.scss";

interface IProps {
  Icon: any;
  title: string;
}

function SidebarOptionItem({ Icon, title }: IProps) {
  return (
    <div className={styles.container}>
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
