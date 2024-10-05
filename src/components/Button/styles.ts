import { TouchableOpacity } from "react-native";
import styled, {css} from "styled-components/native";
import { Plus } from "phosphor-react-native";

type Props = {
  icon: string;
}

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;
  min-height: 56px;
  max-height: 56px;

  background-color: ${({theme, icon}) => theme.COLORS.GRAY_2};
  border-radius: 6px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const Title = styled.Text`
   ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  
`;

export const PlusIcon = styled(Plus).attrs(({theme}) => ({
  size: 24,
  color: theme.COLORS.WHITE
}))``