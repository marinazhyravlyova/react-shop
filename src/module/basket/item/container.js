import  { connect } from 'react-redux';
import BasketItemComponent from './component';
import {fetchProducts} from "../action";

const mapStateToProps = state => ({
    productsInBasket: state.basket.productsInBasket,
});

const mapDispatchToProps = dispatch => ({
    fetchProducts: () => dispatch(fetchProducts()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(BasketItemComponent);