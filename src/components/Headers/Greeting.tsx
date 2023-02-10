import React, { FC } from "react";
import styled from "styled-components/native";
import { StyleProp, TextStyle } from "react-native";

// assets
import colors from "../../../assets/colors/colors";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";

const StyledView = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  margin-top: 10px;
`;

interface GreetingProps {
  mainText: string;
  subText: string;
  mainTextStyle?: StyleProp<TextStyle>;
  subTextStyle?: StyleProp<TextStyle>;
}

const Greeting: FC<GreetingProps> = ({
  mainText,
  mainTextStyle,
  subText,
  subTextStyle,
}) => {
  return (
    <StyledView>
      <RegularText
        textStyles={[
          {
            fontSize: 15,
            color: colors.white,
            fontFamily: "MonumentExtended-Light",
          },
          mainTextStyle,
        ]}
      >
        {mainText}
      </RegularText>
      <SmallText
        textStyles={[
          {
            marginTop: 5,
            color: "#A1A6AD",
            fontFamily: "Grotta-Medium",
            fontWeight: "bold",
          },
          subTextStyle,
        ]}
      >
        {subText}
      </SmallText>
    </StyledView>
  );
};

export default Greeting;
