import React from 'react';
import { View } from 'react-native';

const CardSection = ({ children, style = {} }) => {

    const { containerStyle } = styles;

    return (
        <View style={[containerStyle, style]}>
            {children}
        </View>
    );
    
};

const styles = {
    containerStyle: {
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 1,
        borderColor: '#DDDDDD',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        padding: 5,
        position: 'relative'
    }
};

export { CardSection };