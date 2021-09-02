import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';


    function RenderDish({dish}){
        if(dish != null){
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

        if(comments !== -1){
        
            const menu = comments.comments.map((comment) => {
                return (
                    <div>
                        <li>{comment.comment}</li><br></br>
                        <li>-- {comment.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li><br></br>
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

    function CommentsVerification(dish){
        if(dish!==null){
            return dish.comments;
        }
        else{
            return -1;
        }
    }

    const DishDetail = (props) => {
        if(props.dish != null){
            return(
                <div className="container">
                    <div className="row">
                        
                        <RenderDish dish={props.dish} />

                        <RenderComments comments={CommentsVerification(props.dish)}/>

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