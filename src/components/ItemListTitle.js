import React, { Component } from 'react';

class ListTitle extends Component {

    constructor (props) {

        super(props);

    }

    render() {

        return (

            <div>

                <h2> {this.props.title} </h2>

            </div>

        );

    }

}

export default ListTitle;