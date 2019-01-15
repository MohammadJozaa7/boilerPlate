import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, CardSection, Playquiz } from '../../../../common';
import { Image } from 'react-native';

export default class ReduceSyntaxExplanation extends Component {
  render() {
    const { boldText, boldHeader, text, array, reduce, cb, acc, elem, i, iv } = Styles
    return (
      <CardSection>
        <Text style={text}>
          <Text style={array}>
            <Text style={[boldText, array]}>
              array:{' '}
            </Text>
            the array you want to execute  the reduce function on it.{'\n'}{'\n'}
          </Text>
          <Text style={reduce}>
            <Text style={[boldText, reduce]}>
              reduce:{' '}
            </Text>
            reserved key work to execute  the reduce function.{'\n'}{'\n'}
          </Text>
          <Text style={cb}>
            <Text style={[boldText, cb]}>
              cb (callback):{' '}
            </Text>
            function to execute it on each element in the array,{' '}
            <Text style={[boldText, array]}>
              don’t forget to use return inside it.{'\n'}{'\n'}
            </Text>
          </Text>
          <Text style={acc}>
            <Text style={[boldText, acc]}>
              acc (accumulator):{' '}
            </Text>
            the accumulator accumulates the callback's return values; it is the accumulated value previously returned in the last invocation of the callback, or initialValue, if supplied.{'\n'}{'\n'}
          </Text>
          <Text style={elem}>
            <Text style={[boldText, elem]}>
              elem (currentValue):{' '}
            </Text>
            the current element being processed in the array.{'\n'}{'\n'}
          </Text>
          <Text style={i}>
            <Text style={[boldText, i]}>
              i (currentIndexOptional):{' '}
            </Text>
            the index of the current element being processed in the array. Starts at index 0, if an initialValue is provided, and at index 1 otherwise.{'\n'}{'\n'}
          </Text>
          <Text style={iv}>
            <Text style={[boldText, iv]}>
              iv (initialValueOptional):{' '}
            </Text>
            value to use as the first argument to the first call of the callback. If no initial value is supplied, the first element in the array will be used. Calling reduce() on an empty array without an initial value is an error.
            </Text>
        </Text>
      </CardSection>
    );
  }
}

const Styles = StyleSheet.create({
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