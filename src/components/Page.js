import React, { Component } from "react";
import API from "../utils/API";
import Table from "./Table";
import Search from "./Search";

class Page extends Component {
  state = {
    employees: [],
    filter: "",
    sort: ""
  };

  async componentDidMount() {
    const employeesData = await API.getEmployees();
    console.log(employeesData);
    this.setState({ employees: employeesData });
    console.log(this.state);
  }

  handleInputChange = event => {
    this.setState({ filter: event.target.value });
  }

  filterEmployees = event => {
    event.preventDefault();

    const filteredEmployees = this.state.employees.filter(employee => {
      const nameUC = employee.name.toUpperCase();
      const filterUC = this.state.filter.toUpperCase();
      return (nameUC.includes(filterUC));
    });

    this.setState({ employees: filteredEmployees });
  }

  sortEmployees = () => {
    const sortedEmployees = this.state.employees.sort((em1, em2) => (em1.name > em2.name) ? 1 : -1);

    this.setState({ employees: sortedEmployees });
  }

  render() {
    return (<div>
      <Search handleInputChange={this.handleInputChange} filter={this.filter} filterEmployees={this.filterEmployees} />
      <Table sortEmployees={this.sortEmployees} employees={this.state.employees} />
    </div>);
  }
}

export default Page;