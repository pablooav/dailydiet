import { Button } from "@components/Button";
import { Container, MealTitle, Title } from "./styles";
import { SectionList, Text } from "react-native";
import { MealCard } from "@components/MealCard";

export function Meals() {

  const DATA = [
    {
      title: '03/10/2024',
      data: [{
        title: 'Chicken Salad',
        hour: '12:00',
        type: 'GREEN',
      }, {
        title: 'Spaghetti',
        hour: '19:00',
        type: 'GREEN',
      }, {
        title: 'Rice and Beans',
        hour: '15:00',
        type: 'RED',
      }],
    },
    {
      title: '04/10/2024',
      data: [{
        title: 'French Fries',
        hour: '12:00',
        type: 'RED',
      }, {
        title: 'Salad',
        hour: '19:00',
        type: 'GREEN',
      }, {
        title: 'Mashed Potatoes',
        hour: '15:00',
        type: 'RED',
      }],
    },
  ];


  return (
    <Container>
      <Title>Refeições</Title>
      <Button title="Nova refeição"></Button>

      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item.title + index}
        renderItem={({item}) => (
          <MealCard title={item.title} hour={item.hour} type={item.type} />
        )}
        renderSectionHeader={({section: {title}}) => (
          <MealTitle>{title}</MealTitle>
        )}
      />
      
    </Container>
  );
}