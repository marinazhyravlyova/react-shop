import  { connect } from 'react-redux';
import EditProductComponent from './component';
import {
    fetchProducts,
} from '../../action';
import {
    fetchProduct,
    setName,
    setDescription,
    setPrice,
    setUrl,
    saveProduct,
} from './action';

const mapStateToProps = state => ({
    id: state.editProduct.id,
    name: state.editProduct.name,
    description: state.editProduct.description,
    price: state.editProduct.price,
    url: state.editProduct.url,
    isValidPrice: state.editProduct.isValidPrice,
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
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(EditProductComponent);