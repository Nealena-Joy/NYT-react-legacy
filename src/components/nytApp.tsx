import React, { Component, useState } from 'react';
//import NytResults from './nytResults';
import {RootObject, Response} from './interface';
import { stringify } from 'querystring';

const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const key = 'bHufGMwgC3c2dZWBAs0VoiHjsp5qJGwA';

export default class NytApp extends Component<any, any> {   
  
    constructor(props: any) {
      super(props);
      this.state = {
        value: 'test',
        startDate: '',
        endDate: '',
      }
      this.handleSearchChange = this.handleSearchChange.bind(this);
      this.handleStartDateChange = this.handleStartDateChange.bind(this);
      this.handleEndDateChange = this.handleEndDateChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }


    fetchResults = (value) => {
        const search = value;

        let url = `${baseURL}?api-key=${key}&page=1&q=${search}`;
        url = this.handleStartDateChange ? url + `&begin_date=${this.handleStartDateChange.value}` : url;
        url = this.handleEndDateChange ? url + `&end_date=${this.handleEndDateChange.value}` : url;

        fetch(url)
          .then(res => res.json())
          .then(data => this.setState(data.response.docs))
          .catch(err => console.log("Fetch Error:", url));
    };

    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form Submit")
        this.fetchResults();
        
    }

    handleSearchChange = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({text: e.currentTarget.value});
        console.log("Search:", e.currentTarget.value)
    }

    handleStartDateChange = (e: React.FormEvent<HTMLInputElement>) => {
      this.setState({date: e.currentTarget.value});
    }

    handleEndDateChange = (e: React.FormEvent<HTMLInputElement>) => {
      this.setState({date: e.currentTarget.value});
    }


    // changePageNumber = (event, direction) => {
    //     event.preventDefault()
    //     if (direction === 'down') {
    //       if (pageNumber > 0) {
    //         setPageNumber(pageNumber - 1)
    //         fetchResults();
    //       }
    //     }
    //     if (direction === 'up') {
    //       setPageNumber(pageNumber + 1)
    //       fetchResults();
    //     }
    // }
    render() {
    return (
    <div className="main">
      <div className="mainDiv">
        <form onSubmit={(e) => this.handleSubmit(e)}>
            <span>Enter a single search term (required) : </span>
            <input type="text" name="search" onChange={this.handleSearchChange} required />
            <br />

            <span>Enter a start date: </span>
            <input type="date" name="startDate" pattern="[0-9]{8}" onChange={this.handleStartDateChange} value={this.value} />
            <br />
            
            <span>Enter an end date: </span>
            <input type="date" name="endDate" pattern="[0-9]{8}" onChange={this.handleEndDateChange} />
            <br />
            
            <button className="submit">Submit search</button>
        </form>
       
      </div>
    </div>
    );
  }
};