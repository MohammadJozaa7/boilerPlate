import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, CardSection, Playquiz } from '../../../../common';
import { Image } from 'react-native';
import ReduceSyntax from './reduceSyntax';

export default class ClosureExample extends Component {
  render() {
    const { boldHeader, text, func, balance, closure, amount, withdraw, iv } = Styles;
    return (
      <CardSection>
        <Text style={text}>
          <Text style={boldHeader}>
            Example:{'\n'}
          </Text>
          <Text style={func}>
            function closure(
                <Text style={balance}>
              initial
                </Text>
            ){'{'}{'\n'}
            {' '}{' '}var
              <Text style={balance}>
              {' '}balance
              </Text>
            {' '}=
              <Text style={balance}>
              {' '}initial
              </Text>
            ;{'\n'}
            < Text style={closure}>
              {' '}{' '}function
                <Text style={withdraw}>
                {' '}withdraw
              </Text>
              (
              <Text style={amount}>
                amount
              </Text>
              ){'{'}{'\n'}
              {' '}{' '}{' '}{' '}if(
                  <Text style={balance}>
                balance
              </Text>
              {' '}-
              <Text style={amount}>
                {' '}amount
              </Text>
              {' '}>=
                <Text style={text}>
                {' '}0
                </Text>
              ){'{'}{'\n'}
              <Text style={balance}>
                {' '}{' '}{' '}{' '}{' '}{' '}balance
              </Text>
              {' '}=
              <Text style={balance}>
                {' '}balance
              </Text>
              {' '}-
              <Text style={amount}>
                {' '}amount
              </Text>
              ;{'\n'}
              {' '}{' '}{' '}{' '}{' '}{' '}return ‘
                <Text style={text}>
                Success to withdraw:{' '}
                </Text>
              ‘ +
                <Text style={amount}>
                {' '}amount
                </Text>
              ;{'\n'}
              {' '}{' '}{' '}{' '}{'}'}{'\n'}
              {' '}{' '}{' '}{' '}return ‘
                <Text style={text}>
                Failed to withdraw:{' '}
                </Text>
              ‘ +
                <Text style={amount}>
                {' '}amount
              </Text>
              ;{'\n'}
              {' '}{' '}{'}'}{'\n'}
            </Text>
            {' '}{' '}return
              <Text style={withdraw}>
              {' '}withdraw
              </Text>
            ;{'\n'}{'}'}
          </Text>
        </Text>

      </CardSection >
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
    fontWeight: 'bold',
    color: 'black'
  },
  func: {
    color: 'green',
  },
  balance: {
    color: 'blue',
  },
  closure: {
    color: 'red',
  },
  amount: {
    color: '#9932CC',
  },
  withdraw: {
    color: '#FF8C00',
  },
  iv: {
    color: '#FF00FF',
  },
});