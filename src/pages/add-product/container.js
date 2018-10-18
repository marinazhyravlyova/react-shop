import { connect } from 'react-redux';
import EditProductComponent from './component';
import {
    addId,
    addName,
    addDescription,
    addPrice,
    addUrl,
    createProduct,
} from './action';

const mapStateToProps = state => ({
    id: state.addProduct.id,
    name: state.addProduct.name,
    description: state.addProduct.description,
    price: state.addProduct.price,
    url: state.addProduct.url,
    isValidPrice: state.addProduct.isValidPrice,
});

const mapDispatchToProps = dispatch => ({
    onSaveButtonClick: () => dispatch(createProduct()),
    onIdChange: (event) => dispatch(addId(event.target.value)),
    onNameChange: (event) => dispatch(addName(event.target.value)),
    onDescriptionChange: (event) => dispatch(addDescription(event.target.value)),
    onPriceChange: (event) => dispatch(addPrice(event.target.value)),
    onUrlChange: (event) => dispatch(addUrl(event.target.value)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(EditProductComponent);