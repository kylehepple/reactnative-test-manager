import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from 'react-native';

class EmployeeCreate extends Component {

    render() {

        return (
            <Card>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="Joe Bloggs"
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Phone"
                        placeholder="555-5-555"
                    />
                </CardSection>

                <CardSection>
                    
                </CardSection>
            </Card>
        );

    }

}

export default EmployeeCreate;