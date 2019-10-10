import React from 'react'
import {StyleSheet,Button,View,SafeAreaView,Text,Alert,TextInput
} from 'react-native';
import Constants from 'expo-constants';
import Partie from './Components/Partie'
import Search from './Components/Search'
import PickerExample from './Components/PickerExample.js'


// export default class App extends React.Component {
//   render() {
//     return (
//       <Partie/>
//     )
//   }
// }
function Separator() {
  return <View style={styles.separator} />;
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>
          Jeux de Cartes
        </Text>

      </View>
      <Separator />
      <View>
        <TextInput style= {styles.textinput}placeholder='Nom du joueur'/>

      </View>
      <Separator />
      <View>


      </View>
      <Separator />
      <View style={styles.partie}>
       <Text style={styles.title}>Créer une Partie</Text>
       <TextInput style= {styles.textinput}placeholder='Nom de partie'/>
       <Text style={styles.title}>
         Jeux de Cartes
       </Text>
       <PickerExample />

        <Button
          title="Lancer la partie"
          color="blue"
          onPress={() => Alert.alert('Vous allez lancer la partie')}
        />
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  partie: {
  marginTop: 10,

  borderWidth: 0.5,
  borderRadius : 5,
  },

  container: {
    flex: 1,
    marginTop: 200,
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  textinput: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
