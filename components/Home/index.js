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
import IngAccordion from './IngAccordion';
const selectPage = 1;

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
          {selectPage == 1 ? (
            <>
              {/* <SelectMeal></SelectMeal> */}
              <IngAccordion></IngAccordion>
              <Button full primary>
                <Text>Yemek Bul</Text>
              </Button>
            </>
          ) : selectPage == 2 ? (
            <>
              <FoodList></FoodList>
              <FoodList></FoodList>
              <FoodList></FoodList>
              <FoodList></FoodList>
            </>
          ) : (
            <>
              <FoodDetail></FoodDetail>
              <FoodDetail></FoodDetail>
            </>
          )}

          {/* <FoodList></FoodList> */}
          {/* <FoodDetail></FoodDetail> */}
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
