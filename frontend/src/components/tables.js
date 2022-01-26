import React, {Component} from "react";
import { Button, Form, Row, Col, Stack, Table } from "react-bootstrap";

class Tables extends Component{
    render(){
        var _content = null;
        var _button = this.props.id===2?<Button>저장</Button>:<Button onClick={this.props.onOpenResultModal}>결과</Button>
        switch(this.props.id){
            case 1:
                _content =  <Table bordered>
                                <thead>
                                    <tr>
                                        <th colSpan={5}>졸업구분</th>
                                        <th colSpan={4}>공학인증 구분</th>
                                    </tr>
                                    <tr>
                                        <th>전공필수</th>
                                        <th>전공선택</th>
                                        <th>교양</th>
                                        <th>공필/일선</th>
                                        <th>취득학점</th>
                                        <th>BSM</th>
                                        <th>전문교양</th>
                                        <th>공학주제</th>
                                        <th>설계</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                    </tr>
                                </tbody>
                            </Table>;
                break;
            case 2:         
            case 3:
                _content =  <Form>
                                <Table hover>
                                    <thead>
                                        <tr>
                                            <th>이수구분</th>
                                            <th>공학인증</th>
                                            <th>과목명</th>
                                            <th>이수년도</th>
                                            <th>이수학기</th>
                                            <th>학점</th>
                                            <th>등급</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>전공선택</td>
                                            <td>공학주제/설계</td>
                                            <td>데이터베이스</td>
                                            <td>2021</td>
                                            <td>2</td>
                                            <td>3</td>
                                            <td>A+</td>
                                            <td><Button variant="outline-danger" size="sm">삭제</Button></td>
                                        </tr>
                                        <tr>
                                            <td>전공선택</td>
                                            <td>공학주제/설계</td>
                                            <td>병렬분산시스템</td>
                                            <td>2021</td>
                                            <td>2</td>
                                            <td>3</td>
                                            <td>A+</td>
                                            <td><Button variant="outline-danger" size="sm">삭제</Button></td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <Stack className="my-3 justify-content-center" direction="horizontal" gap={3}>
                                    <Button onClick={this.props.onOpenSearchModal}>추가</Button>
                                    {_button}
                                </Stack>
                            </Form>;
                break;
            case 4:
                var visible = null;
                if(this.props.pageId === 1) visible = true;
                else visible = false;
                _content =  <Form className="border mb-3">
                                <Row className="my-3">
                                    {visible && <Form.Group as={Col} md={3}>
                                        <Form.Label>연도</Form.Label>
                                        <Form.Select>
                                            <option>전체</option>
                                            <option>2021</option>
                                            <option>2020</option>
                                            <option>2019</option>
                                            <option>2018</option>
                                            <option>2017</option>
                                        </Form.Select>
                                    </Form.Group>}
                                    <Form.Group as={Col} md={3}>
                                        <Form.Label>학기</Form.Label>
                                        <Form.Select>
                                            <option>전체</option>
                                            <option>1</option>
                                            <option>2</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group as={Col} md={3}>
                                        <Form.Label>학년</Form.Label>
                                        <Form.Select>
                                            <option>전체</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Row>
                                <Row className="my-3">
                                    <Form.Group as={Col} md={3}>
                                        <Form.Label>이수구분</Form.Label>
                                        <Form.Select>
                                            <option value="00">전체</option>
                                            <option value="00">전공필수</option>
                                            <option value="00">전공선택</option>
                                            <option value="00">일반선택</option>
                                            <option value="00">교양</option>
                                            <option value="00">공통필수</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group as={Col} md={4}>
                                        <Form.Label>공학구분</Form.Label>
                                        <div className="border">
                                            <Form.Check inline label="BSM" name="abeek" type="checkbox"/>
                                            <Form.Check inline label="전문교양" name="abeek" type="checkbox"/>
                                            <Form.Check inline label="공학주제" name="abeek" type="checkbox"/>
                                            <Form.Check inline label="설계" name="abeek" type="checkbox"/>
                                        </div>          
                                    </Form.Group>
                                    <Col>
                                        <Form.Label column>과목명</Form.Label>
                                        <Row>
                                            <Col md={9}>
                                                <Form.Control type="text" placeholder="과목명을 입력하세요."></Form.Control>
                                            </Col>    
                                            <Col>
                                                <Button>검색</Button>   
                                            </Col> 
                                        </Row>
                                    </Col>        
                                </Row>                          
                            </Form>;
                break;
            case 5:
                _content =  <Form>
                                <Table hover>
                                    <thead>
                                        <tr>
                                            <th>과목코드</th>
                                            <th>과목명</th>
                                            <th>이수구분</th>
                                            <th>공학인증</th>
                                            <th>개설년도</th>
                                            <th>개설학기</th>
                                            <th>학점</th>
                                            <th>등급</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>0000000000</td>
                                            <td>병렬분산시스템</td>
                                            <td>전공선택</td>
                                            <td>공학주제/설계</td>
                                            <td>2021</td>
                                            <td>2</td>
                                            <td>3</td>
                                            <td>
												<Form.Select aria-label="Default select example" size="sm">
													<option value="A+">A+</option>
													<option value="A">A</option>
													<option value="B+">B+</option>
													<option value="B">B</option>
													<option value="C+">C+</option>
													<option value="C">C</option>
													<option value="D+">D+</option>
													<option value="D">D</option>
													<option value="P">P</option>
													<option value="F">F</option>
												</Form.Select>
											</td>
                                            <td><Button variant="outline-success" size="sm">추가</Button></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Form>
                break;
            case 6:
                _content =  <Table bordered>
                                <thead>
                                    <tr>
                                        <th>선수과목</th>
                                        <th>후수과목</th>
                                        <th>만족여부</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>디지털논리설계</td>
                                        <td className="red">논리회로설계</td>
                                        <td className="red">불만족</td>
                                    </tr>
                                    <tr>
                                        <td>창의적IT공학설계입문</td>
                                        <td>논리회로설계</td>
                                        <td className="green">만족</td>
                                    </tr>
                                </tbody>
                            </Table>;
                break;
            case 7:
                _content =  <Table bordered>
                                <thead>
                                    <tr>
                                        <th>현재 총 평점</th>
                                        <th>예상 총 평점</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>4.0</td>
                                        <td>4.2</td>
                                    </tr>
                                </tbody>
                            </Table>;
                break;
            default:
                _content = <div>wrong id</div>;

        }
        return(
            <div>
                {_content}
            </div>
        );
    }
}

export default Tables;