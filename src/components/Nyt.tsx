import React, { Component } from 'react'

export default class NYT extends Component {
    constructor(props: number) {
        super(props);
        this.state = {
            isFetching: false,
            value: ''
        }

    }

    fetchArticle = () => {
        fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=&api-key=ZCYXcqbKppUywDwtcOqEBdQc3MUutOOu`)
            .then(response => response.json())
            .then(results => {
                this.setState({results})
                console.log(results);
                
            })

            .catch(e => {
                console.log(e);
               
                
            })
    }

    handleChange(event: any) {
        this.setState({value: event.target.value})
    }

    handleSubmit(event: any) {
        event.preventDefault();
        this.setState({value: event.target.value})
        
    }

    
    render(){
        return(
            <div>
                <h1>NY Times Article Search</h1>
                <form action="" onSubmit={this.handleSubmit} >
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <button>Submit</button>
                </form>
            </div>
        )
    }

  

    


}