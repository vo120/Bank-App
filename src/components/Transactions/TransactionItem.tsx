import React, { FC } from "react";
import styled from "styled-components/native";
import { View } from "react-native";

// assets
import colors from "../../../assets/colors/colors";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";

// components
import TransactionAvatar from "./TransactionAvatar";

// styled components
const TransactionRow = styled.View`
  margin-bottom: 25px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const LeftView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  flex: 2;
`;

const RightView = styled.View`
  flex: 1;
`;

// props
import { TransactionProps } from "./types";

const TransactionItem: FC<TransactionProps> = ({
  art,
  title,
  subtitle,
  amount,
  date,
}) => {
  return (
    <TransactionRow>
      <LeftView>
        <TransactionAvatar background={art.background} icon={art.icon} />
        <View style={{ marginLeft: 10 }}>
          <RegularText
            textStyles={{
              color: colors.offWhite,
              textAlign: "left",
              marginBottom: 5,
            }}
          >
            {title}
          </RegularText>
          <SmallText
            textStyles={{
              color: colors.offGray,
              textAlign: "left",
            }}
          >
            {subtitle}
          </SmallText>
        </View>
      </LeftView>
      <RightView>
        <RegularText
          textStyles={{
            color: colors.offWhite,
            textAlign: "right",
            marginBottom: 5,
          }}
        >
          {amount}
        </RegularText>
        <SmallText
          textStyles={{
            color: colors.offGray,
            textAlign: "right",
            fontSize: 12,
          }}
        >
          {date}
        </SmallText>
      </RightView>
    </TransactionRow>
  );
};

export default TransactionItem;
