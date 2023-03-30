import { v4 as uuidv4 } from "uuid";

import Message from "./Message";

import styles from "../styles/Messages.module.scss";

function Messages() {
  const fakeData: any[] = [];

  return (
    <div className={styles.container}>
      <p className={styles.title}>MENSAGENS</p>
      <div className={styles.messagesContainer}>
        <div className={styles.recentMessages}>
          {/* {fakeData.user.messages.map((message: any) => {
            return (
              <Message
                avatar={message.userAvatar}
                key={uuidv4()}
                name={message.username}
                notRead={message.notRead}
              />
            );
          })} */}
        </div>
        <div className={styles.allMessages}>
          <p>TODAS MENSAGENS</p>
        </div>
      </div>
    </div>
  );
}

export default Messages;
