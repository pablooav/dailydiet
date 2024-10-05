import { TouchableOpacityProps } from "react-native";
import { Container, PlusIcon, Title } from "./styles";

type Props = TouchableOpacityProps & {
  title: string
  icon?: string;
}

export function Button({ title, icon = 'PRIMARY', ...rest }: Props) {
  return (
    <Container icon={icon} {...rest}>
      <PlusIcon />
      <Title>{title}</Title>
    </Container>
  )
}

