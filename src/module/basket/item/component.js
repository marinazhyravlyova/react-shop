import React, {Component} from 'react';

export default class BasketComponent extends Component {
    render() {
        return (
            <div className="all-comments">
                <span>{this.props.productIds.length}</span>
            </div>
        );
    }
}