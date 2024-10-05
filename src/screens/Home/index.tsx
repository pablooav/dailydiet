import { Header } from '@components/Header';
import { Container } from './styles';
import { Percent } from '@components/Percent';
import { Meals } from '@components/Meals';

export function Home() {

  return (
    <Container>
      <Header />
      <Percent value={50.43} />
      <Meals />
    </Container>

  );

}
