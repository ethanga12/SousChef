import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    slidesToSlide: 6 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
    slidesToSlide: 4 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  }
};
const images = [
  "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550330039-a54e15ed9d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
];

const recipes = [{ id: 1, title: "Travis Scott Borger", summary: "Yummy borgar mcdonal lorem ipsum lorem ipsum ayo lorem ipsum lorem ipsum", image: "https://preview.redd.it/mo7do1igusk51.jpg?width=640&crop=smart&auto=webp&s=b7a971ee8a1a17f3f6f7d814151ff7133027c2fd" },
{ id: 2, title: "thos beans", summary: "mmm im thinkin bout thos beans test text lorem ipsum lorem ipsum ayo lorem ipsum lorem ipsum", image: "https://i.kym-cdn.com/entries/icons/original/000/019/104/6bf.jpg" },
{ id: 3, title: "swag time react", summary: "we goin react mode lorem ipsum lorem ipsum ayo lorem ipsum lorem ipsum", image: images[0] },
{ id: 4, title: "test again test again", summary: "lorem ipsum dolor sit amet lorem ipsum lorem ipsum ayo lorem ipsum lorem ipsum", image: images[1]},
{ id: 5, title: "test test #5", summary: "just hold on we're going home lorem ipsum lorem ipsum ayo lorem ipsum lorem ipsum", image: images[2]},
{ id: 6, title: "not enjoying writing these", summary: "wish i had come up with a theme lorem ipsum lorem ipsum ayo lorem ipsum lorem ipsum", image: images[3]},
{ id: 7, title: "theming sample data is way more fun", summary: "alas, my sample data is gibberish lorem ipsum lorem ipsum ayo lorem ipsum lorem ipsum", image: images[4]},
{ id: 8, title: "i think this is probably enough now", summary: "honestly we'll see though lorem ipsum lorem ipsum ayo lorem ipsum lorem ipsum", image: images[5]},
{ id: 9, title: "a few more", summary: "lowkey though lorem ipsum lorem ipsum ayo lorem ipsum lorem ipsum", image: images[6]},
{ id: 10, title: "selected ambient javascript 85-92", summary: "stiff smile just like im aphex twin lorem ipsum lorem ipsum ayo lorem ipsum lorem ipsum", image: images[7]},
{ id: 11, title: "man oh man more data", summary: "pretty swag tho imo lorem ipsum lorem ipsum ayo lorem ipsum lorem ipsum", image: images[8]},
{ id: 12, title: "not going to lie wish there was a sample dataset", summary: "but alas my own format lorem ipsum lorem ipsum ayo lorem ipsum lorem ipsum", image: images[9]},
{ id: 13, title: "thank u to the repo that had an array of image urls", summary: "lowkey made this way easier lorem ipsum lorem ipsum ayo lorem ipsum lorem ipsum", image: images[10]},
{ id: 14, title: "Travis Scott Borger", summary: "Yummy borgar mcdonal lorem ipsum lorem ipsum ayo lorem ipsum lorem ipsum", image: "https://preview.redd.it/mo7do1igusk51.jpg?width=640&crop=smart&auto=webp&s=b7a971ee8a1a17f3f6f7d814151ff7133027c2fd" },
{ id: 15, title: "thos beans", summary: "mmm im thinkin bout thos beans test text lorem ipsum lorem ipsum ayo lorem ipsum lorem ipsum", image: "https://i.kym-cdn.com/entries/icons/original/000/019/104/6bf.jpg" },
{ id: 16, title: "swag time react", summary: "we goin react mode lorem ipsum lorem ipsum ayo lorem ipsum lorem ipsum", image: images[0] },
{ id: 17, title: "test again test again", summary: "lorem ipsum dolor sit amet lorem ipsum lorem ipsum ayo lorem ipsum lorem ipsum", image: images[1]},
{ id: 18, title: "test test #5", summary: "just hold on we're going home lorem ipsum lorem ipsum ayo lorem ipsum lorem ipsum", image: images[2]},
{ id: 19, title: "not enjoying writing these", summary: "wish i had come up with a theme lorem ipsum lorem ipsum ayo lorem ipsum lorem ipsum", image: images[3]},
{ id: 20, title: "theming sample data is way more fun", summary: "alas, my sample data is gibberish lorem ipsum lorem ipsum ayo lorem ipsum lorem ipsum", image: images[4]},
{ id: 21, title: "i think this is probably enough now", summary: "honestly we'll see though lorem ipsum lorem ipsum ayo lorem ipsum lorem ipsum", image: images[5]},
{ id: 22, title: "a few more", summary: "lowkey though lorem ipsum lorem ipsum ayo lorem ipsum lorem ipsum", image: images[6]},
{ id: 23, title: "selected ambient javascript 85-92", summary: "stiff smile just like im aphex twin lorem ipsum lorem ipsum ayo lorem ipsum lorem ipsum", image: images[7]},
{ id: 24, title: "man oh man more data", summary: "pretty swag tho imo lorem ipsum lorem ipsum ayo lorem ipsum lorem ipsum", image: images[8]},
{ id: 25, title: "not going to lie wish there was a sample dataset", summary: "but alas my own format lorem ipsum lorem ipsum ayo lorem ipsum lorem ipsum", image: images[9]},
{ id: 26, title: "thank u to the repo that had an array of image urls", summary: "lowkey made this way easier lorem ipsum lorem ipsum ayo lorem ipsum lorem ipsum", image: images[10]}
];

const recipeItems = recipes.map(recipe => (
    <div className="recipeSlide" id={recipe.id}>
        <img className="recipeImage" src = {recipe.image }alt={recipe.title}></img>
        <h1 className="recipeTitle">{recipe.title}</h1>
        <p className="recipeSummary">{recipe.summary}</p>
        </div>));


export default class Responsive extends Component {

  render() {
      return (<Carousel
        swipeable={false}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infiniteLoop={true}
        autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        customTransition="all 0.5"
        transitionDuration={500}
        containerClass="carousel-container"
        deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
      {recipeItems}
      </Carousel>);
  }
}