import { View, Text ,TouchableOpacity,Image,StyleSheet} from 'react-native'
import React,{useState,useRef} from 'react'
import { Stack } from 'expo-router'
import "../global.css"


export default function _layout() {
 const[toggleOption,setToggleOption] = useState('All')
 // const optionRef = useRef('All')
  return (
    <Stack>
        <Stack.Screen name='index' options={{
          title:"",
          headerShadowVisible:false,
          headerStyle:{
           backgroundColor:"black"
          },       
          headerLeft:()=>(
        
            <View className='flex-row justify-center items-center gap-3'>
              <TouchableOpacity style={{marginRight:8}}>
                  <Image 
                  source={require('../assets/images/kendallprofile.jpeg')}
                  style={{width:30, height:30,margin:0}}
                  className='rounded-full'
                  />                 
              </TouchableOpacity>
              <TouchableOpacity style={toggleOption=='All'?styles.headerLeftToggle: styles.headerLeft} onPress={()=>setToggleOption('All')}>
                <Text className='text-white font-medium text-center px-3'
                 style={[{fontSize:12},toggleOption=='All'?{color:'black'}:{color:'white'}]}>All</Text>
              </TouchableOpacity>
              <TouchableOpacity style={toggleOption=='Music'?styles.headerLeftToggle:styles.headerLeft} onPress={()=>setToggleOption('Music')}>
                <Text className='text-white font-medium text-center px-3'
                 style={[{fontSize:12},toggleOption=='Music'?{color:'black'}:{color:'white'}]}>Music</Text>
              </TouchableOpacity>
              <TouchableOpacity style={toggleOption=='Podcasts'?styles.headerLeftToggle:styles.headerLeft} onPress={()=>setToggleOption('Podcasts')}>
                <Text className='text-white font-medium text-center px-3'
                style={[{fontSize:12},toggleOption=='Podcasts'?{color:'black'}:{color:'white'}]}>Podcasts</Text>
              </TouchableOpacity>

            </View>
          )
        }}/>
    </Stack>
   
  )
}
const styles = StyleSheet.create({
  headerLeft:{
    padding:8,
    backgroundColor:"gray",
    borderRadius:22
  
  },
  headerLeftToggle:{
    padding:8,
    backgroundColor:"green",
    borderRadius:22
  
  }
})