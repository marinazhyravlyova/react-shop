import {connect} from 'react-redux';
import MainComponent from './component';
import {
    fetchProducts,
    deleteProduct,
} from '../product/action';
import {addProductToBasket} from '../basket/action'

const mapStateToProps = state => ({
    products: state.main.products,
});

const mapDispatchToProps = dispatch => ({
    fetchProducts: () => dispatch(fetchProducts()),
    onDeleteProduct: product => dispatch(deleteProduct(product)),
    addProductIdToBasket: product => dispatch(addProductToBasket(product)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MainComponent);