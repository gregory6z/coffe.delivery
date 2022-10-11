import { PaymentMethodOptionsContainer } from "./styles";
import { CreditCard, Money, Bank } from "phosphor-react";
import { PaymentMethodInput } from "../PaymentMethodInput";
import { useFormContext } from "react-hook-form";
import { RegularText } from "../../../../components/Typography";

export const paymentMethods = {
  credit: {
    label: "Carte bancaire",
    icon: <CreditCard size={16} />,
  },
  debit: {
    label: "Virement",
    icon: <Bank size={16} />,
  },
  money: {
    label: "Especes",
    icon: <Money size={16} />,
  },
};

export function PaymentMethodOptions() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const paymentMethodError = errors?.paymentMethod
    ?.message as unknown as string;

  return (
    <PaymentMethodOptionsContainer>
      {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
        <PaymentMethodInput
          key={label}
          id={key}
          icon={icon}
          label={label}
          value={key}
          {...register("paymentMethod")}
        />
      ))}

      {paymentMethodError && <RegularText>{paymentMethodError}</RegularText>}
    </PaymentMethodOptionsContainer>
  );
}
