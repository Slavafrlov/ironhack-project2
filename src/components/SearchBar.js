import React from 'react';

class SearchBar extends React.Component {
    state = {
        text: ''
    }

    onInputChange = e => { 
        this.setState({text: e.target.value})
    }

    onFromSubmit = props => {
        props.preventDefault(); 
        // 这个函数是用来防止浏览器自动submit（在输入一段文字后，按回车浏览器会自动刷新
        this.props.onTextSubmit(this.state.text)
        // this.state.text --> 传递当前search的text数据返回给父组件app
    }



    render() {
        return (
            <div className="search-bar ui segment"> {/* ui segment 会给要做的searchbar上画一个矩形框*/}
                <form onSubmit={this.onFromSubmit} className="ui form"> {/* onsubmit会在每次searchBar这个search form被按下回车（被调用）的时候执行， 执行就是一个事件，所以要绑定一个事件函数 */}
                    <div className="field">
                        <label className="ui black label">Video Search</label>
                        <div className="ui icon input focus">
                        <input type="text" value={this.state.text} onChange={this.onInputChange} placeholder="search here" />
                        <i className="invertd circular search icon"></i> 
                    </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;