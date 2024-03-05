import { View, Text,ScrollView } from 'react-native'
import React,{useState} from 'react'

import PlayLists from '../components/PlayLists'
import Categories from '../components/Categories'
import { madeForAndreData, playListData, recentlyPlayedData, topMixesData } from '../utils'

export default function index() {
  const[playlists,setPlaylists] = useState(playListData)
  return (
    <ScrollView className='flex-1 bg-black'>
      <PlayLists playlists={playlists}/>
      <Categories title='Your top mixes' data={topMixesData}/>
      <Categories title='Made For Andre' data={madeForAndreData}/>
      <Categories title='Recently played' data={recentlyPlayedData}/>

    </ScrollView>
  )
}