import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Picker,
  Icon,
  View,
  Text,
  Button,
} from 'native-base';
import {ImageBackground} from 'react-native';

import SelectMeal from '../SelectMeal';
import SelectIngredients from '../SelectIngredients';
export default class WelcomePage extends Component {
  render() {
    return (
      <ImageBackground
        source={require('../../bg.jpg')}
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
        <SelectMeal></SelectMeal>
        <View>
          <SelectIngredients></SelectIngredients>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Button
            primary
            onPress={() => {
              this.props.navigation.navigate('FoodList');
            }}
            style={{marginBottom: 5}}>
            <Text>Yemek Bul</Text>
          </Button>
        </View>
      </ImageBackground>
    );
  }
}
