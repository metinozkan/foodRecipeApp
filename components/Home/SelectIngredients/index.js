import React, {Component} from 'react';
import {View} from 'react-native';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';

export const items = [
  // this is the parent or 'item'
  {
    name: 'Meyveler',
    id: 0,
    // these are the children or 'sub items'
    children: [
      {
        name: 'Apple',
        id: 10,
      },
      {
        name: 'Strawberry',
        id: 17,
      },
      {
        name: 'Pineapple',
        id: 13,
      },
      {
        name: 'Banana',
        id: 14,
      },
      {
        name: 'Watermelon',
        id: 15,
      },
      {
        name: 'Kiwi fruit',
        id: 16,
      },
    ],
  },
];

export default class SelectIngredients extends Component {
  constructor() {
    super();
    this.state = {
      selectedItems: [],
    };
  }
  onSelectedItemsChange = selectedItems => {
    this.setState({selectedItems});
  };

  render() {
    return (
      <View style={{backgroundColor: 'white'}}>
        <SectionedMultiSelect
          items={items}
          uniqueKey="id"
          subKey="children"
          selectText="Evinizdeki malzemeleri seçiniz..."
          showDropDowns={true}
          readOnlyHeadings={true}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={this.state.selectedItems}
          confirmText="Seç"
          searchPlaceholderText="Malzeme arayın"
          selectedText=" adet Seçildi"
        />
      </View>
    );
  }
}
