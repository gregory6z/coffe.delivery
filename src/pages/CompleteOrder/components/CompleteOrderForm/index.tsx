import { TitleText } from "../../../../components/Typography";
import { SectionTitle } from "../SectionTitle";
import { CompleteOrderFormContainer, FormSectionContainer } from "./styles";
import { MapPinLine, CurrencyDollar } from "phosphor-react";
import { useTheme } from "styled-components";
import { AddressForm } from "./AddressForm";
import { PaymentMethodOptions } from "./PaymentMethodOptions";

export function CompleteOrderForm() {
  const { colors } = useTheme();
  return (
    <CompleteOrderFormContainer>
      <TitleText size="xs" color="subtitle">
      Complétez votre commande

      </TitleText>
      <FormSectionContainer>
        <SectionTitle
          title="Adresse de livraison"
          subtitle="Entrez l'adresse où vous souhaitez recevoir votre commande"
          icon={<MapPinLine color={colors["brand-yellow-dark"]} size={22} />}
        />

        <AddressForm />
      </FormSectionContainer>
      <FormSectionContainer>
        <SectionTitle
          title="Payment"
          subtitle="Le paiement s'effectue à la livraison. Choisissez la façon dont vous voulez payer"
          icon={<CurrencyDollar color={colors["brand-purple"]} size={22} />}
        />
        <PaymentMethodOptions />
      </FormSectionContainer>
    </CompleteOrderFormContainer>
  );
}
