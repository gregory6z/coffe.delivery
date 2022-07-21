import { MapPin, ShoppingCart } from "phosphor-react";
import logoImg from "../assets/logo.svg";
import styles from "./Header.module.scss";

export function Header() {
  return (
    <div className={styles.headerContainer}>
      <img src={logoImg} alt="" />
      <div className={styles.shoppingCar}>
        <span>
          <MapPin size={22} weight="fill" /> Aubagne, FR
        </span>
        <button>
          <ShoppingCart size={22} weight="fill" />
        </button>
      </div>
    </div>
  );
}
