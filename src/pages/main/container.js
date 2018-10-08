import { connect } from 'react-redux';
import MainComponent from './component';
import {
    fetchProducts,
    deleteProduct,
} from '../../action';

const mapStateToProps = state => ({
    products: state.main.products,
});

const mapDispatchToProps = dispatch => ({
    onDeleteProduct: product => dispatch(deleteProduct(product)),
    fetchProducts: () => dispatch(fetchProducts()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MainComponent);