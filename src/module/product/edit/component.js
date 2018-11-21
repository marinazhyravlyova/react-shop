import React, {Component} from 'react';
import AddCommentComponent from '../../comment/add/component'
import CommentsComponent from '../../comment/list/component'
import './style.scss';

export default class EditProductComponent extends Component {
    componentDidMount() {
        const {productId} = this.props.match.params;

        this.props.fetchProduct(productId);
    }

    render() {
        return (
            <div className="edit-product">
                <div className="title">Edit product</div>
                <div className="edit-container">
                    <div className="edit-field">
                        <span>Edit name: </span>
                        <input
                            value={this.props.name}
                            onChange={this.props.onNameChange}
                        />
                    </div>
                    <div className="edit-field">
                        <span>Edit price: </span>
                        <input
                            value={this.props.description}
                            onChange={this.props.onDescriptionChange}
                        />
                    </div>
                    <div className="edit-field">
                        <span>Edit price:$ {this.props.isValidPrice ? '' : 'NOT VALID'}</span>
                        <input
                            value={this.props.price}
                            onChange={this.props.onPriceChange}
                        />
                    </div>
                    <div className="edit-field">
                        <span>Edit url of image: </span>
                        <input
                            value={this.props.url}
                            onChange={this.props.onUrlChange}
                        />
                    </div>
                    <div className="edit-field">
                        <span>Каллории</span>
                        <input
                            value={this.props.calories}
                            onChange={this.props.onСaloriesChange}
                        />
                    </div>
                    <div className="edit-field">
                        <span>Белки: </span>
                        <input
                            value={this.props.protein}
                            onChange={this.props.onProteinChange}
                        />
                    </div>
                    <div className="edit-field">
                        <span>Жиры: </span>
                        <input
                            value={this.props.fat}
                            onChange={this.props.onFatChange}
                        />
                    </div>
                    <div className="edit-field">
                        <span>Углеводы: </span>
                        <input
                            value={this.props.carbohydrates}
                            onChange={this.props.onСarbohydratesChange}
                        />
                    </div>
                </div>
                <button className="edit-product" onClick={this.props.onSaveButtonClick}>Save</button>
                <AddCommentComponent
                    onCommentAdd={this.props.onCommentAdd}
                />
                <CommentsComponent
                    comments={this.props.comments}
                />
            </div>
        );
    }
}