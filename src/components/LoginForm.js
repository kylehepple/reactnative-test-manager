import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
 
import { emailChanged, loginUser, passwordChanged } from '../actions/AuthActions';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {

    onChangeEmail(text) {

        this.props.emailChanged(text);

    }

    onChangePassword(text) {

        this.props.passwordChanged(text);

    }

    onPressLogin() {

        const { email, password } = this.props;

        this.props.loginUser({ email, password });

    }

    renderButton() {

        const { loading } = this.props;

        if (loading) {
            return <Spinner size="large" />;
        }

        return <Button text="Login" onPress={this.onPressLogin.bind(this)} />;

    }

    renderError() {

        const { error } = this.props;
        const { errorTextStyle } = styles;

        if (error) {
            return (
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={errorTextStyle}>
                        {error}
                    </Text>
                </View>
            );
        }

    }

    render() {

        const { email, password } = this.props;

        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="example@abc.com"
                        value={email}

                        onChangeText={this.onChangeEmail.bind(this)}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Password"
                        placeholder="password"
                        secureTextEntry
                        value={password}

                        onChangeText={this.onChangePassword.bind(this)}
                    />
                </CardSection>

                {this.renderError()}

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );

    }

}

const styles = {
    errorTextStyle: {
        alignSelf: 'center',
        color: 'red',
        fontSize: 20,
        padding: 10,
        textAlign: 'center'
    }
};

const mapStateToProps = (state) => { 

    const { error, email, loading, password } = state.auth;

    return { error, email, loading, password };

};

export default connect(
    mapStateToProps, 
    { 
        emailChanged, 
        loginUser,
        passwordChanged 
    }
)(LoginForm);