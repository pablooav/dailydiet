
import { Percent } from "@components/Percent";
import { useNavigation } from "@react-navigation/native";
import { Container, Icon} from "./styles";
import { Meal } from "@components/Meals";

type Props = {
  percent: number;
  meals: Meal[];
}

export function Panel({ percent, meals }: Props) {
  const navigation = useNavigation();

  function handleGreenOrRed() {
    // Check if the percentage is greater than 50
    if (percent >= 50) return 'GREEN';
    else return 'RED';
  }

  async function handleOpenStatistics() {
    // Open statistics
    navigation.navigate('statistics', { type: handleGreenOrRed(), percent, meals });

  }

  return (
    <Container type={handleGreenOrRed()}>
      <Icon icon="north-east" type={handleGreenOrRed()} onPress={handleOpenStatistics} />
      <Percent value={percent} />
    </Container>
  );
}