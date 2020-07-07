import React from 'react';
import './ViedoItem.css'

export default class CommentAdd extends React.Component {
    state = {
        user: '',
        context: ''
    }

    change = (e) => {
        const user = e.target.value
        this.setState({user})
    }

    changeContext = (e) => {
        const context = e.target.value
        this.setState({context})
    }

    submit = (e) => {
        e.preventDefault()
        this.props.addComment(this.state)
        this.setState({
            user: '',
            context: ''
        })
    }

    render() {
        return (
            <div className="ui comments">
                <form class="ui reply form">
                    <h2>User Name: </h2>
                         <input placeholder="your name here" value={this.state.user} onChange={this.change} />    
                            <div class="field">
                            <textarea value={this.state.context} onChange={this.changeContext} />
                            </div>
                            <div class="ui primary submit labeled icon button" onClick={this.submit}>
                            <i class="icon edit"></i> Add Comment
                            </div>
                        </form>
            </div>                     
        )
    }
}