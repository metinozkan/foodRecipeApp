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
    return (
      <Content>
        <Card style={{flex: 0}}>
          <CardItem>
            <Left style={{height: 150}}>
              <Thumbnail
                style={{height: 150, width: 150}}
                source={{
                  uri:
                    'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                }}
              />
              <Body style={{height: 100}}>
                <Text style={{fontWeight: '200'}}>Tavuk Tantuni</Text>

                <Text>Malzemeler:</Text>
                <Text note>Tavuk,su,domates,biber</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Body style={{height: 220, width: 200, flex: 1}}>
              {/* <Image
                  source={{uri: 'Image URL'}}
                  style={{height: 200, width: 200, flex: 1}}
                /> */}
              <Text>
                Tavukları haşlayın ve haşlandıktan sonra küçük küçük doğrayın.
                Tantuniyi yapacağınız tavayı iyice ısıtın. Yağ ile birlikte tüm
                baharatları tavaya atın ve baharatların kokusu çıktıktan sonra
                tavukları ekleyin. Tavukların dışı kızarana kadar iyice kavurun.
                Tavuğu ocaktan almaya yakınken domates ve soğanları tavaya atın
                ve çevirerek pişirin. Soğan ve domatesler hafif diri kalması
                için çok pişirmiyoruz. Son olarak maydanozu da ekledikten sonra
                karıştırın ve ocaktan alın. sandviç ekmeğini veya lavaşı ısıtın,
                tavuk tantuniyi yayın ve sıcak servis edin.
              </Text>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Text style={{color: '#87838B'}}>45 dk-4 kişilik</Text>
            </Left>
          </CardItem>
        </Card>
      </Content>
    );
  }
}
