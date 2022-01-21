import React,{Component} from "react";
import Header from "../components/header";
import Content from "../components/content";
import "../stylesheets/home.css";
import { Button, Container } from "react-bootstrap";

class Home extends Component{
    render(){
        var _content = 
        <Container className="home">
            <Button className="home">이수과목관리</Button>
            <Button className="home">졸업시뮬레이션</Button>
        </Container>
        
        return(
            <div>
                <Header></Header>
                <Content content={_content}></Content>
            </div>
        );
    }
}

export default Home