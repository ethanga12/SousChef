import React, { Component } from 'react'

export default class Recipes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: []
        }
    }
    componentDidMount() {
        console.log("this is where fetch requests go");
        this.setState({

        recipes: [{id: 1, title: "Travis Scott Borger", summary: "Yummy borgar mcdonal"}, 
        {id: 2, title:"thos beans", summary:"mmm im thinkin bout thos beans"}, 
        {id: 3, title:"swag time react", summary:"we goin react mode"}]
        });
    }

    render() {
        const recipeItems = this.state.recipes.map(recipe => (
            <div key={recipe.id}>
                <h3>{recipe.title}</h3>
                <p>{recipe.summary}</p>
            </div>
        ))
        return (
            <div>
                <h1>Recipes</h1>
                {recipeItems}
            </div>
        )
    }
}
