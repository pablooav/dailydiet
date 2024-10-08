import { ButtonIcon } from "@components/ButtonIcon";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_5};
`;


//Centralizar o Title e manter o icon o canto superior direito

export const Header = styled.View`
  flex-direction: row;
  justify-content: center;
  padding: 16px;
  height: 60px;
`;


export const Body = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 20px;
`;

export const Title = styled.Text`
  ${({ theme }) => `
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const Icon = styled(ButtonIcon)`
  position: absolute;
  left: 16px;
  top: 16px;
  margin-left: 16px;
`;