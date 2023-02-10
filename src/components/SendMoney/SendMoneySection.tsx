import React, { FC, useRef } from "react";
import styled from "styled-components/native";
import Animated from "react-native-reanimated";
import BottomSheet from "reanimated-bottom-sheet";

// assets
import colors from "../../../assets/colors/colors";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";
import { ScreenHeight } from "../../../assets/colors/shared";

// props
import { SendMoneySectionProps } from "./types";

// components
import SendMoneyItem from "./SendMoneyItem";

// styled components
const SendMoneySectionBackground = styled.View`
  height: 100%;
  width: 100%;
  padding-top: 12px;
  background-color: radial-gradient(
    circle,
    rgba(38, 36, 90, 1) 0%,
    rgba(217, 63, 251, 1) 100%
  );
`;

const SendMoneyRow = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: 25px;
`;

const SendMoneyList = styled.FlatList`
  flex: auto;
  width: 100%;
  min-height: 80%;
  padding-horizontal: 25px;
`;

const TextButton = styled.TouchableOpacity``;

const SendMoneySection: FC<SendMoneySectionProps> = ({ data }) => {
  const sheetRef = useRef<BottomSheet>(null);
  const renderContent = () => {
    return (
      <SendMoneySectionBackground>
        <SendMoneyRow style={{ marginBottom: 25 }}>
          <RegularText
            textStyles={{
              fontSize: 20,
              color: colors.white,
            }}
          >
            Send money to...
          </RegularText>
          <TextButton onPress={() => alert("Add")}>
            <SmallText
              textStyles={{
                fontWeight: "bold",
                color: colors.tertiary,
              }}
            >
              +Add
            </SmallText>
          </TextButton>
        </SendMoneyRow>
        <SendMoneyList
          data={data}
          contentContainerStyle={{
            alignItems: "flex-start",
          }}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          numColumns={3}
          keyExtractor={({ id }: any) => id.toString()}
          renderItem={({ item }: any) => <SendMoneyItem {...item} />}
        />
      </SendMoneySectionBackground>
    );
  };

  return (
    <BottomSheet
      ref={sheetRef}
      snapPoints={[ScreenHeight * 0.85, ScreenHeight * 0.23, 60]}
      borderRadius={25}
      initialSnap={1}
      enabledContentTapInteraction={false}
      renderContent={renderContent}
    />
  );
};

export default SendMoneySection;
