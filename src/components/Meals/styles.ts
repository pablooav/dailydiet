import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  margin-top: 32px;
`;

export const MealTitle = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
  padding-top: 16px;
`;