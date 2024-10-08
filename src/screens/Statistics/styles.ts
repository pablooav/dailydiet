import { ButtonIcon } from "@components/ButtonIcon";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

type Props = {
  type: 'GREEN' | 'RED';
}

export const Container = styled(SafeAreaView)<Props>`
  flex: 1;
  background-color: ${({ theme, type }) => type == 'GREEN' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const Header = styled.View`
  align-items: center;
  justify-content: center;
  height: 200px;

`;

export const Body = styled.View`
  
  height: 100%;
  padding: 32px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};

  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  
`;


export const Icon = styled(ButtonIcon)`
  align-self: initial;
  margin-left: 24px;
  margin-top: 24px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  margin-bottom: 16px;

`;



