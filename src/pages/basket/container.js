import  { connect } from 'react-redux';
import BasketComponent from './component';
import {
    fetchProducts,
    onDeleteProductInBasket
} from './action';
import {deleteProduct} from "../../action";
  
const mapStateToProps = state => ({
    productsInBasket: state.basket.productsInBasket,
}); 

const mapDispatchToProps = dispatch => ({
    fetchProducts: () => dispatch(fetchProducts()),
    onDeleteProductInBasket: product => dispatch(onDeleteProductInBasket(product)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(BasketComponent);