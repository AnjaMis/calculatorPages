import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from 'react-native'

export default function History({ route }) {
  const navigationOptions = {
    title: 'History',
  }
  const { history } = route.params

  return (
    <View style={styles.historyContainer}>
      <Text style={{ fontSize: 18 }}>History</Text>
      <FlatList
        data={history}
        renderItem={({ item }) => (
          <Text style={{ fontSize: 18 }}>{item.key}</Text>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    width: 150,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    padding: 20,
  },
  historyContainer: {
    flex: 4,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 30,
  },
})
