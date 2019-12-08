import React, {Component} from 'react';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  View,
} from 'native-base';

//components
import SelectMeal from './SelectMeal';
import FoodList from './FootList';
import FoodDetail from './FoodDetail';
export default class AnatomyExample extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Evinizde ne var?</Title>
          </Body>
          <Right />
        </Header>
        <Content
          contentContainerStyle={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
          {/* <SelectMeal></SelectMeal>
          <View style={{width: 50, height: 450}}></View>
          <Button full primary>
            <Text>Yemek Bul</Text>
          </Button> */}
          {/* <FoodList></FoodList> */}
          <FoodDetail></FoodDetail>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Tüm hakları halka açıktır</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
