import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        // PROCESS FORM //
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values: { firstName, lastName, Email, Occupation, City, Bio} } = this.props;
         
 
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title = "Confirm Your User Data Dude" />
                   
                    <List>
                        <ListItem
                            primaryText = "First Name"
                            secondaryText = { firstName }
                        />
                        <ListItem
                            primaryText = "Last Name"
                            secondaryText = { lastName }
                        />
                        <ListItem
                            primaryText = "Email"
                            secondaryText = { Email }
                        />
                        <ListItem
                            primaryText = "Occupation"
                            secondaryText = { Occupation }
                        />
                        <ListItem
                            primaryText = "City"
                            secondaryText = { City }
                        />
                        <ListItem
                            primaryText = "Bio"
                            secondaryText = { Bio }
                        />
                    </List>
                    <RaisedButton
                        label = "Confirm and Continue"
                        primary = {true}
                        style = {styles.button}
                        onClick = {this.continue}
                    />
                    <RaisedButton
                        label = "Back"
                        primary = {false}
                        style = {styles.button}
                        onClick = {this.back}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default Confirm
