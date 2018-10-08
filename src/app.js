import React, {Component} from 'react';
import { Switch, Route } from 'react-router';
import MainPage from './pages/main/container';
import AddProductPage from './pages/add-product/container';
import EditProductPage from './pages/edit-product/container';
import Header from "./components/header";

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
                </Switch>
            </div>
        );
    }
}