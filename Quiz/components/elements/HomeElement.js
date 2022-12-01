import React from 'react';
// import type {Node} from 'react';
import {
  Text,
  TouchableOpacity,
} from 'react-native';

const HomeElement= (props)=>{

    return(
<TouchableOpacity
style={
    [
        {backgroundColor:props.backgroundColor},
        {borderWidth:3},
        {margin:5}
    ]
}
 onPress={props.onPress}
>
<Text
style={[
    
    {fontSize:30},
    {color:props.colorText}
]}
>
{props.title}
</Text>
<Text
style={[
    
    {fontSize:20},
    {color:props.colorText}
]}
>
{props.text}
</Text>
</TouchableOpacity>
    )
};
export default HomeElement;