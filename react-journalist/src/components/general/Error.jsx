import React from "react";
import ReactDOM from "react-dom";

class Error extends React.Component {

    render() {
        return (
            <div className="text-center" style={{color:"indianred"}}>
                <h1>404</h1>
                <h2>The page doesn't exist</h2>
            </div>
        )
    }
}

export default Error;


