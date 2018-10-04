import React, {Component} from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import MainPage from './pages/main';
import AddProductPage from './pages/add-product';
import EditProductPage from './pages/edit-product';
import Products from '../public/product.json';
import store from './store';

export default class App extends Component {
    constructor(props) {
        super(props);

        store.setState({products: Products});
    }

    render() {
        return (
            <div>
                <div>
                    <Link to='/'>Main</Link>
                </div>
                <div>
                    <Link to='/product/new'>Add new product</Link>
                </div>
                <Switch>
                    <Route exact path='/' component={MainPage}/>
                    <Route path='/product/new' component={AddProductPage}/>
                    <Route path='/product/:productId' component={EditProductPage}/>
                </Switch>
            </div>
        );
    }
}