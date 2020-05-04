import React, { Component } from "react";
import { FormControl, InputLabel, Input, Button } from '@material-ui/core';

class SearchForm extends Component {

    constructor() {
        super()

        this.state = {
            username: ""
        };
    };

    handleUsername = (e) => {
        this.setState({
            username: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        const username = this.state.username;
        if (!username) {
            return alert("Username Can't be empty")
        }
        this.props.searchGithubUsername(username)
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <FormControl fullWidth>
                    <InputLabel>Enter Github Username</InputLabel>
                    <Input id="username" value={this.state.username} onChange={this.handleUsername} />
                    <Button type="submit" >Search</Button>
                </FormControl>
            </form>
        );
    };
};

export default SearchForm;