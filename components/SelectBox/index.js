import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  Picker,
} from 'react-native';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class SelectBox extends Component {
  state = {meal: ''};
  updateMeal = meal => {
    this.setState({meal: meal});
  };
  render() {
    return (
      <>
        <Picker
          style={{height: 50, width: 250}}
          selectedValue={this.state.meal}
          onValueChange={this.updateMeal}>
          <Picker.Item label="Kahvaltı" value="0" />
          <Picker.Item label="Öğlen Yemeği" value="1" />
          <Picker.Item label="Akşam Yemeği" value="2" />
        </Picker>
        {/* <Text style={styles.text}>{this.state.meal}</Text> */}
      </>
    );
  }
}
export default SelectBox;
