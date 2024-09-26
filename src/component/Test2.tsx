import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {ToDoList} from './ToDoList';
export const Test2 = () => {
  return (
    <View style={[Style.container]}>
      {/* <Text/> */}
      <TextInput placeholder="Enter your activity" />
      <TouchableOpacity>
        <Text>{'+'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const Style = StyleSheet.create({
//   Style1: {
//     //position: 'absolute',
//     // top: 40,
//     // left: 40,
//     // width: 100,
//     height: '100%',
//     backgroundColor: 'white',
//     //flex: 1,
//     flexDirection: 'row',
//   },
//   Box1: {
//     //   position: 'absolute',
//     //top: 40,
//     //left: 20,
//     width: 20,
//     height: 20,
//     backgroundColor: 'white',
//     borderColor: 'purple',
//     borderWidth: 2,
//   },

//   squareBox: {
//     width: 20,
//     height: 20,
//     borderRadius: 4,
//     backgroundColor: 'green',
//     opacity: 0.2,
//     marginRight: 8,
//   },

   container: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 250, 
//     padding: 24,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 60,
    // height: '100%',
    left: 0,
    right: 0,


  },
//   title: {
//     // marginBottom: 16,
//     // paddingVertical: 8,
//     paddingHorizontal: 20,
//     borderWidth: 4,
//     borderColor: '#20232a',
//     borderRadius: 6,
//     backgroundColor: '#61dafb',
//     color: '#20232a',
//     textAlign: 'center',
//     fontSize: 30,
//     fontWeight: 'bold',
//     flexDirection: 'row',
//     columnGap: 16,
//   },
 });
