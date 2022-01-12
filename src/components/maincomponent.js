import React, { Component } from 'react';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import Menu from './menucomponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Dishdetail from './DishdetailComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect } from 'react-router-dom'; 

class Main extends Component {
  constructor(props){

    super(props);

    this.state={
      dishes : DISHES,
      comments : COMMENTS,
      promotions : PROMOTIONS,
      leaders : LEADERS,
      selectedDish: null
    };
  }

  onDishSelect(dish) {
    this.setState({ selectedDish: dish});
    }

  render(){

    const HomePage = () =>{
      return(
        <Home 
              dish={this.state.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
              leader={this.state.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    }

    const DishWithId = ({match}) => {
      return(
          <Dishdetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    };

    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/home" component={ HomePage } />
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} onClick={(dish) => this.onDishSelect(dish)} />} /> 
          <Route exact path="/aboutus" component={() => <About leaders={this.state.leaders} />} />
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route exact path="/contactus" component={Contact} />
          <Redirect to="/home" />
        </Switch>
        
        <Dishdetail dish={ this.state.selectedDish } />
        <Footer />
      </div>
    );
  }
}

export default Main;
