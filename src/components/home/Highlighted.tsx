import HighlightedItem from "./HighlightedItem";
import Title from "./Title";

import styles from "./styles/Highlighted.module.scss";

function Highlighted() {
  const fakeData = [
    {
      url: "https://store-images.s-microsoft.com/image/apps.2005.14057826194083709.67242c47-4fd7-4f1a-9dd6-5d93f6cc10df.f80f14c0-72ab-46ff-86cd-9d801c8e04e8?mode=scale&q=90&h=300&w=300",
      name: "Jogo da Velha",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOhYrNAU5wvi0KXwAYt-nRm0QdLOh6aESSV17zMbgynoM0GLcnH-gP-p-iEpDl1i3D64s&usqp=CAU",
      name: "Yahtzee",
    },
    {
      url: "https://omoldbreaker.files.wordpress.com/2016/05/camiseteria_jokenpo.png?w=499&h=271",
      name: "JO-KEN-PO",
    },
    {
      url: "https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Funo%2Fhome%2FGameName_Store_Landscape_2560x1440-2560x1440-5195e8a3e06d672f97a1ee49ecea59027c14cae4.jpg",
      name: "Uno",
    },
  ];

  return (
    <div className={styles.container}>
      <Title title={"EM DESTAQUE"} />
      <div className={styles.cardsContainer}>
        {fakeData.map((item) => {
          return <HighlightedItem url={item.url} name={item.name} />;
        })}
      </div>
    </div>
  );
}

export default Highlighted;
