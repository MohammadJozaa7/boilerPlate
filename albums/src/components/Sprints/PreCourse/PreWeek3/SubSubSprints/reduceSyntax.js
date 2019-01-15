import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, CardSection, Playquiz } from '../../../../common';
import { Image } from 'react-native';

export default class ReduceSyntax extends Component {
  render() {
    const { boldHeader, text, array, reduce, cb, acc, elem, i, iv } = Styles
    return (
      <CardSection>
        <Text style={boldHeader} >
          Syntax:{' '}
          <Text style={array}>
            array
        </Text>
          .
        <Text style={reduce}>
            reduce
        </Text>
          (
        <Text style={cb}>
            cb
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
          ),
        <Text style={iv}>
            iv
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
