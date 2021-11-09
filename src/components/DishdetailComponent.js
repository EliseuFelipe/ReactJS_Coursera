import { Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import React, { Component } from 'react';
import { Button, Modal, ModalHeader,
         ModalBody, Label, Input, Row, Col } from 'reactstrap'
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

export class CommentForm extends Component{

    constructor(props){
        super(props);

        this.state = {
            isModalOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(event) {
        this.toggleModal();
        alert("Submit");
        event.preventDefault();
    }

    render(){        
        return(
            <div>
                <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-sing-in fa-lg"></span>Submit Comment 
                </Button>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>

                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>

                    <ModalBody>
                        <div className="row row-content">
                        <div className="col-12 col-md-9">
                            <LocalForm onSubmit={this.handleSubmit}>
                                <Col className="form-group">
                                    <Label htmlFor="rate" md={5}>Rating</Label>
                                    <Col>
                                        <Control.select model=".rating" id="rating" name="rating">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </Control.select>
                                    </Col>
                                </Col>
                                <Col className="form-group">
                                    <Label htmlFor="author" md={5}>Your Name</Label>
                                        <Col md={10}>
                                            <Control.text model=".author" id="author" name="author"
                                                placeholder="Last Name"
                                                className="form-control"
                                                validators={{
                                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                                }}
                                                />
                                            <Errors
                                                className="text-danger"
                                                model=".author"
                                                show="touched"
                                                messages={{
                                                    required: 'Required',
                                                    minLength: 'Must be greater than 2 characters',
                                                    maxLength: 'Must be 15 characters or less'
                                                }}
                                            />
                                        </Col>
                                </Col>
                                <Col className="form-group">
                                    <Label htmlFor="message" md={2}>Message</Label>
                                        <Col md={9}>
                                            <Control.textarea model=".message" id="message" name="message"
                                                placeholder="Last Name"
                                                className="textarea"
                                            />
                                    </Col>
                                </Col>

                                <Button type="submit" value="submit" color="primary">Submit</Button>
                            </LocalForm>
                        </div>
                        </div>
                    </ModalBody>
                </Modal>

            </div>
            );
    }
}

function RenderDish({dish}){
    if(dish !== null){
        return (
            <Card>
                <CardImg width="50%" src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        )
    }

    else{
        return (
            <div></div>
        )
    }
}

function RenderComments(comments){

    if(comments !== null){
        const menu = comments.comments.map((comment) => {
            return (
                <div>
                    <li>{comment.comment}</li><br></br>
                    {/*<li>-- {comment.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li><br></br>*/}
                    <li>-- {comment.author}</li>
                </div>
            );
        });

        return (
            <div>
                <ul className="list-unstyled">
                    <h4>Comments</h4>

                    {menu}
                    <CommentForm/>
                </ul>

            </div>
        )
    }

    else{
        return (
            <div></div>
        )
    }
}

/*function CommentsVerification(dish){
    if(dish!==null){
        return dish.comments;
    }
    else{
        return -1;
    }
}*/

const DishDetail = (props) => {
    if(props.dish != null){
        return(
            <div className="container">

                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <Breadcrumb active>{props.dish.name}</Breadcrumb>
                    
                    </Breadcrumb>
                    
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>

                </div>

                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
                
            </div>
        );
    }
    else{
        return(
            <div></div>
        );
    }
}


export default DishDetail;