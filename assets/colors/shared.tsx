import styled from "styled-components/native";
import colors from "./colors";
import { Dimensions } from "react-native";

import * as Font from "expo-font";

const loadFonts = async () => {
  await Font.loadAsync({
    "NeueMetanaMono-Light": require("../../assets/fonts/NeueMetanaMono-Light.otf"),
    "NeueMetanaMono-SemiBold": require("../../assets/fonts/NeueMetanaMono-SemiBold.otf"),
    "Brown-Regular": require("../../assets/fonts/Brown-Sugar.ttf"),
    "Grotta-Medium": require("../../assets/fonts/Grotta-Medium.otf"),
    "MonumentExtended-Light": require("../../assets/fonts/MonumentExtended-Light.otf"),
    "SpaceGrotesk-Regular": require("../../assets/fonts/SpaceGrotesk-Regular.ttf"),
  });
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${colors.white};
`;

const ScreenWidth = Dimensions.get("screen").width;
const ScreenHeight = Dimensions.get("screen").height;

export { Container, ScreenWidth, ScreenHeight, loadFonts };
