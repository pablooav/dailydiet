import { ButtonIcon } from "@components/ButtonIcon";
import { Container, Icon, Subtitle, Title } from "./styles";

type Props = {
  value: number;
}

export function Percent({ value }: Props) {
  return (
    <Container type="GREEN">
      <Icon icon="north-east" type="GREEN" />
      <Title>{String(value).replace('.', ',')}%</Title>
      <Subtitle>das refeições dentro da dieta</Subtitle>
    </Container>
  );
}