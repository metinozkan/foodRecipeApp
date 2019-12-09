import React, {Component} from 'react';

import {
  Container,
  Header,
  Content,
  Accordion,
  Icon,
  View,
  Text,
  Badge,
} from 'native-base';
const Dairy = () => {
  return <Text>DAiry</Text>;
};
const Vegetables = () => {
  return <Text>Vegatables</Text>;
};
const dataArray = [
  {title: 'Kahvaltılık neyin var?', content: <Text>SSS</Text>},
  {title: 'Atıştırmalık neyin var?', content: 'Lorem ipsum dolor sit amet'},
  {title: 'Yemeklik neyin var?', content: 'Lorem ipsum dolor sit amet'},
  {title: 'İçecek neyin var?', content: 'Lorem ipsum dolor sit amet'},
];
const ingredients = [
  <Badge danger>
    <Text>süt</Text>
  </Badge>,
  <Badge success>
    <Text style={{color: 'white'}}>1866</Text>
  </Badge>,
];
export default class AccordionExample extends Component {
  render() {
    return (
      <>
        <Accordion
          dataArray={dataArray}
          expanded={0}
          icon={<Icon name="arrow-down"></Icon>}
          expandedIcon={<Icon name="arrow-up"></Icon>}
        />
      </>
    );
  }
}
