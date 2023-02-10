import React, { FC } from "react";
import styled from "styled-components/native";
import { View } from "react-native";

// assets
import colors from "../../../assets/colors/colors";
import silkFluid2 from "../../../assets/images/backgrounds/silk-fluid-2.jpg";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";
import { BlurView } from "expo-blur";
import { ScreenHeight } from "../../../assets/colors/shared";

// types props
import { BalanceCardProps } from "./types";

// styled components
const CardBackground = styled.ImageBackground`
  height: ${ScreenHeight * 0.3}px;
  width: 100%;
  resize-mode: cover;
  border-radius: 25px;
  overflow: hidden;
  border: 1px solid ${colors.blue}20;
`;

const TouchableView = styled.View`
  flex: 1;
  justify-content: space-between;
  z-index: 100;
  align-items: center;
  padding: 30px;
`;

const CardRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Logo = styled.Image`
  width: 100%;
  height: 80%;
  resize-mode: contain;
  flex: 1;
`;

const BlurViewContainer = styled(BlurView)`
  width: 100%;
  height: 100%;
  position: absolute;

  // z-index: 0;
`;

const BalanceCard: FC<BalanceCardProps> = (props) => {
  let { accountNo, balance, logo } = props;
  return (
    <CardBackground source={silkFluid2}>
      <TouchableView>
        <CardRow>
          <RegularText
            textStyles={{
              fontSize: 13,
              color: "#C7D1E2",
              fontFamily: "MonumentExtended-Light",
            }}
          >
            ****** {accountNo?.slice(6, 10)}
          </RegularText>
        </CardRow>
        <CardRow>
          <View style={{ flex: 3 }}>
            <SmallText
              textStyles={{
                color: colors.offWhite,
                marginBottom: 10,
                fontFamily: "Grotta-Medium",
              }}
            >
              Account Balance
            </SmallText>
            <RegularText
              textStyles={{
                color: colors.white,
                fontFamily: "MonumentExtended-Light",
              }}
            >
              ${balance}
            </RegularText>
          </View>
          <Logo source={logo} />
        </CardRow>
      </TouchableView>
      <BlurViewContainer intensity={15} tint="default" />
    </CardBackground>
  );
};

export default BalanceCard;
