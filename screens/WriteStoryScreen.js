import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , TextInput ,TouchableOpacity} from 'react-native';
import { Header} from 'react-native-elements';

export default class WriteStoryScreen extends React.Component {
  render (){
  return (
    <View style={styles.container}>
        <Header backgroundColor = "black"
  centerComponent={{ text: 'Story Hub', style: { color: 'white' } }} />
        <View>
        <TextInput placeholder="Story Title" style={styles.storyTitleInputBox}/>
        <TextInput placeholder="Author" style={styles.authorInputBox}/>
        <TextInput placeholder="Write Your Story" style={styles.storyInputBox} multiline= {true}/>
        </View>
        <View>
            <TouchableOpacity style={styles.submitButton}>
                <Text style={styles.submitButtonText}>
                    Submit
                </Text>
            </TouchableOpacity>
        </View>
    </View> 
  );}
} 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'pink',
      alignItems: 'center',
      justifyContent: 'center',
    },
    storyTitleInputBox: {
        borderWidth : 2,
        marginTop : 35
    },
    authorInputBox: {
        borderWidth : 2,
        marginTop:20
    },
    storyInputBox: {
        borderWidth : 2,
        width:300,
        height : 200,
        marginTop: 20
    },
    submitButton: {
        marginTop : 100,
        backgroundColor:"cyan",
        width:100,
        height:50
    },
    submitButtonText:{
        padding:10,
        textAlign:"center",
        fontSize : 20,
        fontWeight:"bold",
        color : "black"
      }
  });