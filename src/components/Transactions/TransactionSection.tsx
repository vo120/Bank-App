import React, { FC, useState } from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

// assets
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";
import TransactionItem from "./TransactionItem";
import colors from "../../../assets/colors/colors";

// props
import { TransactionSectionProps } from "./types";
import { TextProps } from "../Texts/types";

// styled components

const TransactionSectionBackground = styled.View`
  flex: 2;
  width: 100%;
  padding-top: 5px;
  padding-horizontal: 25px;
`;

const TransactionRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const TransactionList = styled.FlatList`
  width: 100%;
`;

const StyledSmallText = styled(SmallText)`
  color: ${colors.white};
  font-size: 15;
`;
const SmallTextView = (props: TextProps & { onPress: () => void }) => (
  <TouchableOpacity onPress={props.onPress}>
    <StyledSmallText {...props} />
  </TouchableOpacity>
);

const TransactionSection: FC<TransactionSectionProps> = ({ data }) => {
  const [showAll, setShowAll] = useState(true);
  return (
    <TransactionSectionBackground>
      <TransactionRow
        style={{
          marginBottom: 25,
        }}
      >
        <RegularText textStyles={{ fontSize: 20, color: colors.white }}>
          Transactions
        </RegularText>
        <SmallTextView
          textStyles={{
            color: colors.white,
            fontSize: 15,
          }}
          onPress={() => setShowAll(!showAll)}
        >
          Recent{" "}
          <Ionicons
            name={showAll ? "caret-down" : "caret-back"}
            size={13}
            color={colors.offWhite}
          />
        </SmallTextView>
      </TransactionRow>
      {showAll ? (
        <TransactionList
          data={data}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 25 }}
          keyExtractor={({ id }: any) => id.toString()}
          renderItem={({ item }: any) => <TransactionItem {...item} />}
        />
      ) : null}
    </TransactionSectionBackground>
  );
};

export default TransactionSection;
