import styles from "./styles.module.scss";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import coffeDeliveryImg from "../../../assets/coffeeDelivery.png";

export function Intro() {
  return (
    <div className={styles.background}>
      <div className={styles.introContainer}>
        <div className={styles.titleContainer}>
          <div className={styles.title}>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </div>
          <div className={styles.items}>
            <div className={styles.itemLeft}>
              <span className={styles.shoppingCar}>
                <ShoppingCart size={16} weight="fill" />
              </span>
              <p>Compra simples e segura</p>
            </div>
            <div className={styles.itemRight}>
              <span className={styles.package}>
                <Package size={16} weight="fill" />
              </span>
              <p>Embalagem mantém o café intacto</p>
            </div>
            <div className={styles.itemLeft}>
              <span className={styles.timer}>
                <Timer size={16} weight="fill" />
              </span>
              <p>Entrega rápida e rastreada</p>
            </div>
            <div className={styles.itemRight}>
              <span className={styles.coffee}>
                <Coffee size={16} weight="fill" />
              </span>
              <p>O café chega fresquinho até você</p>
            </div>
          </div>
        </div>
        <div className={styles.coffImg}>
          <img src={coffeDeliveryImg} alt="" />
        </div>
      </div>
    </div>
  );
}
