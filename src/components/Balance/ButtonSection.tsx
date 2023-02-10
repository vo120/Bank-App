import React, { FC } from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

// assets
import { Ionicons } from "@expo/vector-icons";
import colors from "../../../assets/colors/colors";
import RegularButton from "../Buttons/RegularButton";

// props
import { Props as BalanceProps } from "../../screens/Balance";

// styled components
const ButtonSectionBackground = styled.View`
  align-items: center;
  width: 100%;
  flex: 1;
`;

const ButtonSection: FC = () => {
  const navigation = useNavigation<BalanceProps["navigation"]>();
  return (
    <ButtonSectionBackground>
      <RegularButton
        btnStyles={{ width: "50%", backgroundColor: `${colors.tertiary}20` }}
        onPress={() => navigation.goBack()}
        textStyles={{ fontFamily: "NeueMetanaMono-SemiBold", paddingRight: 5 }}
      >
        Cancel <Ionicons name="card" size={19} color={colors.white} />
      </RegularButton>
    </ButtonSectionBackground>
  );
};

export default ButtonSection;
