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

import SectionedMultiSelect from 'react-native-sectioned-multi-select';


//import SelectMeal from '../SelectMeal';
import SelectIngredients,{items} from '../SelectIngredients';
export default class WelcomePage extends Component {

  constructor() {
    super();
    this.state = {
      selectedItems: [],
      selectedMeal: "",
      isLoading:true,
      allIngredients:[''],
      foodRecipes:[''],

    };
  }
  onSelectedItemsChange = selectedItems => {
    this.setState({selectedItems});
   // console.log(this.state.selectedItems,"sadasdasd");

  };
  onValueChangeMeal(value) {
    this.setState({
      selectedMeal: value,
    });
  }
  getFoodRecipe=(idArray)=>{
    


    return fetch('http://51.136.56.78:3000/foods/calculate', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ingredient: idArray,
      }),
    })
    .then((response)=>response.json()).then((responseJson)=>{
    //  console.log(responseJson)
    this.setState({
      foodRecipes:responseJson
    })
    //,console.log(this.state.foodRecipes)
    })
  }

  componentDidMount=()=>{
    return fetch('http://51.136.56.78:3000/ingredients/all')
    .then((response) => response.json())
    .then((responseJson) => {

      this.setState({
        isLoading: false,
        allIngredients: responseJson.result,
      }, function(){
      //  console.log(responseJson.result.filter(x=>x.type=="sebze" ? x:null))
      });

    })
    .catch((error) =>{
      console.error(error);
    });
  }
  render() {
    return (
      <ImageBackground
        source={require('../../bg.jpg')}
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
      
      <View>
      <Form style={{marginTop: 5, backgroundColor: '#fff'}}>
        <Item picker>
          <Picker
            mode="dropdown"
            iosIcon={<Icon name="arrow-down" />}
            style={{width: undefined}}
            placeholder="Select your SIM"
            placeholderStyle={{color: '#bfc6ea'}}
            placeholderIconColor="#007aff"
            selectedValue={this.state.selectedMeal}
            onValueChange={this.onValueChangeMeal.bind(this)}>
            <Picker.Item enable label="Lütfen öğün seçiniz" value="key0" />
            <Picker.Item label="Kahvaltı" value="key0" />
            <Picker.Item label="Öğle Yemeği" value="key1" />
            <Picker.Item label="Akşam Yemeği" value="key2" />
          </Picker>
        </Item>
      </Form>
      </View>
        <View>
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
          onConfirm={()=>{
          //  console.log("leeen confirm")
          this.getFoodRecipe(this.state.selectedItems);
          }}
        />
      </View>
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
              this.props.navigation.navigate('FoodList',{
                foodRecipes:[
                  {
                      "id": 2,
                      "name": "Domates Soslu Tortellini",
                      "type": 2,
                      "recipe": "Unu bir derin kabın içine alın. Ortasını havuz şeklinde açın. Yumurtaları ve eritilmiş tereyağı ilave edin.\n\nHamuru güzelce yoğurun. Ardından streç filmle sararak 30 dakika kadar buzdolabında dinlendirin.\n\nİç harcı için:\nDerin bir tencerenin içerisine tereyağını alın. Kıymayı ilave ederek güzelce kavurun. Üzerine tuz ilave edin. Karıştırıp ocaktan alın ve oda sıcaklığında soğumaya bırakın.\n\nDomates sosu için:\nBir sos tenceresinin içerisine tereyağını alın. Sarımsağı rendeleyerek içerisine ilave edin ve hafifçe soteleyin.\n\nArdından domatesleri ekleyin ve kıvam alana kadar yaklaşık 5-12 dakika kadar karıştırarak pişirin.\n\nKıvam aldığında ocaktan alın, tuz ve baharatlarını ilave ederek dinlenmeye bırakın.\n\nBirleştirme aşaması:\nHazırladığınız makarna hamurundan ceviz büyüklüğünde bezeler elde edin.\n\nHafif unlanmış tezgahın üzerinde bezeleri hafifçe açın.\n\nOrtasına harçtan ilave edin. Üzerini de yine aynı şekilde açılmış hamurla kapatın.\n\nYarım şeklinde kapatın ve uçlarından birleştirin. Tüm hamura ve harca bu işlemi uygulayın.\n\nArdından bol su dolu, hafif yağ damlatılmış ve tuz eklenmiş bir tencerenin içerisine hazırladığınız tortellini'leri ekleyin. Damak zevkinize göre al dante ya da tam pişmiş şekilde pişirin.\n\nÇıkarıp süzdürerek bir tabağın içine aktarın. Üzerine domates sosu gezdirerek ve peynir ekleyerek servis edin.",
                      "photo": "https://st.depositphotos.com/3159685/4268/i/950/depositphotos_42682481-stock-photo-tortellini-with-tomato-sauce.jpg",
                      "calorie": 322,
                      "video": "https://www.youtube.com/watch?v=Q_B4hTaPZIU",
                      "Ingredient": "6",
                      "ingredients":"domates,soğan ",
                      "time":"5dk",
                      "personCount":"4"
                  },
                  {
                    "id": 3,
                    "name": "Salatalık",
                    "type": 2,
                    "recipe": "Unu bir derin kabın içine alın. Ortasını havuz şeklinde açın. Yumurtaları ve eritilmiş tereyağı ilave edin.\n\nHamuru güzelce yoğurun. Ardından streç filmle sararak 30 dakika kadar buzdolabında dinlendirin.\n\nİç harcı için:\nDerin bir tencerenin içerisine tereyağını alın. Kıymayı ilave ederek güzelce kavurun. Üzerine tuz ilave edin. Karıştırıp ocaktan alın ve oda sıcaklığında soğumaya bırakın.\n\nDomates sosu için:\nBir sos tenceresinin içerisine tereyağını alın. Sarımsağı rendeleyerek içerisine ilave edin ve hafifçe soteleyin.\n\nArdından domatesleri ekleyin ve kıvam alana kadar yaklaşık 5-12 dakika kadar karıştırarak pişirin.\n\nKıvam aldığında ocaktan alın, tuz ve baharatlarını ilave ederek dinlenmeye bırakın.\n\nBirleştirme aşaması:\nHazırladığınız makarna hamurundan ceviz büyüklüğünde bezeler elde edin.\n\nHafif unlanmış tezgahın üzerinde bezeleri hafifçe açın.\n\nOrtasına harçtan ilave edin. Üzerini de yine aynı şekilde açılmış hamurla kapatın.\n\nYarım şeklinde kapatın ve uçlarından birleştirin. Tüm hamura ve harca bu işlemi uygulayın.\n\nArdından bol su dolu, hafif yağ damlatılmış ve tuz eklenmiş bir tencerenin içerisine hazırladığınız tortellini'leri ekleyin. Damak zevkinize göre al dante ya da tam pişmiş şekilde pişirin.\n\nÇıkarıp süzdürerek bir tabağın içine aktarın. Üzerine domates sosu gezdirerek ve peynir ekleyerek servis edin.",
                    "photo": "https://st.depositphotos.com/3159685/4268/i/950/depositphotos_42682481-stock-photo-tortellini-with-tomato-sauce.jpg",
                    "calorie": 322,
                    "video": "https://www.youtube.com/watch?v=Q_B4hTaPZIU",
                    "Ingredient": "6",
                    "ingredients":"domates,soğan,biber,salatalık,tuz ",
                    "time":"5dk",
                    "personCount":"4"
                }
                 ], });
            //this.getFoodRecipe(this.state.selectedItems);
            }}
            style={{marginBottom: 5}}>
            <Text>Yemek Bul</Text>
          </Button>
        </View>
      </ImageBackground>
    );
  }
}
