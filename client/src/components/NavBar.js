import React, { Component } from "react";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav
          class="navbar navbar-expand-sm bg-dark navbar-dark"
          style={{ backgroundColor: "#ADD8E6" }}
        >
          <a class="navbar-brand" href="/">
            Home
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            {/* <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="/create">
                  Create <span class="sr-only"></span>
                </a>
              </li>
              {/* <li class="nav-item">
                <a class="nav-link" href="#">
                  Features
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#">
                  Disabled
                </a>
              </li> 
            </ul> */}
          </div>
        </nav>
      </div>
    );
  }
}
