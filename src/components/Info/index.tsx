import { PanelTypeStyleProps } from "@components/Panel/styles";
import { Container, Subtitle, Title } from "./style";

export type IType = 'GREEN' | 'RED' | 'DEFAULT';

type Props = {
  type?: IType;
  title: number;
  subtitle: string;
  width?: string;
}
export function Info({type = 'DEFAULT', title, subtitle, width = '100'}: Props) {
  return (
    <Container width={width} type={type} >
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  )
}