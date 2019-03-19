import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AddProject from "./AddProject";

class ProjectList extends Component {
  state = { listOfProjects: [] };
  getAllProjects = () => {
    axios({
      method: "get",
      url: `http://localhost:5000/api/projects`,
      withCredentials: true
    }).then(responseFromApi => {
      this.setState({
        listOfProjects: responseFromApi.data
      });
    });
  };
  componentDidMount = () => this.getAllProjects();
  render() {
    return (
      <div>
        <div style={{ width: "60%", float: "left" }}>
          {this.state.listOfProjects.map(project => {
            return (
              <div key={project._id}>
                <Link to={`/projects/${project._id}`}>
                  <h3>{project.title}</h3>
                </Link>
              </div>
            );
          })}
        </div>
        <div style={{ width: "40%", float: "right" }}>
          <AddProject getData={() => this.getAllProjects()} />
        </div>
      </div>
    );
  }
}

export default ProjectList;
