import React, { FC } from "react";
import styled from "styled-components/native";

// assets
import colors from "../../../assets/colors/colors";
import { ScreenWidth } from "../../../assets/colors/shared";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";

// props
import { SendMoneyProps } from "./types";

// components
import Profile from "../Headers/Profile";

// styled components
const SendMoneyItemContainer = styled.TouchableHighlight`
  height: 130px;
  width: ${ScreenWidth * 0.27}px;
  padding: 10px;
  border-radius: 15px;
  justify-content: space-around;
  margin: 0px 10px 10px 0px;
`;

const SendMoneyItem: FC<SendMoneyProps> = (props) => {
  let { background, image, name, amount } = props;
  return (
    <SendMoneyItemContainer
      underlayColor={colors.blue}
      style={{
        backgroundColor: background,
      }}
      onPress={() => alert("Send Money!")}
    >
      <>
        <Profile img={image} imgContainerStyle={{ marginBottom: 10 }} />
        <SmallText
          textStyles={{
            color: colors.white,
            fontSize: 12,
            textAlign: "left",
            fontFamily: "Grotta-Medium",
          }}
        >
          {name}
        </SmallText>
        <RegularText
          textStyles={{ color: colors.white, fontSize: 14, textAlign: "left" }}
        >
          {amount}
        </RegularText>
      </>
    </SendMoneyItemContainer>
  );
};

export default SendMoneyItem;
