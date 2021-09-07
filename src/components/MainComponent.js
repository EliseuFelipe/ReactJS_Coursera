import Menu from './MenuComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import DishDetail from './DishdetailComponent';
import About from './AboutComponent';

import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'; 

class Main extends Component{
  
  constructor(props){
    super(props);

    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    }
  }

  render() {

    const HomePage = () => {
      return(
        // filter: for each dish verify if featured is true, return a array
        <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.state.promotions.filter((promo) => promo.featured)[0]}   
          leader={this.state.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    } 

    const DishWithId = ({match}) => {
      return(
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))}
          comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
        />
      );
    }

    return ( 
      <div>
        <Header/>
        
        <Switch>
          <Route path="/home" component={HomePage} />
          {/*Forma de passar props para o componente, passando como funcao*/}
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes}/>}/>
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route exact path="/contactus" component={Contact} />
          <Route exact path="/aboutus" component={() => <About leaders={this.state.leaders}/>} />
          <Redirect to="/home"/>{/*default page*/}
        </Switch>
        
        <Footer/>
      </div>
    );
  }
}

export default Main;