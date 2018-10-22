import {connect} from 'react-redux';
import MainComponent from './component';
import {
    fetchProducts,
    deleteProduct,
} from '../product/action';
import {addProductIdToBasket} from '../basket/action'

const mapStateToProps = state => ({
    products: state.main.products,
});

const mapDispatchToProps = dispatch => ({
    fetchProducts: () => dispatch(fetchProducts()),
    onDeleteProduct: product => dispatch(deleteProduct(product)),
    addProductIdToBasket: product => dispatch(addProductIdToBasket(product)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MainComponent);