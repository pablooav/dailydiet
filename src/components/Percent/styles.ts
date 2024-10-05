import { View } from "react-native";
import styled, { css } from "styled-components/native";
import { ArrowUpRight } from "phosphor-react-native";
import { ButtonIcon } from "@components/ButtonIcon";

export type PercentTypeStyleProps = 'GREEN' | 'RED';

type Props = {
  type: PercentTypeStyleProps;
}

export const Container = styled(View)<Props>`
  
  margin-top: 20px;
  align-items: center;
  padding: 32px;
  height: 136px;
  width: 100%;
  background-color: ${({ theme, type }) => type == 'GREEN' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  border-radius: 8px;
`;


export const Title = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}

`;

export const Subtitle = styled.Text`
  font-size: 16px;
  margin-top: 8px;
  color: ${({ theme }) => theme.COLORS.GRAY_2};
`;

export const Icon = styled(ButtonIcon)`
  position: absolute;
  top: 16px;
  right: 16px;
`;