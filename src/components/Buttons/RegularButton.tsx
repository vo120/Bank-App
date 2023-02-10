import React, { FC } from "react";
import styled from "styled-components/native";
import {
  GestureResponderEvent,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";

// assets
import colors from "../../../assets/colors/colors";
import RegularText from "../Texts/RegularText";

const ButtonView = styled.TouchableOpacity`
  align-items: center;
  background-color: ${colors.primary};
  width: 70%;
  height: 50px;
  padding: 10px;
  border-radius: 20px;
  justify-content: center;
`;

// types
interface ButtonProps {
  btnStyles?: StyleProp<ViewStyle>;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  textStyles?: StyleProp<TextStyle>;
  children?: React.ReactNode;
}
const RegularButton: FC<ButtonProps> = ({ ...props }) => {
  let { btnStyles, onPress, textStyles, children } = props;
  return (
    <ButtonView onPress={onPress} style={btnStyles}>
      <RegularText textStyles={textStyles}>{children}</RegularText>
    </ButtonView>
  );
};

export default RegularButton;
