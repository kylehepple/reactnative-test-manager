import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

class EmployeeListItem extends Component {

    render() {

        const { name } = this.props.data;
        const { nameStyle } = styles;

        return (
            <CardSection>
                <Text style={nameStyle}>
                    {name}
                </Text>
            </CardSection>
        );

    }

}

const styles = {
    nameStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

export default EmployeeListItem;