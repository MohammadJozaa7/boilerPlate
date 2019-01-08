import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, CardSection, Playquiz } from '../../../../common';
import { Image } from 'react-native';
import ReduceSyntax from '../SubSubSprints/reduceSyntax';
import ReduceSyntaxExplanation from '../SubSubSprints/reduceSyntaxExplanation';
import ReduceExample from '../SubSubSprints/reduceExample';

export default class AbstractClosureDM extends Component {
  render() {
    const topic = 'Clousers + Adding Methods';
    const introduction = '';
    return (
      <Card>
        <CardSection>
          <View style={Styles.headerConetentStyle}>
            <Text style={Styles.headerTextStyle}>
              {topic}
            </Text>
          </View>
        </CardSection>
        <CardSection style={{ flexDirection: 'row' }}>
          <Image
            style={{ height: 100, width: 350 }}
            source={require('../assets/reduce.png')} />
        </CardSection>

        <CardSection>
          <Text style={Styles.text}>
            {introduction}
          </Text>
        </CardSection>

        <ReduceSyntax />

        <ReduceSyntaxExplanation />

        <ReduceExample />

        <CardSection  >
          <Text style={Styles.boldText}>
            Let's see what happened step by step:
          </Text>
        </CardSection>

        <CardSection >
          <Image
            style={{ width: 340, height: 125 }}
            source={require('../assets/reduceWithIV.png')} />
        </CardSection>

        <CardSection  >
          <Text style={Styles.boldText}>

          </Text>
        </CardSection>

        <CardSection >
          <Image
            style={{ width: 340, height: 99 }}
            source={require('../assets/reduceWithoutIV.png')} />
        </CardSection>

        <CardSection>
          <Button onPress = {()=>this.props.navigation.navigate('OOP')}>
            Next
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress = {()=>this.props.navigation.navigate('Reduce')}>
            Previous
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress = {()=>this.props.navigation.navigate('PCList')}>
            Home
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const Styles = StyleSheet.create({
  headerConetentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerTextStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  thumbnailStyle: {
    height: 46,
    width: 46
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20
  },
  boldText: {
    fontWeight: 'bold',
    color: 'black'
  },
  boldHeader: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 17,
  },
  text: {
    color: 'black'
  },
  array: {
    color: 'red',
  },
  reduce: {
    color: 'blue',
  },
  cb: {
    color: 'green',
  },
  acc: {
    color: '#9932CC',
  },
  elem: {
    color: '#FF8C00',
  },
  i: {
    color: 'red',
  },
  iv: {
    color: '#FF00FF',
  },
});
