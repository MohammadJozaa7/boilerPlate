import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, CardSection, Playquiz } from '../../../../common';
import ReduceSyntax from './reduceSyntax';

export default class AddingMethodsExample extends Component {
  render() {
    const { boldHeader, text, bold, func, balance, variable, amount, object, key } = Styles;
    return (
      <CardSection>
        <Text style={text}>
          Now we will improve the function that we takes before.{'\n'}
          We said that we have a problem, so what is this problem?{'\n'}
          The problem is each time we make a new variable from the function
          it will take another copy from it and this problem will{' '}
          <Text style={bold}>
            use a lot of space in a big scale
          </Text>
          , so lets think in a way to decrease this space.{'\n'}

          1- Put the functions outside to have it one time no matter how much we make copies from the main function.{'\n'}
          2- Reach this functions by pass thier name inside the key in the object that we returnd.{'\n'}
          <Text style={bold}>
            <Text style={variable}>
              But we have a problem, can you guess what is it?{'\n'}
            </Text>
            It is about how we can pass the value from this object to the functions are outside.{'\n'}
          </Text>
          So to solve this problem we will use the keyword{' '}
          <Text style={bold}>
            “this”
          </Text>
          ,what is the keyword{' '}
          <Text style={bold}>
            “this”{' '}
          </Text>
          ?{'\n'}
          <Text style={[variable, bold]}>
            [90% of the time] It represents the object in the left of the dot (the one who called this function).{'\n'}{'\n'}
          </Text>
          var withdraw1 = function (amount) {'{'}
          if (this.balance - amount >= 0) {'{'}
          this.balance = this.balance - amount;
          return 'Withdraw: ' + amount + " Balance: " + this.balance;
          {'\n'}
          <Text style={boldHeader}>
            Example:{'\n'}
          </Text>
          <Text style={func}>
            function objectOriented(
            <Text style={balance}>
              initial
            </Text>
            ){'{'}{'\n'}
            {' '}{' '}var
            <Text style={object}>
              {' '}object{' '}
            </Text>
            =
            <Text style={object}>
              {' '}{'{'}{'\n'}
              {/* Balance key */}
              <Text style={key}>
                {' '}{' '}{' '}{' '}balance{' '}
              </Text>
              :
              <Text style={balance}>
                {' '}initial
              </Text>
              ,{'\n'}

              {/* Withdraw key */}
              <Text style={key}>
                {' '}{' '}{' '}{' '}withdraw{' '}
              </Text>
              :
              <Text style={variable}>
                {' '}withdrawFunc
              </Text>
              ,{'\n'}

              {/* Deposit key */}
              <Text style={key}>
                {' '}{' '}{' '}{' '}deposit{' '}
              </Text>
              :
              <Text style={variable}>
                {' '}depositFunc
              </Text>
              {'\n'}{' '}{' '}{'}'}{'\n'}
            </Text>
            {' '}{' '}return
            <Text style={object}>
              {' '}object
            </Text>
            ;{'\n'}{'}'}{'\n'}
          </Text>
          {/* Global variables */}
          var
          <Text style={variable}>
            {' '}withdrawFunc{' '}
          </Text>
          =
          <Text style={variable}>
            {' '}function(
            <Text style={amount}>
              amount
            </Text>
            ){'{'}{'\n'}
            {' '}{' '}if(
            <Text style={object}>
              this
            </Text>
            .
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
            <Text style={object}>
              {' '}{' '}{' '}{' '}this
            </Text>
            .
            <Text style={balance}>
              balance
            </Text>
            {' '}={' '}
            <Text style={object}>
              this
            </Text>
            .
            <Text style={balance}>
              balance
            </Text>
            {' '}-
            <Text style={amount}>
              {' '}amount
            </Text>
            ;{'\n'}
            {' '}{' '}{' '}{' '}return ‘
              <Text style={text}>
              Success to withdraw:{' '}
            </Text>
            ‘ +
              <Text style={amount}>
              {' '}amount
                  </Text>
            ;{'\n'}
            {' '}{' '}{'}'}{'\n'}
            {' '}{' '}return ‘
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
            {'}'}
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
    color: 'black'
  },
  bold: {
    fontWeight: 'bold'
  },
  func: {
    color: 'green',
  },
  balance: {
    color: 'blue',
  },
  variable: {
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