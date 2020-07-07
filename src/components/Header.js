import React from 'react';
import './ViedoItem.css'


export default class Header extends React.Component {

    render() {
        return (
            <div className="ui inverted vertical masthead center algned segment">
                <div className="ui container">
                <div className="ui large secondary inverted pointing menu">
                    <a className="active item" href="#">Home</a>
                    <a className="active item" href="https://youtube.com">Youtube</a>
                    <a className="active item" href="https://github.com/i-le">Github</a>
                    <div className="right item">
                        <a className="ui inverted button">Log In</a>
                        <a className="ui inverted button">Sign Up</a>
                    </div>
                </div>
                </div>
                <div className="ui text container">
                <h1 className="ui inverted header">
                    Videos and Comments
                </h1>
                <h2>Leave a message if you liked this website</h2>
                <div className="ui huge primary button">Post Comments
                <i className="right arrow icon"></i>
                </div>
                </div>
            </div>
        )
    }
}