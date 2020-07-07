import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import Header from './Header';
import CommentList from './CommentList';
import CommentAdd from './CommentAdd';

const KEY = 'AIzaSyDJE9kiBmQ8Z568QfpqzoazgP_F6391Qqc';


class App extends React.Component {
    // 开始页面的时候为0个video， 当用户使用searchbar输入text寻找视频的时候，
    // 再用video: response.data.items传回state
    state = {
        videos: [], 
        selectedVideo: null,
        comments: [
            {user: 'da jia hao', context: 'haha good'},
            {user: 'wo shi shei', context: 'you are bad heihei'}
        ]
    } 
// defult seacrching， 在打开网页后不输入任何文字在搜索栏直接显示一些推荐视频
    componentDidMount() {
        this.onTextSubmit('Ironhack Miami')
    }
    // 在任何时候如果有人按下回车/ 在search bar打字并submit 这个search form
    // 之后通过YouTube的api让页面跳转到youtube来寻找被search的相关视频
    // 所以需要一个回调函数，这个回调函数会在任何人想要通过searchbar搜索视频的时候被调用
    // 当有人搜索视频的时候，是一个事件
    onTextSubmit = async e => { //这个ontextsubmit 用来接受searchbar js里面 onformsubmit传递回来的search中的文本text，在以相对应的文本通过youtube api搜索相关视频
        const response = await youtube.get('/search', {
            params: {
                q: e,
                part: 'snippet',
                maxResults: 6,
                type: 'video',
                key: KEY
            }
        })
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
    }
    
    //每有一个state 就会有一个call back的回调函数
    // 每个call back的回调函数都是用来接收用户在页面输入/点击操作后传进来的数据
    // app最后再使用setState来更改原有的state，用新的（用户反馈的）来代替
    // 如何修改数据，就是如何修改state.修改了state,react 就会改变页面的内容  
        onVideoSelect = video => {
            this.setState({selectedVideo: video})
    }

        addComment = (e) => {
            this.state.comments.unshift(e)
            this.setState({e})
        }









    render() {
        return (
            <div>
            <Header />
            <div className="ui vertical stripe segment">
            <div className="midui ui container"> {/* ui container在App父类模块中， 控制整个search bar子模块使其margin 和 padding 左右*/}
               <SearchBar onTextSubmit={this.onTextSubmit} />
               <div className="ui grid">
               <div className="ui row">
               <div className="eleven wide column">
                   <VideoDetail video={this.state.selectedVideo} />
               </div>            
               <div className="five wide column">
               <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
    </div>
    </div>
    </div>
    </div>
    </div>
            <div>

            </div>
            



            <div className="ui vertical strip segment">
            <div className="downmid ui container">
            <CommentAdd addComment={this.addComment} />
            <div className="clist">
            <CommentList comments={this.state.comments} />
            </div>
            </div>
        </div>

        <div class="ui inverted vertical footer segment">
    <div class="ui container">
      <div class="ui stackable inverted divided equal height stackable grid">
        <div class="three wide column">
          <h4 class="ui inverted header">About</h4>
          <div class="ui inverted link list">
            <a href="#" class="item">Sitemap</a>
            <a href="#" class="item">Contact Us</a>
            <a href="#" class="item">Religious Ceremonies</a>
            <a href="#" class="item">Gazebo Plans</a>
          </div>
        </div>
        <div class="three wide column">
          <h4 class="ui inverted header"></h4>
          <div class="ui inverted link list">
            <a href="#" class="item"></a>
            <a href="#" class="item"></a>
            <a href="#" class="item"></a>
            <a href="#" class="item"></a>
          </div>
        </div>
        <div class="seven wide column">
          <h4 class="ui inverted header">Videos and Comments</h4>
          <p>Videos and Comments is a website to help people avoiding an extra step into Youtube and a prefect place to share viedos you liked</p>
        </div>
      </div>
    </div>
  </div>







    </div>   
        )
    }
}

export default App;


