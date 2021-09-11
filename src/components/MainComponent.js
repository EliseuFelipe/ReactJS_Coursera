import Menu from './MenuComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import DishDetail from './DishdetailComponent';
import About from './AboutComponent';

import { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'; 
import { connect } from 'react-redux';

const mapStateToProps = state =>  {
  return {
    dishes: state.dishes,
    comments: state.dishes,
    promotions: state.promotions,
    leaders: state.leaders
  }    
}

class Main extends Component{
  
  constructor(props){
    super(props);
  }


  render() {

    const HomePage = () => {
      return(
        // filter: for each dish verify if featured is true, return a array
        <Home dish={this.props.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.props.promotions.filter((promo) => promo.featured)[0]}   
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    } 

    const DishWithId = ({match}) => {
      return(
        <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))}
          comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
        />
      );
    }

    return ( 
      <div>
        <Header/>
        
        <Switch>
          <Route path="/home" component={HomePage} />
          {/*Forma de passar props para o componente, passando como funcao*/}
          <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes}/>}/>
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route exact path="/contactus" component={Contact} />
          <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders}/>} />
          <Redirect to="/home"/>{/*default page*/}
        </Switch>
        
        <Footer/>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));