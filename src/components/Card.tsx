import styles from "./card.module.css";

interface CardProps {
  children: React.ReactNode;
  imgSrc: string;
}

// Correct function declaration
export default function Card({ children, imgSrc }: CardProps) {
  return (
    <div className={styles.cardContainer}>
      <img src={imgSrc} alt="Card Image" className={styles.cardImage} />
      <p className={styles.cardContent}>{children}</p>
    </div>
  );
}
