import React, { FC } from "react";
import styled from "styled-components/native";

// components
import CardItem from "./CardItem";

// styled components
const CardList = styled.FlatList`
  width: 100%;
  flex: 1;
  padding: 25px;
  padding-bottom: 15px;
`;
// props
import { CardSectionProps } from "./types";

const CardSection: FC<CardSectionProps> = (props) => {
  let { data } = props;
  return (
    <CardList
      data={data}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ alignItems: "center", paddingRight: 25 }}
      keyExtractor={({ id }: any) => {
        return id.toString();
      }}
      renderItem={({ item }: any) => {
        return <CardItem {...item} />;
      }}
    />
  );
};

export default CardSection;
