import React, { FC } from "react";
import styled from "styled-components";
import { StatusBar } from "react-native";

// components
import CardSection from "../components/Cards/CardSection";
import TransactionSection from "../components/Transactions/TransactionSection";
import SendMoneySection from "../components/SendMoney/SendMoneySection";

// assets
import colors from "../../assets/colors/colors";
import { LinearGradient } from "expo-linear-gradient";
import { Container } from "../../assets/colors/shared";
import mcLogo from "../../assets/images/logos/mastercard.png";
import visaLogo from "../../assets/images/logos/visa-logo.png";
import amex from "../../assets/images/logos/amex.png";
import woman1 from "../../assets/images/portraits/woman1.jpg";
import woman2 from "../../assets/images/portraits/woman2.jpg";
import man1 from "../../assets/images/portraits/man1.jpg";

// props
import { RootStackParamList } from "../routes/RootStack";
import { StackScreenProps } from "@react-navigation/stack";
export type Props = StackScreenProps<RootStackParamList, "Home">;

// styled components
const HomeContainer = styled((props) => (
  <Container>
    <LinearGradient {...props} />
  </Container>
))`
  flex: 1;
  width: 100%;
`;

const Home: FC<Props> = () => {
  const cardsData = [
    {
      id: 1,
      accountNo: "4885387568",
      balance: 1000000,
      alias: "Business",
      logo: mcLogo,
    },
    {
      id: 2,
      accountNo: "7563482454",
      balance: 300000,
      alias: "Personal ",
      logo: visaLogo,
    },
    {
      id: 3,
      accountNo: "6349852750",
      balance: 1000000,
      alias: "Savings",
      logo: amex,
    },
  ];

  const transactionData = [
    {
      id: 1,
      amount: "-$10",
      date: "10/10/2023",
      title: "Ride Sharing",
      subtitle: "Lyft",
      art: {
        background: colors.pink,
        icon: "car",
      },
    },
    {
      id: 2,
      amount: "-$1500",
      date: "1/12/2023",
      title: "Travel",
      subtitle: "Korean Air",
      art: {
        background: colors.blue,
        icon: "airplane",
      },
    },
    {
      id: 3,
      amount: "-$150",
      date: "9/15/2023",
      title: "Shopping",
      subtitle: "Nike",
      art: {
        background: colors.navy,
        icon: "cart",
      },
    },
  ];

  const sendMoneyData = [
    {
      id: 1,
      amount: "$3000",
      name: "Jane Doe",
      background: `${colors.accent}`,
      image: woman1,
    },
    {
      id: 2,
      amount: "$6000",
      name: "Alexa Doe",
      background: `${colors.blue}`,
      image: woman2,
    },
    {
      id: 3,
      amount: "$9000",
      name: "John Doe",
      background: `${colors.pink}`,
      image: man1,
    },
  ];
  return (
    <HomeContainer colors={["#262450", "#000020"]} start={[1, 1]} end={[1, 0]}>
      <StatusBar barStyle="light-content" />
      <CardSection data={cardsData} />
      <TransactionSection data={transactionData} />
      <SendMoneySection data={sendMoneyData} />
    </HomeContainer>
  );
};

export default Home;
