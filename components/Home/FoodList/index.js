import React, {Component} from 'react';
import {Image} from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  View
} from 'native-base';
const foodName = 'Tavuk Tantuni';
const malzemeler = [''];
const FoodCard =(props) => {
//  console.log(props.getParam('foodRecipes'));
//console.log(props.foodRecipes)
const foodRecipe=props.foodRecipes
  return (
    props.foodRecipes.map(x=>
      {
        return <>
    <Card>
      <CardItem>
        <Left>
        
         <Thumbnail
            source={{
              uri:x.photo
            }}
          />
          <Body>
            <Text>{x.name}</Text>
            <Text note>{x.ingredients}</Text>
            <Text note>{x.time} {x.personCount}kişilik</Text>
          </Body>

        
        </Left>
        <Right>
          <Button
            onPress={() => {
              props.navigate('FoodDetail',{
                foodRecipe:foodRecipe.filter(y=>y.id==x.id)
              });
            }}>
            <Text>Aç</Text>
          </Button>
        </Right>
      </CardItem>
    </Card>
    </>
  })
  );
};

export default class FoodList extends Component {
  render() {
  //console.log(this.props.navigation.getParam('foodRecipes'));
 // const foodRecipes=JSON.stringify(this.props.navigation.getParam('foodRecipes'));
 const foodRecipes=this.props.navigation.getParam('foodRecipes');
 
 //console.log(foodRecipes.map(x=>x.name))
 //console.log(foodRecipes)
    return (
      <>


      <FoodCard navigate={this.props.navigation.navigate} foodRecipes={foodRecipes} ></FoodCard> 
        </>

    );
  
  }
}
