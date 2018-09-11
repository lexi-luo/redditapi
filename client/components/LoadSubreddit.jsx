import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'



class LoadSubreddit extends React.Component {
  constructor(props) {
    super(props);
    // let dispatch = props.dispatch

    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
  }

    render() {
      let dispatch = this.props.dispatch
      // let input = 
      
      return (
    
    <div>
    <form onSubmit={this.handleSubmit}>
    <input id ='search' type='text' value={this.state.value} className='' onChange={this.handleChange}/>
</form>

    <button onClick={() => dispatch(fetchPosts(this.state.value))}>
    Fetch Posts
  </button>
 
  </div>
    );
    
    }
  }

export default connect()(LoadSubreddit)

// import React from 'react'
// import {connect} from 'react-redux'
// import {fetchPosts} from '../actions'



// const LoadSubreddit = (props) => {
//   let dispatch = props.dispatch
  
//   return (
// // let {dispatch} = props
//     <div>
//     <form><input id ='' type='text' value='' className='' />
//   </form>
//   <button onClick={() => dispatch(fetchPosts('wellington'))}>
//     Fetch Posts
//   </button>
//   </div>
// )}

// export default connect()(LoadSubreddit)
