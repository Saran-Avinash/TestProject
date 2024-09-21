
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  Button,
  TouchableOpacity,
  Image,
  Pressable
} from 'react-native';


function Login({navigation}){

    
  const styles = StyleSheet.create({
    imageContainer : {
     flex: 1,
    },

    image: {
        width: "100%",
        height: "100%",
    },
    text: {
     fontSize: 20,
     color: "black",
    },
    container: {
     flex: 1,
     backgroundColor: "white",
    },
 
    formContainer: {
     flex: 2.5,
     alignItems: "center",
    },
 
    loginLable: {
     fontSize: 30,
     fontWeight: "bold",
     color: "black",
     marginBottom: 50,
    },
 
    h3 : {
     fontSize: 20,
     fontWeight : "bold",
     marginTop: 10,
     color:"black",
     
    },
    
    button: {
      padding: 10,
      borderWidth: 1,
      width: 100,
      alignItems: "center",
      backgroundColor: "black",
      borderRadius: 10,
    },
    
 
 
    lableContainer: {
    
     width: "80%",
     marginBottom: 30,
     backgroundColor: "white",

     borderRadius: 8,
     paddingLeft: 20,
     paddingRight: 20,
     shadowColor: "black",
     elevation: 10,
     
    },
 
    input: {

      color:"black",
      fontWeight: "normal",
     fontSize: 15,
    },

 
   });
   
 
   return (
     <SafeAreaView style={styles.container}>
       <View style={styles.imageContainer}> 
        <Image style={styles.image} source={require('../assets/images/loginimage.png')}/>
       </View>
       <View style={styles.formContainer}>
         <Text style={styles.loginLable}>Login</Text>
         
         <View style={styles.lableContainer}>
             <Text style={styles.h3}>Enter Name</Text>
             <TextInput style={styles.input} placeholder='Luffy' placeholderTextColor={"grey"}/>
         </View>
         
         <View style={styles.lableContainer}>
             <Text style={styles.h3}>Enter Password</Text>
             <TextInput style={styles.input} secureTextEntry={true}
 placeholder='Enter Password' placeholderTextColor={"grey"}/>
             
        </View>

       <Pressable style={styles.button}>
        <Text style={{color : "white"}}>Log In</Text>
       </Pressable>
        
        <Text style={{marginTop: 60, color:"black"}} >New User?</Text>
        
             <TouchableOpacity
                 
                 onPress={() => {
                    navigation.navigate('SignIn');
                }}>
                <Text style={{color:"black"}}>Click to Sign in </Text>    
            </TouchableOpacity>
       </View>
       
       
            
     </SafeAreaView>
   );
}
export default Login;