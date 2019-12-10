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
import FoodList from './FoodList';
import FoodDetail from './FoodDetail';
import IngAccordion from './IngAccordion';
import WelcomePage from './WelcomePage';
const selectPage = 1;

//for navigate
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

export default class Home extends Component {
  render() {
    return (
      <View style={{height: 100, width: 100, backgroundColor: 'red'}}></View>
    );
  }
}

export const AppNavigator = createAppContainer(
  createStackNavigator(
    {
      WelcomePage: {
        screen: WelcomePage,
        navigationOptions: {
          header: (
            <Header>
              <Body>
                <Title>Evinizde ne var?</Title>
              </Body>
            </Header>
          ),
        },
      },

      FoodList: {
        screen: FoodList,
        navigationOptions: {
          title: 'Yemek Listesi',
          headerBackTitle: '',
          headerStyle: {
            backgroundColor: '#3F51B5',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        },
      },
      FoodDetail: {
        screen: FoodDetail,
        navigationOptions: {
          title: 'Yemek Tarifi',
          headerBackTitle: '',
          headerStyle: {
            backgroundColor: '#3F51B5',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        },
      },
    },
    {
      initialRouteName: 'WelcomePage',
    },
  ),
);
