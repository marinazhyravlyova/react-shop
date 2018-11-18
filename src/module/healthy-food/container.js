import { connect } from 'react-redux';
import HealthyFoodComponent from './component';
import {
    selectDay,
    selectEatingTimeItem,
    addEatingTimeItem,
    setNewEatingTimeItemName,
    deleteProduct,
    setNewProductName,
    setNewProductWeight,
    addNewProduct,
    addNewDay,
    setNameForSelectedProduct,
    setWeightForSelectedProduct,
    saveSelectedProduct,
    selectProduct,
} from './action';

export const mapStateToProps = state => ({
    days: state.healthyFood.days,
    selectedDayId: state.healthyFood.selectedDayId,
    selectedEatingTimeId: state.healthyFood.selectedEatingTimeId,
    selectedProductId: state.healthyFood.selectedProductId,
    newEatingTimeName: state.healthyFood.newEatingTimeName,
    newProductName: state.healthyFood.newProductName,
    newProductWeight: state.healthyFood.newProductWeight,
});

export const mapDispatchToProps = dispatch => ({
    onDayTabClick: day => dispatch(selectDay(day)),
    onEatingTimeClick: eatingTimeItem => dispatch(selectEatingTimeItem(eatingTimeItem)),
    onNewEatingTimeItemClick: () => dispatch(addEatingTimeItem()),
    onNewEatingTimeNameChange: event => dispatch(setNewEatingTimeItemName(event.target.value)),
    onProductDelete: (product) => dispatch(deleteProduct(product.id)),
    onNewProductNameChange: event => dispatch(setNewProductName(event.target.value)),
    onNewProductWeightChange: event => dispatch(setNewProductWeight(event.target.value)),
    onNewProductAdd: ()=> dispatch(addNewProduct()),
    addNewDay: ()=> dispatch(addNewDay()),
    onSelectedProductNameChange: (event) => dispatch(setNameForSelectedProduct(event.target.value)),
    onSelectedProductWeightChange: (event) => dispatch(setWeightForSelectedProduct(event.target.value)),
    onSelectedProductSaveClick: () => dispatch(saveSelectedProduct()),
    onProductEditClick: (product) => dispatch(selectProduct(product)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(HealthyFoodComponent);