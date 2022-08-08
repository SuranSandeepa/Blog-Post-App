import React, { Component } from "react";
import axios from "axios";

export default class CreatePost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topic: "",
      description: "",
      postCategory: "",
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    const { topic, description, postCategory } = this.state;

    const data = {
      topic: topic,
      description: description,
      postCategory: postCategory,
    };

    console.log(data);

    axios.post("http://localhost:8000/post/save", data).then((res) => {
      if (res.data.success) {
        this.setState({
          topic: "",
          description: "",
          postCategory: "",
        });
      }
    });
  };

  render() {
    return (
      <div className="col-md-8 mt-4 mx-auto">
        <br />
        <h1 className="h3 mb-3 font-weight-normal">Create New Post</h1>
        <br />
        <form className="needs-validation" noValidate>
          <div class="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Topic</label>
            <input
              type="text"
              className="form-control"
              name="topic"
              placeholder="Enter Topic"
              value={this.state.topic}
              onChange={this.handleInputChange}
            />
          </div>

          <div class="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Description</label>
            <input
              type="text"
              className="form-control"
              name="description"
              placeholder="Enter Description"
              value={this.state.description}
              onChange={this.handleInputChange}
            />
          </div>

          <div class="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Category</label>
            <input
              type="text"
              className="form-control"
              name="postCategory"
              placeholder="Enter Category"
              value={this.state.postCategory}
              onChange={this.handleInputChange}
            />
          </div>

          <button
            type="submit"
            className="btn btn-success"
            style={{ marginTop: "15px" }}
            onClick={this.onSubmit}
          >
            <i className="fa fa-check-square"></i>&nbsp;Save
          </button>
        </form>
      </div>
   );
  }
 
}
