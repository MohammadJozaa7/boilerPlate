import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, CardSection, Playquiz } from '../../../../common';

export default class AddingMethodsExample extends Component {
  render() {
    const { boldHeader,boldHText, text, func, balance, closure, amount, object, iv } = Styles;
    return (
      <CardSection>
        <Text style={text}>
          <Text style={boldText}>
            Now what if we want to return many functions what we can return?{'\n'}
            We can return an object and each key inside it has a fucntion,
            so now lets improve the clouser and add methods to it.{'\n'}{'\n'}
          </Text>
          <Text style={boldHeader}>
            Example:{'\n'}
          </Text>
          <Text style={func}>
            function addingMethods(
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
            ;{'\n'}{' '}{' '}var
            <Text style={object}>
              {' '}object{' '}
            </Text>
            =
            <Text style={object}>
              {' '}{'{'}{'\n'}
              <Text style={key}>
                {' '}{' '}{' '}{' '}withdraw{' '}
              </Text>
              :
              <Text style={key}>
                {' '}function(
                <Text style={amount}>
                  amount
                </Text>
                ){'{'}{'\n'}
                {' '}{' '}{' '}{' '}{' '}{' '}if(
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
                  {' '}{' '}{' '}{' '}{' '}{' '}{' '}{' '}balance
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
                {' '}{' '}{' '}{' '}{' '}{' '}{' '}{' '}return ‘
                <Text style={text}>
                  Success to withdraw:{' '}
                </Text>
                ‘ +
                <Text style={amount}>
                  {' '}amount
                </Text>
                ;{'\n'}
                {' '}{' '}{' '}{' '}{' '}{' '}{'}'}{'\n'}
                {' '}{' '}{' '}{' '}{' '}{' '}return ‘
                <Text style={text}>
                  Failed to withdraw:{' '}
                </Text>
                ‘ +
                <Text style={amount}>
                  {' '}amount
              </Text>
                ;{'\n'}
              </Text>
              <Text style={key}>
                {' '}{' '}{' '}{' '}{'}'}
              </Text>
              ,{'\n'}

              {/* the second key deposit */}
              <Text style={key}>
                {' '}{' '}{' '}{' '}deposit{' '}
              </Text>
              :
              <Text style={key}>
                {' '}function(
                <Text style={amount}>
                  amount
                </Text>
                ){'{'}{'\n'}
                <Text style={balance}>
                  {' '}{' '}{' '}{' '}{' '}{' '}balance
                </Text>
                {' '}=
              <Text style={balance}>
                  {' '}balance
              </Text>
                {' '}+
              <Text style={amount}>
                  {' '}amount
              </Text>
                ;{'\n'}
                {' '}{' '}{' '}{' '}{' '}{' '}return ‘
                <Text style={text}>
                  Your balance after this deposit is:{' '}
                </Text>
                ‘ +
                <Text style={balance}>
                  {' '}balance
                </Text>
                ;{'\n'}
              </Text>
              <Text style={key}>
                {' '}{' '}{' '}{' '}{'}'}
              </Text>
              ,{'\n'}
              {/* the third key checkBalance */}
              <Text style={key}>
                {' '}{' '}{' '}{' '}checkBalance{' '}
              </Text>
              :
              <Text style={key}>
                {' '}function(){'{'}{'\n'}
                {' '}{' '}{' '}{' '}{' '}{' '}return ‘
                <Text style={text}>
                  Your balance is:{' '}
                </Text>
                ‘ +
                <Text style={balance}>
                  {' '}balance
                </Text>
                ;{'\n'}
              </Text>
              <Text style={key}>
                {' '}{' '}{' '}{' '}{'}'}{'\n'}
              </Text>
              {' '}{' '}{'}'}{'\n'}
            </Text>
            {' '}{' '}return
              <Text style={object}>
              {' '}object
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
  object: {
    color: '#FF00FF',
  },
  key: {
    color: '#FF8C00',
  },
});