# My Movies App



Everyone has a list of favorite movies that they never get tired of watching.
This project is a web application that allows you to create and manage your personal catalog of the movies you like most.
You can add new movies to watch and divide them into categories.

This way you will never miss any movie again because you will have your list always updated and at hand.


#### Description:

This project is an example about how to build a responsive and mobile friendly website with [VueJS], retrieving the data with an api call from a json file (films.json) updating the internal state of the application store.

This project wants to be a similar representation of the most popular and cool streaming movie websites like NetFlix/Amazon Prime.
This is only for didactic and private purposes, intended for this exam, in order to show acquired abilities to reproduce and create professional content websites.

Images and movies descriptions from [TVMaze] Free Public API.


Browsing the Home page, the user can explore the showcase movie list and search for specific movies.
The homepage displays a slider containing an example of the 'most popular' movies of the moment.

The catalog is divided into serverl categories including **adventure / romantic / comedy**.
By selecting each category, the user is redirected to a SERP result page that will display movies filtered by the selected category.
By clicking the movies postcard, the user will be redirected to a movie detail page containing several informations including the poster image, plot, actors, categories and movie's trailer.

It is possible to star movies, and add them to the favourites list in order to quickly find them later.
This allows users to create their own personal movies catalog, according to their preferences.
The user can also add new films to the list by filling in the appropriate **form** with related controls for input patterns and required fields.
Here it's possible to input the title, a description, check several categories, add the cast, trailer and add the postcard image, via URL or uploading it.



#### Architecture:

The project is a SPA (Single Page Application) that retrieves the data from a JSON file and updates its internal state (vue store) after caching the data.
The store includes the module 'filmsStore' composed by few actions and mutations.
This module allows to load movies on the store from the server, retrieve film details, and add new movies in the application store.
The internal state changes are managed via Vuex following Flux pattern.

The navigation of the pages is managed with specific routes and passage of parameters in query strings.
There are the following pages: Home, MoviesPage (SERP), Movie Details Page, Add Movie page.
It's worth to note that the MoviesPage is able to filter and display movies according to specific filters or parameters like categories and favourite flag.
This page is also able to receive a query string parameter containing the user searched value, and then apply that filter over the movies list.
This is possible thanks to the MoveiListSerp.vue component, that is able to distinguish several scenarios, apply filters, change routes and access application store when needed.

A global search is available in the navbar component of the website; from every webpage the user is able to search and filter movies on the title field.

The site is responsive and mobile friendly, the sliders are handmade created with pure HTML, CSS, and JS code (CategorySlider component). 

It is possible to add movies to the favourite list by clicking the 'star' icon over the movies postcard, or from the movie detail page using the proper action button.
Its's possible to remove favourite flag as well with related UI components.

Each movie has an available trailer, that is a youtube link that will be opened in the same page as content modal via iframe.

A new movie can be added through corresponding form, with required fields and custom rules.


##### Tecnologies

Javascript, HTML, CSS, Vue, HTTP, REST, API CALL, Ajax, Bootstrap, JSON.


## Install
```
npm install
```

### Run locally
```
npm run serve
```

## License


MIT

## Version

0.1.0



[VueJS]: <https://vuejs.org>
[TVMAze]: <https://www.tvmaze.com/api>
