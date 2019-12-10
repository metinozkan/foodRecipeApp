import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Picker,
  Icon,
} from 'native-base';
export default class PickerInputExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected2: undefined,
    };
  }
  onValueChange2(value) {
    this.setState({
      selected2: value,
    });
  }
  render() {
    console.log(this.state.selected2);
    return (
      <Form style={{marginTop: 5, backgroundColor: '#fff'}}>
        <Item picker>
          <Picker
            mode="dropdown"
            iosIcon={<Icon name="arrow-down" />}
            style={{width: undefined}}
            placeholder="Select your SIM"
            placeholderStyle={{color: '#bfc6ea'}}
            placeholderIconColor="#007aff"
            selectedValue={this.state.selected2}
            onValueChange={this.onValueChange2.bind(this)}>
            <Picker.Item enable label="Lütfen öğün seçiniz" value="key0" />
            <Picker.Item label="Kahvaltı" value="key0" />
            <Picker.Item label="Öğle Yemeği" value="key1" />
            <Picker.Item label="Akşam Yemeği" value="key2" />
          </Picker>
        </Item>
      </Form>
    );
  }
}
