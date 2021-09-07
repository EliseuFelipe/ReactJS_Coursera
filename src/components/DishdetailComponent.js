import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';


    function RenderDish({dish}){
        if(dish !== null){
            return (
                <Card className="col-12 col-md-5 m-1">
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
            console.log(props.dish[0].name);
            return(
                <div className="container">

                    <div className="row">
                        <Breadcrumb>

                            <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                            <Breadcrumb active>{props.dish[0].name}</Breadcrumb>
                        
                        </Breadcrumb>
                        
                        <div className="col-12">
                            <h3>{props.dish[0].name}</h3>
                            <hr />
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish={props.dish[0]} />
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