import React, {Component} from "react";
import logo from '../../logo.svg'

class ClassComponent extends Component {

    render() {

        return(

            <div>

                <h3>Class Component</h3>

                <img src={logo} className="App-logo" alt="logo" />

            </div>

        );

    }

}

export default ClassComponent;