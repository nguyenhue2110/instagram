import React from 'react';
import {View,FlatList} from 'react-native';
import StoryView from '../UserStoryview/StoryView';
const data=[
    {imageUri:'https://media-cdn.laodong.vn/Storage/NewsPortal/2021/3/22/891548/Song-Joong-Ki.jpeg?w=960&crop=auto&scale=both',

name:'Sooong Jong Ki'},
{imageUri:'https://i.mydramalist.com/67r8d_5c.jpg',

name:'Lee joon Ki'},
{imageUri:'https://media-cdn.laodong.vn/Storage/NewsPortal/2021/3/22/891548/Song-Joong-Ki.jpeg?w=960&crop=auto&scale=both',

name:'Sooong Jong Ki'},
{imageUri:'https://media-cdn.laodong.vn/Storage/NewsPortal/2021/3/22/891548/Song-Joong-Ki.jpeg?w=960&crop=auto&scale=both',

name:'Sooong Jong Ki'},

]

const Stories = () => (
    // <FlatList data={data}
    // renderItem ={({item})=> <StoryView imageUri ={item.imageUri} name={item.name} />}
    // />
    
     <FlatList
     data= {data}
     horizontal
     showsHorizontalScrollIndicator={false}
     keyExtractor={({name})=>name}
     renderItem={({item})=> <StoryView imageUri={item.imageUri} name={item.name}/>}
     />
);

export default Stories;
