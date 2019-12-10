/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  Dimensions,
} from 'react-native';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

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

import Home from './components/Home';
import {AppNavigator} from './components/Home';
class App extends Component {
  render() {
    return (
      <>
        <StatusBar barStyle="light-content" />
        <Container>
          <Content
            contentContainerStyle={{
              height: '100%',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
            <AppNavigator />
          </Content>
          <Footer>
            <FooterTab>
              <Button full>
                <Text>Tüm hakları halka açıktır</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      </>
    );
  }
}
const styles = StyleSheet.create({});

export default App;
