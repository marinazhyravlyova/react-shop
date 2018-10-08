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
    fetchProducts: () => dispatch(fetchProducts()),
    onDeleteProduct: product => dispatch(deleteProduct(product)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MainComponent);