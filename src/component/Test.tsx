import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Test = () => {
return (<View style = {page.code}><Text style = {page.text}>What will you be doing today?</Text></View>
);
};

export default Test; 

const page = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      alignItems: 'center',
    },
    text: {
      color: '#000',
      fontSize: 26,
      fontWeight: 'bold',
    },
    code: {
      marginTop: 12,
      padding: 12,
      borderRadius: 8,
      color: '#666',
      backgroundColor: 'white',
    },
  }
);

