import React, {Component, Fragment} from 'react';

export default class ProductItem extends Component {
    state = {
        productWeight: null,
        isEditMode: false,
    };

    onProductWeightChange = (event) => {
        const productWeight = parseInt(event.target.value, 10);

        this.setState({ productWeight });
    };

    componentWillUpdate(newPros) {
        if (newPros.productDescription.weight !== this.state.productWeight) {
            this.setState({productWeight: newPros.productDescription.weight});
        }
    }

    onProductSaveClick = () => {
        const { product, onProductChange } = this.props;
        const { productWeight } = this.state;
        
        this.setState({ isEditMode: false });

        onProductChange({
            ...product,
            weight: productWeight,
        });
    };

    onProductEditClick = () => {
        this.setState({ isEditMode: true });
    };

    onProductDelete = () => {
        const { productDescription, onProductDelete } = this.props;

        onProductDelete(productDescription);
    };

    render() {
        const {
            productDescription,
        } = this.props;
        const { isEditMode, productWeight } = this.state;

        return (() => {
            if (isEditMode) {
                return (
                    <Fragment>
                        <div className='product-name'>{productDescription.product.name}</div>
                        <input
                            value={productWeight}
                            onChange={this.onProductWeightChange}
                        />
                        <button
                            onClick={this.onProductSaveClick}
                        >
                            Save
                        </button>
                    </Fragment>
                );
            }

            return (
                <div className='eating-time-product-item'>
                    <div className='product-name'>{productDescription.product.name}</div>
                    <div className='product-weight'>{productDescription.weight}</div>
                    <div className='action-bar'>
                        <div className='action-item'
                             onClick={this.onProductEditClick}>
                            Edit
                        </div>
                        <div className='action-item'
                             onClick={this.onProductDelete}>
                            Delete
                        </div>
                    </div>
                </div>
            );
        })();
    }
}