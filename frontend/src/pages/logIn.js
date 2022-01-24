import React, {Component} from "react";
import { Button, Container } from "react-bootstrap";
import "../stylesheets/login.css"
import { Link } from 'react-router-dom';
import Header from "../components/header";
import Content from "../components/content";
import Form from 'react-bootstrap/Form';
import Feedback from 'react-bootstrap/Feedback';

class LogIn extends Component{
	constructor(){
		super();
		this.state = {
			validated: false
		};
	}

	handleSubmit = (e) => {
		const form = e.currentTarget;
		if (form.checkValidity() === false){
			e.preventDefault();
			e.stopPropagation();
		}
		this.setState({validated: true});
	};

	render(){
		var _title = "로그인";
		var _content =  <Container className="login">
							<Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
								<Form.Group className="mb-3" controlId="studentId">
									<Form.Label>학번</Form.Label>
									<Form.Control required type="text"	placeholder="학번을 입력하세요."/>
									<Form.Control.Feedback type="invalid">학번을 입력해주세요!</Form.Control.Feedback>
								</Form.Group>

								<Form.Group className="mb-4" controlId="password">
									<Form.Label>비밀번호</Form.Label>
									<Form.Control required type="password" placeholder="비밀번호를 입력하세요." />
									<Form.Control.Feedback type="invalid">비밀번호를 입력해주세요!</Form.Control.Feedback>
								</Form.Group>
								
								<Container className="signUpMove">
									<Button className="mb-2" variant="primary" type="submit">로그인</Button>
									<div>
										<Link to="/signUp">회원가입</Link>
									</div>
								</Container>
							</Form>
						</Container>
							

		return(
			<div>
                <Header></Header>
                <Content title={_title} content={_content}></Content>
            </div>
		);
	}
}

export default LogIn