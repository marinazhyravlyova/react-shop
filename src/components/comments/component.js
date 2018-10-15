import React, {Component} from 'react';
import './style.scss';

export default class CommentsComponent extends Component {
    render() {
        return (
            <div className="all-comments">
                <div className="title">All comments</div>
                {(this.props.comments || []).map((comment, index) => <div key={index}>{comment.content}</div>)}
            </div>
        );
    }
}