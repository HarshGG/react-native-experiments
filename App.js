import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, FlatList, Alert} from 'react-native'
import Header from './components/Header'
import ListItem from './components/ListItem'
import AddItem from './components/AddItem'

const App = () =>{

  const [items, setItems] = useState([
    {id: 1, text: 'Milk'},
    {id: 2, text: 'Egg'},
    {id: 3, text: 'Bred'},
    {id: 4, text: 'Ketchup'},
  ]);

  const deleteItem = (id) => {
      setItems(prevItems => {
        return prevItems.filter(item => item.id!=id)
      })
  }
  const addItem = (text) => {
    if(!text){
      console.log('bruh')
      Alert.alert('Error', 'Please add Item bruh', [{text: 'Ogay'}])
      console.log('bruh2')
    }
    else{
      setItems(prevItems => {
        return [{id: 6, text},...prevItems]
      })
    }
  }

  return(
    <View style={styles.container}>
      <Header title='ShoppingList'/>
      {<AddItem addItem={addItem}/>}
      <FlatList data={items} renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem}/>}/>
      {/* <Image source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}} style={styles.img}/> */}
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     color: 'darkslateblue',
//     fontSize: 30,
//   },
//   img: {
//     width:100,
//     height: 100,
//     borderRadius: 100/2
//   }
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;