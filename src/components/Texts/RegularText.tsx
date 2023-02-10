import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

// colors import
import colors from "../../../assets/colors/colors";

const StyledText = styled.Text`
  font-size: 15px;
  color: ${colors.white};
  text-align: left;
  font-family: "SpaceGrotesk-Regular";
`;
// types
import { TextProps } from "./types";

const RegularText: FunctionComponent<TextProps> = ({ ...props }) => {
  let { textStyles, children } = props;
  return (
    <>
      <StyledText style={textStyles}>{children}</StyledText>
    </>
  );
};

export default RegularText;
