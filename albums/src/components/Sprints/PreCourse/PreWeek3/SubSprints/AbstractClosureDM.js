import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, CardSection, Playquiz } from '../../../../common';
import { Image } from 'react-native';
import AddingMethodsExample from '../SubSubSprints/addingMethodsExample';
import AddingMethodsExampleExplanation from '../SubSubSprints/addingMethodsExampleExplanation';
import ClosureExample from '../SubSubSprints/closureExample';
import ClosureExampleExplanation from '../SubSubSprints/closureExampleExplanation';

export default class AbstractClosureDM extends Component {
  render() {
    const topic = 'Closures, Adding Methods';
    const introduction = 'A closure is the combination of a function and the lexical environment within which that function was declared.';
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
            style={{ height: 150, width: 300 }}
            source={require('../assets/closure.png')} />
        </CardSection>

        <CardSection>
          <Text style={Styles.text}>
            {introduction}
          </Text>
        </CardSection>

        <CardSection  >
          <Text style={Styles.boldText}>
            Let's take an example and break it down:
          </Text>
        </CardSection>

        <ClosureExample />

        <ClosureExampleExplanation />

        {/* Adding Methods */}
        <AddingMethodsExample />

        <AddingMethodsExampleExplanation />
        <CardSection>
          <Button onPress={() => this.props.navigation.navigate('Reduce')}>
            Previous
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={() => this.props.navigation.navigate('OOP')}>
            Next
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={() => this.props.navigation.navigate('PCList')}>
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
