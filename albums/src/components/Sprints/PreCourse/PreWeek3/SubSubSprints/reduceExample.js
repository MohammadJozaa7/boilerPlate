import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, CardSection, Playquiz } from '../../../../common';
import { Image } from 'react-native';
import ReduceSyntax from './reduceSyntax';

export default class ReduceExample extends Component {
  render() {
    const { boldHeader, text, array, reduce, cb, acc, elem, i, iv } = Styles
    return (
      <CardSection>
        <Text style={boldHeader}>
          Example:{' '}{'\n'}
          <Text style={array}>
            [1,5,6]
            </Text>
          .
            <Text style={reduce}>
            reduce
            </Text>
          ({'\n'}
          <Text style={cb}>
            {' '}{' '}function
            </Text>
          (
            <Text style={acc}>
            acc
            </Text>
          ,
            <Text style={elem}>
            elem
            </Text>
          ,
            <Text style={i}>
            i
            </Text>
          ){'{'}{'\n'}
          <Text style={array}>
            {' '}{' '}{' '}{' '}return{' '}
          </Text>
          <Text style={cb}>
            acc+elem{'\n'}
          </Text>
          {' '}{' '}},{'\n'}
          <Text style={iv}>
            0
            </Text>
          )
        </Text>
      </CardSection>
    );
  }
}

const Styles = StyleSheet.create({
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
