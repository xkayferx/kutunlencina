import React, { Component } from 'react';

class ListTitle extends Component {

    constructor (props) {

        super(props);

    }

    render() {

        return (

            <div>

                <h1> {this.props.title} </h1>

            </div>

        );

    }

}

export default ListTitle;