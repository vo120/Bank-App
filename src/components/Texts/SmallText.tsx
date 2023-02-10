import React, { Children, FunctionComponent } from "react";
import styled from "styled-components/native";

// colors import
import colors from "../../../assets/colors/colors";

const StyledText = styled.Text`
  font-size: 13px;
  color: ${colors.gray};
  text-align: left;
  font-family: "NeueMetanaMono-Light";
`;
// types
import { TextProps } from "./types";

const SmallText: FunctionComponent<TextProps> = ({ ...props }) => {
  let { textStyles, children } = props;
  return (
    <>
      <StyledText style={textStyles}>{children}</StyledText>
    </>
  );
};

export default SmallText;
