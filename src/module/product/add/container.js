import { connect } from 'react-redux';
import EditProductComponent from './component';
import {
    addId,
    addName,
    addDescription,
    addPrice,
    addUrl,
    createProduct,
    addCalories,
    addProtein,
    addFat,
    addСarbohydrates,
} from './action';

const mapStateToProps = state => ({
    id: state.addProduct.id,
    name: state.addProduct.name,
    description: state.addProduct.description,
    price: state.addProduct.price,
    url: state.addProduct.url,
    calories: state.addProduct.calories,
    protein: state.addProduct.protein,
    fat: state.addProduct.fat,
    carbohydrates: state.addProduct.carbohydrates,
    isValidPrice: state.addProduct.isValidPrice,
});

const mapDispatchToProps = dispatch => ({
    onSaveButtonClick: () => dispatch(createProduct()),
    onIdChange: (event) => dispatch(addId(event.target.value)),
    onNameChange: (event) => dispatch(addName(event.target.value)),
    onDescriptionChange: (event) => dispatch(addDescription(event.target.value)),
    onPriceChange: (event) => dispatch(addPrice(event.target.value)),
    onUrlChange: (event) => dispatch(addUrl(event.target.value)),
    onСaloriesChange: (event) => dispatch(addCalories(event.target.value)),
    onProteinChange: (event) => dispatch(addProtein(event.target.value)),
    onFatChange: (event) => dispatch(addFat(event.target.value)),
    onСarbohydratesChange: (event) => dispatch(addСarbohydrates(event.target.value)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(EditProductComponent);