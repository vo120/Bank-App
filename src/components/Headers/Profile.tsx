import React, { FC } from "react";
import styled from "styled-components/native";
import {
  ImageSourcePropType,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
  ImageStyle,
} from "react-native";

// assets

// styling
const StyledView = styled.TouchableOpacity`
  flex-direction: column;
  height: 45px;
  width: 45px;
  border-radius: 15px;
`;

const StyledImage = styled.Image`
  resize-mode: cover;
  height: 100%;
  width: 100%;
  border-radius: 15px;
`;

// properties expected by the component
interface ProfileProps {
  img: ImageSourcePropType;
  imgStyle?: StyleProp<ImageStyle>;
  imgContainerStyle?: StyleProp<ViewStyle>;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

const Profile: FC<ProfileProps> = (props) => {
  let { img, imgStyle, imgContainerStyle, onPress } = props;

  return (
    <StyledView onPress={onPress} style={imgContainerStyle}>
      <StyledImage style={imgStyle} source={img} />
    </StyledView>
  );
};

export default Profile;
