import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";

// shared custom component
import { Container } from "../../assets/colors/shared";
import colors from "../../assets/colors/colors";
import { ScreenWidth } from "../../assets/colors/shared";

// texts
import BigText from "../components/Texts/BigText";

// buttons
import RegularButton from "../components/Buttons/RegularButton";

// images
import silkFluid from "../../assets/images/backgrounds/silk-fluid.jpg";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// props
import { RootStackParamList } from "../routes/RootStack";
import { StackScreenProps } from "@react-navigation/stack";
type Props = StackScreenProps<RootStackParamList, "Welcome">;

const WelcomeContainer = styled(Container)`
  justify-content: space-between;
  width: 100%;
  height: 100%;
  position: relative;
`;

const TopSection = styled.View`
  width: ${0.7 * ScreenWidth}px;
  flex: 1;
  padding: 15px 15px;
  margin-top: 60px;
  max-height: 100%;
  align-self: flex-start;
  z-index: 100;
  position: absolute;
`;
const TopImage = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: cover;
`;

const BottomSection = styled.View`
  width: 100%;
  padding: 25px;
  flex: 1;
  justify-content: flex-end;
  z-index: 100;
  position: absolute;
  bottom: 0;
  background-color: #000;
`;

const BlurViewContainer = styled(BlurView)`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
`;

const WelcomeScreen: FunctionComponent<Props> = ({ navigation }) => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <WelcomeContainer>
        <TopSection>
          <MaterialCommunityIcons
            name="contactless-payment"
            size={30}
            color={colors.white}
            style={{ backgroundColor: "transparent" }}
          />
        </TopSection>
        <TopImage source={silkFluid} />
        <BottomSection>
          <BigText
            textStyles={{
              width: "80%",
              marginBottom: 25,
              marginLeft: 10,
              textAlign: "left",
              fontSize: 50,
              fontFamily: "Brown-Regular",
              color: colors.white,
              opacity: 100,
            }}
          >
            Easy Money Flow
          </BigText>
          <LinearGradient
            colors={["#262450", "#000020"]}
            start={[0, 1]}
            end={[1, 0]}
            style={{
              width: "100%",
              borderRadius: 25,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <RegularButton
              btnStyles={{
                width: "100%",
                backgroundColor: "transparent",
              }}
              textStyles={{
                fontWeight: "bold",
                fontFamily: "MonumentExtended-Light",
                color: colors.white,
              }}
              onPress={() => {
                navigation.navigate("Home");
              }}
            >
              Get Started
            </RegularButton>
          </LinearGradient>
        </BottomSection>
        <BlurViewContainer intensity={30} />
      </WelcomeContainer>
    </>
  );
};

export default WelcomeScreen;
