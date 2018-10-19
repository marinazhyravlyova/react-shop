import  { connect } from 'react-redux';
import BasketComponent from './component';
import {
    fetchProducts,
    deleteProduct
} from './action';
  
const mapStateToProps = state => ({
    productsInBasket: state.basket.productsInBasket,
}); 

const mapDispatchToProps = dispatch => ({
    fetchProducts: () => dispatch(fetchProducts()),
    deleteProduct: product => dispatch(deleteProduct(product)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(BasketComponent);