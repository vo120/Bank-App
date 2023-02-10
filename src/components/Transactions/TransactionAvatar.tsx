import React, { FC } from "react";
import styled from "styled-components/native";

// icons
import { Ionicons } from "@expo/vector-icons";

// assets
import colors from "../../../assets/colors/colors";

// props
import { TransactionAvatarProps } from "./types";

// styled components
const StyledView = styled.View`
  height: 45px;
  width: 45px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  border: 1px solid ${colors.blue}40;
`;

const TransactionAvatar: FC<TransactionAvatarProps> = (props) => {
  let { background, icon } = props;
  return (
    <StyledView
      style={{
        backgroundColor: background,
      }}
    >
      <Ionicons name={icon} size={25} color={colors.white} />
    </StyledView>
  );
};

export default TransactionAvatar;
