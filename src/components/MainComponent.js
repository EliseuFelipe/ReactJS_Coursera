import Menu from './MenuComponent';
import Home from './HomeComponent';
import { DISHES } from '../shared/dishes';
import { Component } from 'react';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom'; 

class Main extends Component{
  
  constructor(props){
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null
    }
  }

  render() {

    const HomePage = () => {
      return(
        <Home />
      );
    }

    return ( 
      <div>
        <Header/>
        
        <Switch>
          <Route path="/home" component={HomePage} />

          {/*Forma de passar props para o componente, passando como funcao*/}
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes}/>}/>

          <Redirect to="/home"/>{/*default page*/}
        </Switch>
        
        <Footer/>
      </div>
    );
  }
}

export default Main;