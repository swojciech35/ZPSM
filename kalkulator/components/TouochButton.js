import React from 'react';
import type {Node} from 'react';
import {
  Text,
  TouchableOpacity,
} from 'react-native';

const TouchButton= (button)=>{

    return(
<TouchableOpacity
style={
    [
        {backgroundColor:button.backgroundColor},
        {flex:1},
    ]
}
 onPress={button.onPress}
>
<Text
style={[
    {textAlign:'center'},
    {fontSize:45},
    {color:button.colorText}
]}
>
{button.title}
</Text>
</TouchableOpacity>
    )
};
export default TouchButton;