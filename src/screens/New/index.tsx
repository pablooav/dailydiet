
import { Body, Container, Header, Icon, Title } from "./styles";
import { useNavigation } from "@react-navigation/native";

export function New() {
  const navigation = useNavigation();
  
  function handleBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <Header>
        <Icon icon="west" onPress={handleBack} />
        <Title>Nova refeição</Title>
      </Header>
      <Body>
        
      </Body>
    </Container>
  )
}