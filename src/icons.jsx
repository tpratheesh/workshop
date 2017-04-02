import React from "react";
import ReactDOM from "react-dom";
import Image from "react-bootstrap/lib/Image";

var workshopLogoPNG = require('./../static/images/logo.png');

export class WorkshopLogo extends React.Component {
    render() {
        return (
            <Image className={'workshop-logo'} src={workshopLogoPNG} />
        )
    }
}