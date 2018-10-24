import  { connect } from 'react-redux';
import BasketItemComponent from './component';
import {fetchProducts} from "../action";

const mapStateToProps = state => ({
    productIds: state.basket.productIds,
});

const mapDispatchToProps = dispatch => ({
    fetchProducts: () => dispatch(fetchProducts()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(BasketItemComponent);