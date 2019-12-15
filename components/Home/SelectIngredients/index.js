import React, {Component} from 'react';
import {View} from 'react-native';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';

export const items = [
  // this is the parent or 'item'
  {
    name: 'Sebze',
    id: 0,
    // these are the children or 'sub items'
    children: [
      {
        name: 'Soğan',
        id: 1,
      },
      {
        name: 'Domates',
        id: 6,
      },
      {
        name: 'Salatalık',
        id: 7,
      },
     
    ],
  },

    {name:'Baharat',
      id:2,
    children:[
      {
        name:"tuz",
        id:9
      },

    ]},
    {name:'Et ve Süt ürünleri',
      id:4,
      children:[
      {
       name:"Süt",
       id:3
      },
      {
      name:"Yumurta",
      id:8,
     },
     {
      name:"Tereyağı",
      id:10,
     }]},
    {name:'Diğer',
      id:3,
    children:[
      {
        name:"şeker",
        id:5,
      },
      {
        name:"un",
        id:4
      }
      ,{
        name:"salça",
        id:2
      }

    ]},
    
];
export const ingredientsItems=()=>{
  console.log("ingredietns dikkat");
  return fetch('http://51.136.56.78:3000/ingredients/all')
    .then((response) => response.json())
    .then((responseJson) => {

      this.setState({
        isLoading: false,
        allIngredients: responseJson.result,
      }, function(){
        console.log(responseJson.result.filter(x=>x.type=="sebze" ? x:null))
      });

    })
    .catch((error) =>{
      console.error(error);
    });
}
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
