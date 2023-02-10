import React, { FC } from "react";
import styled from "styled-components/native";

// types props
import { BalanceCardProps } from "./types";

// components
import BalanceCard from "./BalanceCard";

// styled components
const BalanceCardSectionBackground = styled.View`
  align-items: center;
  flex: 2;
  width: 100%;
`;

const BalanceCardSection: FC<BalanceCardProps> = (props) => {
  return (
    <>
      <BalanceCardSectionBackground>
        <BalanceCard {...props} />
      </BalanceCardSectionBackground>
    </>
  );
};

export default BalanceCardSection;
