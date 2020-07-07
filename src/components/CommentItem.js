import React from 'react';

export default class CommentItem extends React.Component {

    render() {
        return (
            <div class="ui threaded comments">
            <h3 class="ui dividing header">Comments</h3>
                <div class="comment">
                    <a class="avatar" />
                        <img src="/images/avatar/small/joe.jpg" />
                            <div class="content">
                                <a class="author">{this.props.comment.user}</a>
                                    <div class="metadata">
                                        <div class="date">1 day ago</div>
                                    </div>
            <div class="text">
                <p>{this.props.comment.context} </p>
                    </div>
                        <div class="actions">
                            <a class="reply">Reply</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}