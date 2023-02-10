import React, { Children, FunctionComponent } from "react";
import styled from "styled-components/native";

// colors import
import colors from "../../../assets/colors/colors";

const StyledText = styled.Text`
  font-size: 37px;
  color: ${colors.white};
  text-align: left;
  font-family: "NeueMetanaMono-SemiBold";
  font-weight: 400;
`;

// types
import { TextProps } from "./types";

const BigText: FunctionComponent<TextProps> = ({ ...props }) => {
  let { textStyles, children } = props;
  return (
    <>
      <StyledText style={textStyles}>{children}</StyledText>
    </>
  );
};

export default BigText;
