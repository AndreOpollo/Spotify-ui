import { View, Text,ScrollView ,Image} from 'react-native'
import React from 'react'

export default function Categories({title,data}) {
    //console.log('Data',data)
  return (
    <View className='my-4 ml-2'>
      <Text className='text-white font-bold' style={{fontSize:22}}>{title}</Text>
      <ScrollView horizontal>
      {
        data.map((item,index)=>{
            return(
                <View key={index} className='flex'>
                    <Image 
                    source={item.cover} style={{height:160,width:160}}
                    className='mr-4 mt-2'/>
                    <Text className='text-neutral-600 text-wrap w-48 mt-4 font-semibold tracking-wider'>{item.title}</Text>
                </View>
            )
        })
      }

      </ScrollView>
     
    </View>
  )
}