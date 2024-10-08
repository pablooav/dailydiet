import { Percent } from "@components/Percent";
import { Body, Container, Header, Icon, Title } from "./styles";
import { Info } from "@components/Info";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Meal } from "@components/Meals";
import { useEffect, useState } from "react";

export type IType = 'GREEN' | 'RED';

type RouteParams = {
  type: IType;
  percent: number;
  meals: Meal[];
}

export function Statistics() {
  const navigation = useNavigation();
  const route = useRoute();
  const { type, percent, meals } = route.params as RouteParams;

  const [sequenceInDiet, setSequenceInDiet] = useState(0);
  const [mealsRegistered, setMealsRegistered] = useState(0);
  const [mealsInDiet, setMealsInDiet] = useState(0);
  const [mealsOutDiet, setMealsOutDiet] = useState(0);

  function handleStatistics() {
    setMealsRegistered(meals.length);

    const mealsInDiet = meals.filter((meal) => meal.type === 'GREEN');
    setMealsInDiet(mealsInDiet.length);
    setMealsOutDiet(meals.length - mealsInDiet.length);

    let sequence = 0;
    let maxSequence = 0;
    meals.forEach((meal) => {
      if (meal.type === 'GREEN') {
        sequence++;
      } else {
        maxSequence = Math.max(sequence, maxSequence);
        sequence = 0;
      }
    });
    setSequenceInDiet(maxSequence);
    
  }

  function handleBack() {
    navigation.goBack();
  }

  useEffect(() => {
    handleStatistics();
  }, []);

  return (
    <Container type={type}>
       <Header>
        <Icon icon="west" type={type} onPress={handleBack} />
        <Percent value={percent} />
      </Header>
      <Body>
        <Title>Estatísticas gerais</Title>
        <Info title={sequenceInDiet} subtitle="melhor sequência de pratos dentro da dieta" />
        <Info title={mealsRegistered} subtitle="refeições registradas" />
        <Info title={mealsInDiet} width="48" type="GREEN" subtitle="refeições dentro da dieta" />
        <Info title={mealsOutDiet} width="48" type="RED" subtitle="refeições fora da dieta" />
        
      </Body>
    </Container>
   
  );
}