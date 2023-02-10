import React, { FC } from "react";
import styled from "styled-components/native";

// assets
import colors from "../../../assets/colors/colors";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";

// props
import { AmountProps } from "./types";

// styled components
const AmountSectionBackground = styled.View`
  flex: 1;
  padding-top: 5px;
  align-items: center;
  width: 100%;
`;

const AmountSection: FC<AmountProps> = (props) => {
  let { balance } = props;
  return (
    <AmountSectionBackground>
      <SmallText
        textStyles={{
          color: colors.offWhite,
          marginBottom: 20,
          fontFamily: "MonumentExtended-Light",
        }}
      >
        Total Balance
      </SmallText>
      <RegularText
        textStyles={{
          color: `${colors.offGray}`,
          fontSize: 29,
          fontFamily: "MonumentExtended-Light",
        }}
      >
        ${balance}
      </RegularText>
    </AmountSectionBackground>
  );
};

export default AmountSection;
