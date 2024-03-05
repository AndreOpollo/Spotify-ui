import { View, Text ,FlatList} from 'react-native'
import React from 'react'
import PlayListItem from './PlayListItem'

export default function PlayLists({playlists}) {
  return (
    <View>
      <FlatList
      data={playlists}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      renderItem={item=><PlayListItem item={item}/>}
    horizontal={false}
    contentContainerStyle={{}}
      />
    </View>
  )
}