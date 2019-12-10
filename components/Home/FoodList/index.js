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
const FoodCard = props => {
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
          <Button
            onPress={() => {
              props.navigate('FoodDetail');
            }}>
            <Text>Aç</Text>
          </Button>
        </Right>
      </CardItem>
    </Card>
  );
};

export default class FoodList extends Component {
  render() {
    console.log(this.props.navigation);

    return (
      <>
        <FoodCard navigate={this.props.navigation.navigate}></FoodCard>
      </>
    );
  }
}