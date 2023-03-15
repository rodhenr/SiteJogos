import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import styles from "./styles/NotFound.module.scss";

function NotFound() {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setRedirect(true);
    }, 3000);

    return () => clearTimeout(timeoutID);
  }, []);

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <div className={styles.container}>
      <h1>Ops... Página inválida!</h1>
      <p>Redirecionando...</p>
    </div>
  );
}

export default NotFound;
