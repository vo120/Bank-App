import React, { FC } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

// assets
import colors from "../../assets/colors/colors";
import { LinearGradient } from "expo-linear-gradient";
import { Container } from "../../assets/colors/shared";

// props
import { RootStackParamList } from "../routes/RootStack";
import { StackScreenProps } from "@react-navigation/stack";
export type Props = StackScreenProps<RootStackParamList, "Balance">;

// components
import AmountSection from "../components/Balance/AmountSection";
import BalanceCardSection from "../components/Balance/BalanceCardSection";
import ButtonSection from "../components/Balance/ButtonSection";

const BalanceContainer = styled((props) => (
  <Container>
    <LinearGradient {...props} />
  </Container>
))`
  width: 100%;
  padding: 25px;
  flex: 1;
`;

const Balance: FC<Props> = (props) => {
  let { route } = props;
  return (
    <>
      <BalanceContainer
        colors={["#262450", "#000020"]}
        start={[1, 1]}
        end={[1, 0]}
      >
        <StatusBar style="light" />
        <AmountSection balance={route?.params?.balance} />
        <BalanceCardSection {...route?.params} />
        <ButtonSection />
      </BalanceContainer>
    </>
  );
};

export default Balance;
