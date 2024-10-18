import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import EventEmitter from 'react-native/Libraries/vendor/emitter/EventEmitter';

const ONEFILE = () => {
  const [listItem, setlistItem] = useState([]);
  const [item, setItem] = useState('');
  console.log(item)
  console.log(listItem)
    return (
    <View style = {Style.overallContainer}>
    {/* <View> */}
        <Text style = {Style.Title}> What will you be doing today?</Text>
        <View style = {Style.Container}>
            <TouchableOpacity style = {Style.squarebox}/>
        </View> 
        <View style = {Style.inputContainer}>
        <TextInput placeholder="Enter your activity" value={item} 
        onChangeText={text => setItem(text)} />
            <TouchableOpacity>
                <Text style = {Style.addButton} 
                onPress={() => {setlistItem([...listItem, item]) 
                setItem('')}}>
                    {'+'}</Text>
             </TouchableOpacity>
        </View>
    </View>
  )
}

export default ONEFILE


const Style = StyleSheet.create({
Title:{
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
},
overallContainer: {
    flex: 1,
   // flexDirection: 'column',
    //height: '100%',
},

Container:{
    backgroundColor: 'white',
    position: 'relative',
   // padding: 20,
    flex: 12,

 },

squarebox:{
    flexDirection: 'row',
    width: 20,
    height: 20,
    backgroundColor: 'white',
    borderColor: 'purple',
    borderWidth: 2 ,


},

// listText:{

// }

// checkmark:{

// }

inputContainer:{
//bottom: '10%',
position: 'relative',
//padding: 20,
//justifyContent: 'flex-end',
backgroundColor: 'gray',
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
flex: 1,
},

// inputBox:{

//}

addButton: {
    //textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green',
},
// Add button (+) 
})