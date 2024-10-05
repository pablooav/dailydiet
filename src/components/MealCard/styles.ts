import { View } from "react-native";
import styled, { css } from "styled-components/native";
export type StatusStyleProps = 'GREEN' | 'RED';

type Props = {
  type: StatusStyleProps;
}

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
  border-radius: 6px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 8px;

`;

export const Meal = styled.View`
  padding: 16px;
  flex-direction: row;
  align-items: center;
`;

export const Hour = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;
export const Divisor = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_4};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  padding: 0 12px;
`;
export const Title = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_2};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    border-left: 2px solid ${theme.COLORS.GRAY_5};
  `}
  
`;

export const Status = styled(View)<Props>`
  width: 14px;
  height: 14px;
  background-color: ${({ theme, type }) => type === 'GREEN' ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
  border-radius: 7px;
  margin-right: 16px;
`;