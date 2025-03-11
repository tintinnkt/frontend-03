import Banner from "@/components/Banner";
import styles from "./page.module.css";
import Card from "@/components/Card";
export default function Page() {
  return (
    <main className={styles.main}>
      <Banner />

      <section className={styles.section}>
        <h2 className={styles.heading}>Explore Our Venues</h2>

        <div className={styles.cardContainer}>
          <Card imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1CZzgPjINVJhxS_rma_l2_YQBRTlcHupKag&s">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, voluptatem?
          </Card>
        </div>
      </section>
    </main>
  );
}
