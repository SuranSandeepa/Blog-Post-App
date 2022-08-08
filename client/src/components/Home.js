import React, { Component } from "react";
import axios from "axios";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    this.retrievePosts();
  }

  retrievePosts() {
    axios.get("http://localhost:8000/posts").then((res) => {
      if (res.data.success) {
        this.setState({
          posts: res.data.existingPosts,
        });
        console.log(this.state.posts);
      }
    });
  }

  //Delete Post
  onDelete = (id) => {
    axios.delete(`http://localhost:8000/post/delete/${id}`).then((res) => {
      alert("Post Deleted Successfully");
      this.retrievePosts();
    });
  };

  filterData(posts, searchKey) {
    const result = posts.filter(
      (post) =>
        post.topic.toLowerCase().includes(searchKey) ||
        post.description.toLowerCase().includes(searchKey) ||
        post.postCategory.toLowerCase().includes(searchKey)
    );
    
    this.setState({ posts: result });
  }

  handleSearchArea = (event) => {
    const searchKey = event.currentTarget.value;

    axios.get("http://localhost:8000/posts").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingPosts, searchKey);
      }
    });
  };

  render() {
    return (
      <div className="container">
        <br></br>
        <h1 align="center">All Posts</h1>
        <div className="col-lg-3 mt-2 mb-2">
          <input
            type="search"
            className="form-control"
            placeholder="Search"
            name="searchQuery"
            onChange={this.handleSearchArea}
          />
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Topic</th>
              <th scope="col">Description</th>
              <th scope="col">Post Category</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((posts, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>
                  <a
                    href={`/post/${posts._id}`}
                    style={{ textDecoration: "none" }}
                  >
                    {posts.topic}
                  </a>
                </td>
                <td>{posts.description}</td>
                <td>{posts.postCategory}</td>
                <td>
                  <a className="btn btn-warning" href={`/edit/${posts._id}`}>
                    <i className="fa fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <a
                    className="btn btn-danger"
                    href="#"
                    onClick={() => this.onDelete(posts._id)}
                  >
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button className="btn btn-success">
          <a href="/create" style={{ textDecoration: "none", color: "white" }}>
            Create Post
          </a>
        </button>
      </div>
    );
  }
}
