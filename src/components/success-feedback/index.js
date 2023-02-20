import React from 'react';
import { View, Text, Image, SafeAreaView, StatusBar } from 'react-native';

import { Colors, GeneralStyles } from '../../styles';
import { Style } from './style';

import DefaultBtn from '../buttons/default-btn';
import CustomHeader from '../custom/custom-header';

export default function SuccessFeedback(props){
    const { title, description, labelText, onPress, imgUrl,
    titleCustomStyle, descCustomStyle, leftAction, 
    customHeaderStyle, customRightHeader } = props;

    return (
        <>
            {leftAction ? 
                <CustomHeader 
                    leftAction={leftAction} 
                    leftIconName={'arrow-back'}
                    leftIconColor={Colors.WHITE}
                    customRightContainer={customRightHeader}
                    customStyle={customHeaderStyle}
                    backgroundColor={Colors.PRIMARY}
                />
            : 
                <StatusBar barStyle="dark-content" backgroundColor={Colors.PRIMARY} />
            }
            <SafeAreaView style={Style.container}>
                <View style={[GeneralStyles.aligns.width32, Style.contentContainer]}>
                    <View style={Style.textBox}>
                        <Image
                            source={imgUrl}
                        />
                        <Text style={[Style.title, titleCustomStyle]}>{title}</Text>
                        <Text style={[Style.desc, descCustomStyle]}>{description}</Text>
                    </View>
                    <DefaultBtn
                        label={labelText}
                        onPress={onPress}
                        textColor={Colors.WHITE_DEFAULT}
                        backgroundColor={Colors.GRAY_DARKEST}
                    />
                </View>
            </SafeAreaView>
        </>
    );
}
