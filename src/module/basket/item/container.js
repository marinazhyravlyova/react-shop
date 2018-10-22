import  { connect } from 'react-redux';
import BasketItemComponent from './component';

const mapStateToProps = state => ({
    productIds: state.basket.productIds,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(BasketItemComponent);