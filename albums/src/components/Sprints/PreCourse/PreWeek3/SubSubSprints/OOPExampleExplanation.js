import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, CardSection, Playquiz } from '../../../../common';

export default class AddingMethodsExampleExplanation extends Component {
  render() {
    const { boldHeader, text, bold, func, balance, closure, amount, object, key } = Styles;

    return (
      <CardSection>
        <Text style={text}>
          <Text style={boldHeader}>
            Explanation:{'\n'}
          </Text>
          So lets make some lines and explain it:{'\n'}var{' '}
          <Text style={object}>
            account3{' '}
          </Text>
          ={' '}
          <Text style={func}>
            addingMethods(
            <Text style={balance}>
              300
            </Text>
            ){'\n'}
          </Text>
          var{' '}
          <Text style={object}>
            account4{' '}
          </Text>
          ={' '}
          <Text style={func}>
            addingMethods(
            <Text style={balance}>
              400
            </Text>
            ){'\n'}
          </Text>
          These lines make a two copy from the function{' '}
          <Text style={func}>
            addingMethods{' '}
          </Text>
          but with initial value {' '}
          <Text style={balance}>
            300{' '}
          </Text>
          and{' '}
          <Text style={balance}>
            400{'\n'}{'\n'}
          </Text>
          Now if I call{' '}
          <Text style={object}>
            account3{' '}
          </Text>
          what I will get?{'\n'}
          <Text style={object}>
            an object{' '}
          </Text>
          has{' '}
          <Text style={key}>
            3 keys{' '}
          </Text>
          with{' '}
          <Text style={balance}>
            balance{' '}
          </Text>
          variable (global for thiss{' '}
          <Text style={object}>
            object{' '}
          </Text>
          and local for{' '}
          <Text style={func}>
            addingMethods
          </Text>
          ) and it value is{' '}
          <Text style={balance}>
            300{' '}
          </Text>
          not{' '}
          <Text style={balance}>
            400
          </Text>
          .{'\n'}{'\n'}
          {/* extra explanation */}
          So now we have{' '}
          <Text style={object}>
            an object{' '}
          </Text>
          has{' '}
          <Text style={key}>
            keys{' '}
          </Text>
          inside it{' '}
          <Text style={key}>
            functions
          </Text>
          , so to execute a function we need the name of this function and parentheses as we said above.{'\n'}{'\n'}
          <Text style={bold}>
            But remember, it is{' '}
            <Text style={object}>
              an object{' '}
            </Text>
            so the name of the{' '}
            <Text style={key}>
              function{' '}
            </Text>
            is the name of the{' '}
            <Text style={key}>
              key{' '}
            </Text>
            that is inside it.{'\n'}
          </Text>
          {'\n'}
          So to execute the{' '}
          <Text style={key}>
            function{' '}
          </Text>
          that inside{' '}
          <Text style={key}>
            withdraw key {' '}
          </Text>
          we will write:{'\n'}
          <Text style={object}>
            account3
          </Text>
          .
          <Text style={key}>
            withdraw(
            <Text style={amount}>
              95
            </Text>
            )
          </Text>
          ,{' '}now what will happened?{'\n'}
          This line will execute the{' '}
          <Text style={key}>
            function{' '}
          </Text>
          inside the key{' '}
          <Text style={key}>
            withdraw{' '}
          </Text>
          that is inside the{' '}
          <Text style={object}>
            object{' '}
          </Text>
          with the argument{' '}
          <Text style={amount}>
            95
          </Text>
          .{'\n'}{'\n'}
          What is the output and the value of the{' '}
          <Text style={balance}>
            balance
          </Text>
          ?{'\n'}
          {'"'}Success to withdraw{' '}
          <Text style={amount}>
            95
          </Text>
          {'"'}, and the balance will be{' '}
          <Text style={balance}>
            205
          </Text>
          {/* account4.withdraw(75) */}
          .{'\n'}{'\n'}What about if I execute{' '}
          <Text style={object}>
            account4
            </Text>
          .
          <Text style={key}>
            withdraw(
            <Text style={amount}>
              75
            </Text>
            )
          </Text>
          ?{'\n'}
          {'"'}Success to withdraw{' '}
          <Text style={balance}>
            75
          </Text>
          {'"'}, and the balance will be{' '}
          <Text style={balance}>
            325
          </Text>
          .{'\n'}{'\n'}
          {/* account3.checkBalance( ) */}
          What about if I execute{' '}
          <Text style={object}>
            account3
            </Text>
          .
          <Text style={key}>
            checkBalance( )
          </Text>
          ?{'\n'}
          {'"'}Your balance is: {' '}
          <Text style={balance}>
            205
          </Text>
          {'"'}.{'\n'}{'\n'}
          <Text style={bold}>
            So by this approach, I improve the closure to has multiple functions that I can execute it.{'\n'}{'\n'}
          </Text>
          <Text style={closure}>
            But we still have a small problem we will solve it in the next topic.
          </Text>
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
  bold: {
    fontWeight: 'bold',
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