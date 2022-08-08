import React, { Component } from "react";
import axios from "axios";


export default class PostDetails extends Component {
  constructor(props) { 
    super(props);
    this.state = {
      post: {},
    };
  }

  //only retriev Specific componet data 
  componentDidMount() { 
    const id = this.props.match.params.id;

    axios.get(`http://localhost:8000/post/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          post: res.data.post
        });

        console.log(this.state.post);
      }
    });
  }

  render() {

const {topic, description, postCategory} = this.state.post;

      return (
        <div className="col-md-8 mt-4 mx-auto">
          <br />
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{topic}</h5>
              <p className="card-text">
                Description : {description} <br />
                Post Category : {postCategory}
              </p>
            </div>
          </div>
        </div>
      );
  }
}
