import { Container, Hour, Meal, Status, Title, Divisor } from "./styles";

type Props = {
  type: 'GREEN' | 'RED';
  title: string;
  hour: string;
}

export function MealCard({type, title, hour}: Props) {
  return (
    <Container>
      <Meal>
        <Hour>{hour}</Hour>
        <Divisor>|</Divisor>
        <Title>{title}</Title>
      </Meal>
      <Status type={type}/>
    </Container>
  );
}