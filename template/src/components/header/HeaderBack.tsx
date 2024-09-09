import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation, useTheme } from '@react-navigation/native';
import { Icon } from '@rneui/base';


const HeaderBack = () => {
    const navigation = useNavigation();
    const { colors } = useTheme();

    return (
          <TouchableOpacity 
            activeOpacity={.3}
            style={{ paddingLeft: 4}}
            hitSlop={{ top: 15, right: 15, left: 15, bottom: 15 }}
            onPress={() => navigation.goBack()}>
            <Icon name="angle-left" color={colors.text}  size={20} style={{marginTop:3}}    type='fontisto'/>
          </TouchableOpacity>
    );
};

export default HeaderBack;

