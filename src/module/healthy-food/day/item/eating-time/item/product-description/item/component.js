import React, {Component, Fragment} from 'react';

export default class ProductItem extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            productWeight: props.productDescription.weight,
            isEditMode: false,
        }
    }

    onProductWeightChange = (event) => {
        const productWeight = parseInt(event.target.value || '0', 10);

        this.setState({ productWeight });
    };

    onProductSaveClick = () => {
        const { productDescription, onProductChange } = this.props;
        const { productWeight } = this.state;
        
        this.setState({ isEditMode: false });

        onProductChange({
            ...productDescription,
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