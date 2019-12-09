import React, {Component} from 'react';
import {Image} from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from 'native-base';
const foodName = 'Tavuk Tantuni';
const malzemeler = [''];
const FoodCard = () => {
  return (
    <Card>
      <CardItem>
        <Left>
          <Thumbnail
            source={{
              uri:
                'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            }}
          />

          <Body>
            <Text>{foodName}</Text>
            <Text note>lavaş,tavuk,turşu</Text>
            <Text note>52dk 4 kişilik</Text>
          </Body>
        </Left>
        <Right>
          <Text>Aç</Text>
        </Right>
      </CardItem>
    </Card>
  );
};

export default class CardList extends Component {
  render() {
    return (
      <>
        <FoodCard></FoodCard>
        <FoodCard></FoodCard>
      </>
    );
  }
}
