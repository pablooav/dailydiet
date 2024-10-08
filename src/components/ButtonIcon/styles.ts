import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons'

export type ButtonIconTypeStyleProps = 'GREEN' | 'RED' | 'DEFAULT';

type Props = {
  type: ButtonIconTypeStyleProps;
};

export const Container = styled(TouchableOpacity)`
  width: 24px;
  height: 24px;

  justify-content: center;
  align-items: center;

`;

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
  size: 24,
  color: type === 'DEFAULT' ? theme.COLORS.GRAY_1 : (type === 'GREEN' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK)

}))``;