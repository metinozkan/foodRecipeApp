import React, {Component} from 'react';
import {View} from 'react-native';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';

export const items = [
  // this is the parent or 'item'
  {
    name: 'Sebze',
    id: 111,
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
      {
        name:"Maydonoz",
        id:14
      },
      {
        name:"Asma yaprağı",
        id:15
      },
      {
        name:"Sivri biber",
        id:21
      },
      {name:"Limon",
      id:30
    },
    {
      name:"Nane",
      id:32
    },
     
    ],
  },
  {name:'Meyve',
   id:222,
  children:[
   {
    name:"Elma",
    id:19
  },
  {
    name:"Çilek",
    id:20
  },
  

]},
    {name:'Baharat',
      id:333,
    children:[
      {
        name:"Tuz",
        id:9
      },
      {
        name:"Karabiber",
        id:12
      },
      {
        name:"Pul biber",
        id:13
      },

    ]},
    {name:'Et ve Süt ürünleri',
      id:444,
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
     },
    
     {
       name:"Kıyma",
       id:11
     },
     {name:"Data eti",
    
     id:33}
   
    ]},
    
    {name:'Baklagil',
    id:555,
  children:[
    {
      name:"Pirinç",
      id:17
    },
    {
      name:"Bulgur",
      id:18
    },
    {
      name:"Nohut",
      id:22
    },
    {
      name:"Arpa şehriye",
      id:29
    },

  ]},

    {name:'Diğer',
      id:666,
    children:[
      {
        name:"Şeker",
        id:5,
      },
      {
        name:"Un",
        id:4
      }
      ,{
        name:"Salça",
        id:2
      },
      {
        name:"Ayçiçek yağı",
        id:23
      },
      {
        name:"Sarımsak",
        id:24
      },
      {
        name:"İrmik",
        id:25
      },
      {
        name:"Vanilya",
        id:27
      },
      {
      name:"Krem şanti",
      id:28
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
