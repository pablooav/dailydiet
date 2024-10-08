import { Button } from "@components/Button";
import { Container, MealTitle } from "./styles";
import { SectionList, Text } from "react-native";
import { MealCard } from "@components/MealCard";
import { useEffect, useState } from "react";

export type Meal = {
  title: string;
  hour: string;
  type: 'GREEN' | 'RED';
  day: Date;
}

export type SectionListData = {
  title: string;
  data: Meal[];
}

type Props = {
  data: SectionListData[];
}



export function Meals({ data }: Props) {
  

  return (
    <Container>
     
      <SectionList
        sections={data}
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