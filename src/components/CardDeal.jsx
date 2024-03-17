import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Join the <span className="text-gradient">Shinobi</span> Community Today 
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Ready to experience the future of finance with Shinobi? Getting started is easy. Simply create an account, acquire Shinobi tokens, and start exploring our decentralized ecosystem.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
