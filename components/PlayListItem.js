import { View, Text,Image } from 'react-native'
import React from 'react'

export default function PlayListItem({item}) {
   // console.log('Playlist',item.item)
  return (
    <View className='flex-1  bg-neutral-900 my-1 mx-2 flex-row items-center gap-3 rounded-lg w-64'>
      <Image source={item.item.cover}
      style={{height:68,width:72,overflow:"hidden"}}/>
      <Text className='text-white font-bold' style={{fontSize:13}}>{item.item.title}</Text>
    </View>
  )
}