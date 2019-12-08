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
  TextInput,
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

//icons
import {SearchBar} from 'react-native-elements';
class SearchView extends Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({search});
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="malzeme girin"
          style={styles.textArea}></TextInput>
        <Text>ARA</Text>
      </View>
    );
  }
}

export default SearchView;

const styles = StyleSheet.create({
  textArea: {
    borderWidth: 1,
    borderColor: 'gray',
    borderStyle: 'solid',
    flex: 1,
  },

  container: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
