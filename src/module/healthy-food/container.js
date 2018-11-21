import { connect } from 'react-redux';
import HealthyFoodComponent from './component';
import {
    fetchData,
    addDay,
    changeDay,
    deleteDay,
    addEatingTime,
    changeEatingTime,
    deleteEatingTime,
    addProduct,
    changeProduct,
    deleteProduct,
} from './action';

export const mapStateToProps = state => ({
    days: state.healthyFood.days,
    allProducts: state.healthyFood.products,
});

export const mapDispatchToProps = dispatch => ({
    fetchData: () => dispatch(fetchData()),
    onDayAdd: (...args) => dispatch(addDay(...args)),
    onDayChange: (...args) => dispatch(changeDay(...args)),
    onDayDelete: (...args) => dispatch(deleteDay(...args)),
    onEatingTimeAdd: (...args) => dispatch(addEatingTime(...args)),
    onEatingTimeChange: (...args) => dispatch(changeEatingTime(...args)),
    onEatingTimeDelete: (...args) => dispatch(deleteEatingTime(...args)),
    onProductAdd: (...args) => dispatch(addProduct(...args)),
    onProductChange: (...args) => dispatch(changeProduct(...args)),
    onProductDelete: (...args) => dispatch(deleteProduct(...args)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(HealthyFoodComponent);