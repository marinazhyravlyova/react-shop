import React, {Component} from 'react';
import './style.scss';

export default class AddCommentsComponent extends Component {
    constructor(...rest) {
        super(...rest);
        
        this.state = {
            id: '',
            content: '',
        };
        
        this.onIdChange = this.onIdChange.bind(this);
        this.onContentChange = this.onContentChange.bind(this);
        this.onAddButtonClick = this.onAddButtonClick.bind(this);
    }

    onIdChange(event) {
        const id = event.target.value;
        
        this.setState({ id });
    }

    onContentChange(event) {
        const content = event.target.value;
        
        this.setState({ content });
    }

    onAddButtonClick() {
        const { id, content } = this.state;
        const comment = { id, content };
        
        this.props.onCommentAdd(comment);
    }
    
    render() {
        return (
            <div className="new-comment">
                <div className="title">Add new comment</div>
                <div className="comment-container">
                    <span>Please write a comment:</span>
                    <input
                        value={this.state.id}
                        onChange={this.onIdChange}
                    />
                    <input
                        value={this.state.content}
                        onChange={this.onContentChange}
                    />
                </div>
                <button className="btn-add-product" onClick={this.onAddButtonClick}>Add comment</button>
            </div>
        );
    }
}