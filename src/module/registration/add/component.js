import React, { Component } from 'react';
import './style.scss';

export default class AddProductComponent extends Component{
    render() {
        return(<div className="new-product">
            <div className="title">Add new product</div>
            <div className="product-container">
                <div className="field-fill">
                    <span>Product id: </span>
                    <input
                        value={this.props.id}
                        onChange={this.props.onIdChange}
                    />
                </div>

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

            </div>
            <button className="btn-add-product" onClick={this.props.onSaveButtonClick}>Add product</button>
        </div>);
    }
}