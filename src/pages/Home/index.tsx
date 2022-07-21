import { Intro } from "./components/Intro";
import styles from "./styles.module.scss";
import caffeeImg from "../../assets/expresso.png";
import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { coffees } from "../../context/CoffeeContext";

export function Home() {
  return (
    <div>
      <Intro />

      <section className={styles.sectionCoffee}>
        <>
          <h1>Nossos cafés</h1>

          <div className={styles.coffeeCards}>
            {coffees.map((coffee) => {
              return (
                <div key={coffee.id} className={styles.card}>
                  <img src={caffeeImg} alt="" />
                  <div>
                    {coffee.tags.map((tag) => {
                      return <span key={coffee.id}>{tag}</span>;
                    })}
                  </div>
                  <h4>{coffee.name}</h4>
                  <p>{coffee.description}</p>
                  <div className={styles.amount}>
                    <div>
                      <p>
                        R$
                        <strong>{coffee.amount}</strong>
                      </p>
                    </div>
                    <div className={styles.addingCar}>
                      <button>
                        <Minus size={14} weight="bold" />
                      </button>
                      1
                      <button>
                        <Plus size={14} weight="bold" />
                      </button>
                    </div>
                    <button className={styles.shoppingCar}>
                      <ShoppingCart size={22} weight="fill" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      </section>
    </div>
  );
}
