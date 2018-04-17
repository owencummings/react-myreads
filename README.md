# React MyReads, an Udacity Project

A single-page web app built to manage a list of a user's reading interests. Data is fetched from Udacity's Book API that was provided for the project.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

Simply fork the reposity and run 

```
npm install 
```

and then 

``` 
npm run 
```


## What I learned

Conditional UI rendering and simple state management in React. Managed state with smaller subcomponents by passing the required functions and variables through props.


## What could be improved

I had two different components (ListElement and SearchListElement) that share UI and serve the same purpose, just have slightly different functionality. I should be able to merge these into one component.

In a larger application, passing state management through props is complicated and just inefficient. I hope that learning Redux in my next project will simplify state management.
