import React, {Component} from 'react';
import { Switch, Route } from 'react-router';
import MainPage from './module/main/container';
import AddProductPage from './module/product/add/container';
import EditProductPage from './module/product/edit/container';
import BasketPage from "./module/basket/container";
import RegistrationPage from "./module/registration/add/container";
import Header from "./common/header/component";

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path='/' component={MainPage}/>
                    <Route path='/product/new' component={AddProductPage}/>
                    <Route path='/product/:productId' component={EditProductPage}/>
                    <Route path='/basket' component={BasketPage}/>
                    <Route path='/registration' component={RegistrationPage}/>
                </Switch>
            </div>
        );
    }
}