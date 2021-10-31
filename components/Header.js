import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native'


const Header = (Props) =>{
  return(
    <View style={styles.header}>
      <Text style={styles.text}>{Props.title}</Text>
      {/* <Image source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}} style={styles.img}/> */}
    </View>
  );
}

Header.defaultProps = {
    title: 'ShoppingList',
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding:15,
    backgroundColor: 'darkslateblue'
  },
  text: {
      color: '#fff',
      fontSize: 20,
      textAlign: 'center'
  }
});


export default Header;