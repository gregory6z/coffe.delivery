import {
  BenefitsContainer,
  IntroContainer,
  IntroContent,
  IntroTitle,
} from "./styles";
import introImg from "../../../../assets/intro-img.png";
import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react";
import { useTheme } from "styled-components";
import { RegularText } from "../../../../components/Typography";
import { InfoWithIcon } from "../../../../components/InfoWithIcon";

export function Intro() {
  const { colors } = useTheme();

  return (
    <IntroContainer>
      <IntroContent className="container">
        <div>
          <section>
            <IntroTitle size="xl">
            Trouvez le café parfait à tout moment de la journée
            </IntroTitle>
            <RegularText as="h3" size="l" color="subtitle">
            Avec Coffee Delivery vous recevez votre café où que vous soyez,
            à toute heure
            </RegularText>
          </section>

          <BenefitsContainer>
            <InfoWithIcon
              iconBg={colors["brand-yellow-dark"]}
              icon={<ShoppingCart weight="fill" />}
              text="Achat simple et sécurisé"
            />
            <InfoWithIcon
              iconBg={colors["base-text"]}
              icon={<Package weight="fill" />}
              text="L'emballage garde le café intact"
            />
            <InfoWithIcon
              iconBg={colors["brand-yellow"]}
              icon={<Timer weight="fill" />}
              text="Livraison rapide et suivie"
            />
            <InfoWithIcon
              iconBg={colors["brand-purple"]}
              icon={<Coffee weight="fill" />}
              text="O café chega fresquinho até você"
            />
          </BenefitsContainer>
        </div>

        <img src={introImg} />
      </IntroContent>
    </IntroContainer>
  );
}
