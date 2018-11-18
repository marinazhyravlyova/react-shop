import React, {Component} from 'react';
import './style.scss';

export default class AddProductComponent extends Component {
    render() {
        return (
            <div className="new-product">
                <div className="title">Add new product</div>
                <div className="product-container">
                    <div className="field-fill">
                        <span>Product name: </span>
                        <input
                            value={this.props.name}
                            onChange={this.props.onNameChange}
                        />
                    </div>
                    <div className="field-fill">
                        <span>Product description: </span>
                        <input
                            value={this.props.description}
                            onChange={this.props.onDescriptionChange}
                        />
                    </div>
                    <div className="field-fill">
                        <span>Product price: </span>
                        <input
                            value={this.props.price}
                            onChange={this.props.onPriceChange}
                        />
                    </div>
                    <div className="field-fill">
                        <span>Product img(url): </span>
                        <input
                            value={this.props.url}
                            onChange={this.props.onUrlChange}
                        />
                    </div>
                    <div className="field-fill">
                        <span>Каллории</span>
                        <input
                            value={this.props.calories}
                            onChange={this.props.onСaloriesChange}
                        />
                    </div>
                    <div className="field-fill">
                        <span>Белки: </span>
                        <input
                            value={this.props.protein}
                            onChange={this.props.onProteinChange}
                        />
                    </div>
                    <div className="field-fill">
                        <span>Жиры: </span>
                        <input
                            value={this.props.fat}
                            onChange={this.props.onFatChange}
                        />
                    </div>
                    <div className="field-fill">
                        <span>Углеводы: </span>
                        <input
                            value={this.props.carbohydrates}
                            onChange={this.props.onСarbohydratesChange}
                        />
                    </div>
                </div>
                <button className="btn-add-product"
                        onClick={this.props.onSaveButtonClick}>
                    Add product
                </button>
            </div>
        );
    }
}