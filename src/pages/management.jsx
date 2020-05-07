import React from "react";
import FloatNav from "../components/core/float-nav";
import HeaderNav from "../components/core/header-nav";




export default class ManagementView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            "title": "Graph Data Management"
        }
    }

    render() {
        return (
            <div className="App">
                <HeaderNav title={this.state.title}/>
                <FloatNav/>
            </div>
        );
    }


}

