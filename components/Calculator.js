import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput, //lecture 4, 4th minute
  FlatList,
} from 'react-native'

export default function Calculator({ navigation }) {
  const [result, setResult] = useState(0)
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [history, setHistory] = useState([])

  const addition = () => {
    const sum = parseFloat(num1) + parseFloat(num2)
    setResult(sum)
    setHistory([...history, { key: `${num1} + ${num2} = ${sum}` }])
    setNum1('')
    setNum2('')
  }

  const subtraction = () => {
    const sub = parseFloat(num1) - parseFloat(num2)
    setResult(sub)
    setHistory([...history, { key: `${num1} - ${num2} = ${sub}` }])
    setNum1('')
    setNum2('')
  }

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={{ fontSize: 18 }}>Result = {result}</Text>
        <TextInput
          style={{ width: 200, borderColor: 'gray', borderWidth: 1 }}
          value={String(num1)}
          onChangeText={(text) => setNum1(text)}
          keyboardType="numeric"
        />
        <TextInput
          style={{ width: 200, borderColor: 'gray', borderWidth: 1 }}
          value={String(num2)}
          onChangeText={(text) => setNum2(text)}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title=" + " onPress={addition} />

        <Button title=" - " onPress={subtraction} />
        <Button
          title="HISTORY"
          onPress={() =>
            navigation.navigate('History', {
              history: history,
            })
          }
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    marginTop: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 0,
  },
  buttonContainer: {
    flex: 9,
    width: 500,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 200,
    //marginTop: 90,
  },
})
