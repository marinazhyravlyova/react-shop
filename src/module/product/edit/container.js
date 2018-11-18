import  { connect } from 'react-redux';
import EditProductComponent from './component';
import {
    fetchProducts,
} from '../action';
import {
    fetchProduct,
    setName,
    setDescription,
    setPrice,
    setUrl,
    saveProduct,
    addComment,
    setProtein,
    setCarbohydrates,
    setCalories, 
    setFat,
} from './action';

const mapStateToProps = state => ({
    id: state.editProduct.id,
    name: state.editProduct.name,
    description: state.editProduct.description,
    price: state.editProduct.price,
    url: state.editProduct.url,
    calories: state.editProduct.calories,
    protein: state.editProduct.protein,
    fat: state.editProduct.fat,
    carbohydrates: state.editProduct.carbohydrates,
    isValidPrice: state.editProduct.isValidPrice,
    comments: state.editProduct.comments,
});

const mapDispatchToProps = dispatch => ({
    fetchProduct: (id) => {
        dispatch(fetchProducts());
        dispatch(fetchProduct(id));
    },
    onSaveButtonClick: () => dispatch(saveProduct()),
    onNameChange: (event) => dispatch(setName(event.target.value)),
    onDescriptionChange: (event) => dispatch(setDescription(event.target.value)),
    onPriceChange: (event) => dispatch(setPrice(event.target.value)),
    onUrlChange: (event) => dispatch(setUrl(event.target.value)),
    onСaloriesChange: (event) => dispatch(setCalories(event.target.value)),
    onProteinChange: (event) => dispatch(setProtein(event.target.value)),
    onFatChange: (event) => dispatch(setFat(event.target.value)),
    onСarbohydratesChange: (event) => dispatch(setCarbohydrates(event.target.value)),
    onCommentAdd: (comment) => dispatch(addComment(comment)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(EditProductComponent);