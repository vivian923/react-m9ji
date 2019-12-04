import React from "react";
import { LoadingCon } from "./styled"

class Loading extends React.Component {
    render() {
        return (
            <LoadingCon>
                <div className="dot white"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </LoadingCon>
        )
    }
}

export default Loading;