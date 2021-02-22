import React, { Component } from 'react'
import data from './prostars.json'
import './App.css'
export default class Stars extends Component {
    constructor() {
        super()
        this.state = {
            dataset: [data[0], data[1], data[2], data[3], data[4]],
            count: 5,
        }
    }
    displaystars = () => {
        const dataeach = this.state.dataset;
        return (
            dataeach.map(e => {
                <tr key={e.name}>
                    {console.log("entered")}
                    <td>hello{e.name}</td>
                    <td><img src={e.pictureUrl} alt="" /></td>
                    <td>{e.popularity}</td>
                    <td>{e.id}</td>
                </tr>
            })
        )
    }
    addprostar() {
        this.setState({
            count: this.state.count + 1
        })
        this.setState({
            dataset: this.state.dataset.concat(data[this.state.count])
        })
    }
    sortbyname() {
        var datatobedsorted = this.state.dataset;
        datatobedsorted.sort((Name1, Name2) => {
            if (Name1.name.toLocaleLowerCase() < Name2.name.toLocaleLowerCase()) {
                return -1
            }
            else if (Name1.name.toLocaleLowerCase() > Name2.name.toLocaleLowerCase()) {
                return 1
            }
            else {
                return 0
            }
        });
        this.setState({ dataset: datatobedsorted });
    }
    sortbypopularity() {
        var datatobedsorted = this.state.dataset;
        datatobedsorted.sort((Name1, Name2) => {
            if (Name1.popularity < Name2.popularity) {
                return -1
            }
            else if (Name1.popularity < Name2.popularity) {
                return 1
            }
            else {
                return 0
            }
        });
        this.setState({ dataset: datatobedsorted });
    }
    render() {
        return (
            <div>
                <div className="buttons"></div>
                <button onClick={this.addprostar}>click to add prostar</button>
                <button onClick={this.sortbypopularity}>sortbypopularity</button>
                <button onClick={this.sortbyname}>sortbyname</button>
                <table id="tableis">

                    <td>Name</td>
                    <td>Picture</td>
                    <td>Popularity</td>
                    <td>Id</td>
                    <tbody>
                        {this.displaystars}
                    </tbody>
                </table>
            </div>
        )
    }
}
