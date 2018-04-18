import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';

import { employeesFetch } from '../actions/EmployeeActions';
import ListItem from './EmployeeListItem';

class EmployeeList extends Component {

    componentDidMount() {

        this.props.employeesFetch();

    }

    render() {

        return (
            <FlatList
                data={this.props.employees}
                renderItem={this.renderItem}
                keyExtractor={item => `${item.uid}`}
            />
        );

    }

    renderItem({ item }) {

        return <ListItem data={item} />;
        
    }

}

const mapStateToProps = (state) => {

    const employeesObj = state.employeeList.employees;
    const employees = [];

    for (const uid of Object.keys(employeesObj)) {
        employees.push({
            ...employeesObj[uid],
            uid
        });
    }

    return { employees };
    
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);