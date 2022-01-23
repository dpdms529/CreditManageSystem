import React, {Component} from "react";
import { Button, Modal } from "react-bootstrap";

class CustomModal extends Component{
    render(){
        return(
            <Modal dialogClassName={this.props.dialogClassName} show={this.props.show} onHide={this.props.onHide} size="lg" centered>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {this.props.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {this.props.content}
                </Modal.Body>
            </Modal>
            
        );
    }

}

export default CustomModal