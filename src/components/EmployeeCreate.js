import React, { Component } from 'react';

import { Picker, Text } from 'react-native';
import { connect } from 'react-redux';

import { Button, Card, CardSection, Input } from './common';
import { employeeCreate, employeeUpdate } from '../actions/EmployeeActions';

class EmployeeCreate extends Component {

    onPressSaveButton() {

        const { name, phone, shift } = this.props;

        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
    }

    render() {

        const { pickerContainerStyle, pickerTextStyle } = styles;

        return (
            <Card>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="Joe Bloggs"
                        value={this.props.name}

                        onChangeText={value => this.props.employeeUpdate({
                            property: 'name', 
                            value
                        })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Phone"
                        placeholder="555-5-555"
                        value={this.props.phone}

                        onChangeText={value => this.props.employeeUpdate({ 
                            property: 'phone', 
                            value 
                        })}
                    />
                </CardSection>

                <CardSection style={pickerContainerStyle}>
                    <Text style={pickerTextStyle}>Shift</Text>
                    <Picker
                        selectedValue={this.props.shift}
                        onValueChange={value => this.props.employeeUpdate({
                            property: 'shift',
                            value
                        })}
                    >
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />
                    </Picker>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onPressSaveButton.bind(this)} text="Save" />
                </CardSection>
            </Card>
        );

    }

}

const styles = {
    pickerContainerStyle: {
        flexDirection: 'column'
    },
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
};

const mapStateToProps = (state) => {

    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };

};

export default connect(mapStateToProps, { employeeCreate, employeeUpdate })(EmployeeCreate);