import React from 'react';
import { Card, Button, CardHeader, CardBody, Form, FormGroup, Label, Input, } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Search extends React.Component<any, any> {
    constructor(props: any){
        super(props)
        this.state = {
            query: '',
            value: '',
            start: '',
            end:''
        }
        this.search = this.search.bind(this);

    }
    search(){
        const API_KEY = 'ETzibwJ0jjywaBTaGSAkh7S9TiqDzURu';

        const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${API_KEY}&page=${pageNumber}&q=${searchTerm.value}`;

        fetch(url)
            console.log("URL:", url);

            .then((res) => res.json());
            .then((data) => (this.setState({query: data.title})))
            .catch(error => console.log("Fetch Error:", error))

    }

    render() {
        return(
            <div>
                <h3>Search for articles</h3>
                <Form onClick={this.search}>
                    <FormGroup>
                    <label htmlFor="search">Enter a SINGLE search term (required): </label>
                    <input type="text" id="search" className="search" required value={this.props.value}/>
                    <br/>
                    </FormGroup>

                    <FormGroup>
                    <label htmlFor="start-date">Enter a start date (format YYYYMMDD): </label>
                    <input type="date" id="start-date" className="start-date" pattern="[0-9]{8}" value={this.props.start}/>
                    <br/>
                    </FormGroup>

                    <FormGroup>
                    <label htmlFor="end-date">Enter and end date (format YYYYMMDD): </label>
                    <input type="date" id="end-date" className="end-date" pattern="[0-9]{8}" value={this.props.end}/>
                    <br/>
                    </FormGroup>

                    <Button type="submit">Search</Button>
                </Form>
            </div>
        )
    }
}

export default Search;