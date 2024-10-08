import { Subtitle, Title } from "./styles";

type Props = {
  value: number;
}

export function Percent({ value }: Props) {
  return (
    <>
      <Title>{String(value).replace('.', ',')}%</Title>
      <Subtitle>das refeições dentro da dieta</Subtitle>
    </>
  )
}