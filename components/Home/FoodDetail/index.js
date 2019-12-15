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
} from 'native-base';
export default class FoodDetail extends Component {
  render() {

    const {navigation}=this.props;
    //console.log(navigation.getParam("foodRecipe"));
    const foodRecipe=navigation.getParam("foodRecipe");

    return (
      <Content>
        <Card style={{flex: 0}}>
        {foodRecipe.map(x=>{
         return <> 
         
         <CardItem>
         <Left style={{height: 150}}>
           <Thumbnail
             style={{height: 150, width: 150}}
             source={{
               uri: x.photo,
             }}
           />
           <Body style={{height: 100}}>
             <Text style={{fontWeight: '200'}}>{x.name}</Text>

             <Text>Malzemeler:</Text>
             <Text note>{x.ingredients}</Text>
           </Body>
         </Left>
       </CardItem>
       <CardItem>
         <Body style={{ width: 200, flex: 1}}>
           {/* <Image
               source={{uri: 'Image URL'}}
               style={{height: 200, width: 200, flex: 1}}
             /> */}
           <Text>
            {x.recipe}
           </Text>
         </Body>
       </CardItem>
       <CardItem>
         <Left>
           <Text style={{color: '#87838B'}}>{x.time} {x.personCount}kişilik</Text>
         </Left>
       </CardItem></>
          })}

        </Card>
      </Content>
    );
  }
}
