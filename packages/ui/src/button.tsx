import * as React from "react";
import { GestureResponderEvent, Text } from "react-native";
import styled from "styled-components/native";

export interface ButtonProps {
  text: string;
  onClick?: (event: GestureResponderEvent) => void;
}

const StyledTouchableOpacity = styled.TouchableOpacity`
  max-width: 200px;
  text-align: center;
  border-radius: 10px;
  padding: 14px 30px;
  background-color: #4b0080;
`;

const StyledText = styled.Text`
  color: #fff;
  font-size: 15px;
`;

export function Button({ text, onClick }: ButtonProps) {
  return (
    <StyledTouchableOpacity onPress={onClick}>
      <StyledText>{text}</StyledText>
    </StyledTouchableOpacity>
  );
}
