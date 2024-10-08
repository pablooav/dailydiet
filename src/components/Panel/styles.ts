import { View } from "react-native";
import styled, { css } from "styled-components/native";
import { ButtonIcon } from "@components/ButtonIcon";

export type PanelTypeStyleProps = 'GREEN' | 'RED';

type Props = {
  type: PanelTypeStyleProps;
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

export const Icon = styled(ButtonIcon)`
  position: absolute;
  top: 16px;
  right: 16px;
`;