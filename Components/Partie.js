
import React from 'react'

import { StyleSheet, View, TextInput, Button, SafeAreaView,Text,Alert, } from 'react-native'

class Partie extends React.Component {
  render() {
    return (

        <View style={{ flex: 1,backgroundColor: 'yellow'}}>
        <View style={{ flex: 1,marginTop:0, backgroundColor:'red'}}><Text> Jeu de Carte</Text></View>
      <View style={styles.container}>

      <Text> Creer une Partie</Text>
       <TextInput style= {styles.textinput}placeholder='Nom de la partie'/>
       <Button title='Jouer' onPress={() => {}}/>

     </View>
     </View>
    )
}
}

const styles = {

  container: {

    flex:1,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor:'blue',
  borderRadius: 4,
  borderWidth: 0.5,
  borderColor: '#d6d7da'
},
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  }


}
export default Partie
