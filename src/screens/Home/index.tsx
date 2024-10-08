import { Header } from '@components/Header';
import { Container, Title } from './styles';
import { Panel } from '@components/Panel';
import { Meal, Meals, SectionListData } from '@components/Meals';
import { useEffect, useState } from 'react';
import { Button } from '@components/Button';
import { useNavigation } from "@react-navigation/native";


export function Home() {
  const navigation = useNavigation();

  const [meals, setMeals] = useState<Meal[]>([{
    title: 'Chicken Salad',
    hour: '12:00',
    type: 'GREEN',
    day: new Date('2024-10-03'),
  }, {
    title: 'Spaghetti',
    hour: '19:00',
    type: 'GREEN',
    day: new Date('2024-10-03'),
  }, {
    title: 'Rice and Beans',
    hour: '15:00',
    type: 'RED',
    day: new Date('2024-10-03'),
  },
  {
    title: 'French Fries',
    hour: '12:00',
    type: 'RED',
    day: new Date('2024-10-04'),
  }, {
    title: 'Salad',
    hour: '19:00',
    type: 'RED',
    day: new Date('2024-10-04'),
  }, {
    title: 'Mashed Potatoes',
    hour: '15:00',
    type: 'RED',
    day: new Date('2024-10-04'),
  }]);
  const [mealsPerDay, setMealsPerDay] = useState<SectionListData[]>([]);
  const [mealsInDietPercent, setMealsInDietPercent] = useState(0);

  function handleMealsPerDay() {
    const mealsPerDay = meals.reduce((acc, meal) => {
      const day = meal.day.toISOString().split('T')[0];
      const dayIndex = acc.findIndex((item) => item.title === day);
      if (dayIndex === -1) {
        acc.push({
          title: day,
          data: [meal],
        });
      } else {
        acc[dayIndex].data.push(meal);
      }
      return acc;
    }, [] as SectionListData[]);

    setMealsPerDay(mealsPerDay);
  }

  function handleMealsInDietPercent() {
    const mealsInDiet = meals.filter((meal) => meal.type === 'GREEN');
    const mealsInDietPercent = parseFloat(((mealsInDiet.length / meals.length) * 100).toFixed(2));
    setMealsInDietPercent(mealsInDietPercent);
  }

  async function handleNewMeal() {
    // Navigate to the NewMeal screen
    navigation.navigate('new');

  }

  useEffect(() => {
    handleMealsPerDay();
    handleMealsInDietPercent();
  }, [meals]);

  return (
    <Container>
      <Header />

      <Panel percent={mealsInDietPercent} meals={meals} />
      
      <Title>Refeições</Title>
      <Button title="Nova refeição" onPress={handleNewMeal}/>

      <Meals data={mealsPerDay} />
    </Container>

  );

}

