import { View } from "react-native";
import styled from "styled-components/native";
import { IType } from ".";

type Props = {
  type: IType;
  width: string;
}

export const Container = styled(View)<Props>`
  align-items: center;
  justify-content: center;


  padding: 16px;
  background-color: ${({ theme, type }) => type == 'DEFAULT' ? theme.COLORS.GRAY_6 : (type == 'GREEN' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT)};
  border-radius: 8px;
  max-height: 100px;
  min-height: 100px;
  width:${({ width }) => width}%;

  margin-bottom: 12px;
`;

export const Title = styled.Text`
  ${({ theme }) => `
    font-size: ${theme.FONT_SIZE.XXL}px;
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const Subtitle = styled.Text`
  ${({ theme }) => `
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_2};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
  text-align: center;
`;

