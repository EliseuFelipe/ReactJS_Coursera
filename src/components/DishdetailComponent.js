import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';

class DishDetail extends Component {

    renderDish(dish){
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
                
                <div>{console.log("dish null")}</div>
            )
        }
    };

    renderComments(comments){

        if(comments !== -1){
            return (
                <div>
                    <ul className="list-unstyled">
                        <h4>Comments</h4>

                        <li>{comments[0].comment}</li><br></br>
                        <li>-- {comments[0].author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments[0].date)))}</li><br></br>

                        <li>{comments[1].comment}</li><br></br>
                        <li>-- {comments[1].author}, {comments[0].date}</li><br></br>

                        <li>{comments[2].comment}</li><br></br>
                        <li>-- {comments[2].author}, {comments[0].date}</li><br></br>

                        <li>{comments[3].comment}</li><br></br>
                        <li>-- {comments[3].author}, {comments[0].date}</li><br></br>

                        <li>{comments[4].comment}</li><br></br>
                        <li>-- {comments[4].author}, {comments[0].date}</li>
                    
                    </ul>
                </div>
            )
        }

        else{
            return (
                <div></div>
            )
        }
    };

    CommentsVerification(dish){
        if(dish!=null){
            return dish.comments;
        }
        else{
            return -1;
        }
    };

    render() {
        return(
            <div className="container">
                <div className="row">
                    {this.renderDish(this.props.dish)}

                    {this.renderComments(this.CommentsVerification(this.props.dish))}

                </div>
            </div>
        );
    }
}

export default DishDetail;