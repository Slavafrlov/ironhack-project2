import React from 'react';
import CommentItem from './CommentItem'

export default class CommentList extends React.Component {


    render() {
        return (
            <div className="ui comments">
                {
                    this.props.comments.map((v, i) => {
                        return <CommentItem key={i} comment={v} i={i} />
                    })
                }
            </div>
        )
    }
}