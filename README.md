# Favorite Movies List
###### Developer: Ahsan Qureshi

The front end for an application that allows users to search for movies and save them into a favorites list.

## Introduction
Welcome to the favorite movie list web application. The application stack consists of VueJS for the frontend, Sinatra in Ruby for the backend, and a Mongo database. This is my very first time using any of these technologies, including Ruby. I tried my best to learn and use the best practices for each of these technologies in the short amount of time that I had to create the application, but I am sure that some of those areas are lacking due to the time constraints. You can find some instructions on how best to use this application below [#Instructions].

The application in its entirety was deployed on Heroku.

## Features
The favorite movies list application is a very basic web application with the following features:

1. Search for a movie
2. Save the movie in a favorites list with a rating and a comment
3. Edit the rating and comment in the favorites list
4. Remove a movie from the favorites list

## Instructions
This is a very basic application that does not have an actual user login system. As such, it provides a test username called 'tester' that is automatically 'logged into' when the user clicks the "Login" link at the top left of the application.

1. Click "Login" to login as tester and view movies that have been previously favorited by tester (if any).
2. Type in a movie that you would like to search for in the search bar and press enter to view results.
3. Look for the movie you would like to favorite and click on it.
4. After being redirected to the "Edit Favorites" page, rate the movie by clicking on a star rating and type any comment in the comment text box.
5. Click "Add" to add the movie with the respective comment and rating to the favorites. These favorites are persisted and will be seen regardless of session.
6. Click the "X" button next to a movie in the Favorite Movies side bar to remove it from favorites.
7. To edit the rating and comment, search for the movie again and add it again with different comment and rating. This will replace the previous time that the movie was added to the favorites bar.

*Notes:* 
- Refreshing a page will most likely not persist the logged in status.
- You may search for any movie even when not logged in, but adding the movie to favorites will do nothing.

## Improvements Needed for Production
If this was an actual production application there are a very many number of things that I would add or do differently. Below is a list of these things:

- The backend api would have an authentication mechanism to ensure that the entity that is querying the backend is allowed access.
- The frontend would have an authentication mechanism for users to sign up, log in, and save their own favorite movies. I learned a little bit about Vuex for storing application state once someone is signed in, but decided against looking further into it due to time constraints.
- Clicking on a movie in the favorite movie sidebar would allow a person to edit the movie rating and comment.
- I would ensure that the application was responsive so that it could be viewed on mobile phones and tablets, as well.
- When searching for a movie, there needs to be some sort of indication that the search is currently happening or that there were no results. Currently, there is no indication for either, but movies appear if the search returns results.
- I would have liked to learned more about best practices for writing in Sinatra, VueJS, and MongoDB.
- Add a search button, so you can submit with the button as well as pressing enter.
- Ensure that anyone that is not logged in cannot access the Edit Favorites page, which is the screen that appears after clicking on a specific movie.
- Currently, all api endpoints are post requests in an attempt to not allow people to use it from a browser and to hide the parameters at least a little bit. Once an authentication mechanism to connect to the api was implemented, the endpoints requests would be true to their label; ie. get, post, etc.

Thank you very much for visiting and checking out my application. I hope that you enjoyed my first attempt at VueJS, Sinatra, and Mongo DB.