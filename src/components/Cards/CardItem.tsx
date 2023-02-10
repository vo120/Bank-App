import React, { FC } from "react";
import styled from "styled-components/native";
import { View } from "react-native";

// assets
import colors from "../../../assets/colors/colors";
import { ScreenWidth } from "../../../assets/colors/shared";
import silkFluid2 from "../../../assets/images/backgrounds/silk-fluid-2.jpg";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";
import { BlurView } from "expo-blur";

// navigation
import { useNavigation } from "@react-navigation/native";
import { Props as HomeProps } from "../../screens/Home";

// styled components
const CardBackground = styled.ImageBackground`
  height: 100%;
  width: ${ScreenWidth * 0.67}px;
  resize-mode: cover;
  border-radius: 25px;
  margin-right: 25px;
  overflow: hidden;
  border: 1px solid ${colors.blue}20;
`;

const CardTouchable = styled.TouchableHighlight`
  height: 75%;
  width: ${ScreenWidth * 0.67}px;
  border-radius: 25px;
  z-index: 100;
`;

const TouchableView = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  z-index: 100;
`;

const CardRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
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

// types
import { CardProps } from "./types";

const CardItem: FC<CardProps> = (props) => {
  let { accountNo, balance, logo } = props;

  // setting up navigation
  const navigation = useNavigation<HomeProps["navigation"]>();

  // navigating to balance screen
  const handlePress = () => {
    navigation.navigate("Balance", { ...props });
  };

  return (
    <CardBackground source={silkFluid2}>
      <CardTouchable underlayColor={`${colors.navy}97`} onPress={handlePress}>
        <TouchableView>
          <CardRow>
            <RegularText
              textStyles={{
                fontSize: 13,
                color: "#C7D1E2",
                fontFamily: "MonumentExtended-Light",
              }}
            >
              ******{accountNo.slice(6, 10)}
            </RegularText>
          </CardRow>
          <CardRow>
            <View style={{ flex: 3 }}>
              <SmallText
                textStyles={{
                  color: colors.lightgray,
                  marginBottom: 10,
                  fontFamily: "Grotta-Medium",
                }}
              >
                Account Balance
              </SmallText>
              <RegularText
                textStyles={{
                  fontSize: 12,
                  fontFamily: "MonumentExtended-Light",
                }}
              >
                $ {balance}
              </RegularText>
            </View>
            <Logo source={logo} />
          </CardRow>
        </TouchableView>
      </CardTouchable>
      <BlurViewContainer intensity={15} tint="dark" />
    </CardBackground>
  );
};

export default CardItem;
