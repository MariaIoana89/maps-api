# Neighboord Map
The project was built for the Udacity Front End Nanodegree Program. 

## Description
1. This is a project developed with React framework , it is a neighborhood map that will let you search for some locations in a specific area.

2. In this application , the main page displays a map of an area in Mamaia, Constanta, Romania with multiple locations and markers. The user can search and select a specific location from the list provided and receive some information (location type, address, etc.) 

3. We use Package so you can search for any place to get Places Prediction depending on user query if you select its map will be rendered with new points [lat -lng].

4. If you click on any marker it will load data depending on its location.
5. When the project starts the tags will be rendered by default so the user can remove any one of them or remove all then search for any place and select desired tags.

## How To Use it 
1. Clone Project https://github.com/MariaIoana89/maps-api
2. Run command `npm install` to install all packages in package.json file 
3. To start Project run `npm start` 

## 3th Party APIS I Use For this project 
1. [Foursquare](https://foursquare.com/)
2. GoogleMap Library [google-map-react](https://github.com/google-map-react/google-map-react)
3. [Places Autocomplete Service API](https://developers.google.com/places/web-service/autocomplete)

## Dependencies
The following npm packages:
* escape-regexp
* google-maps-react

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

NOTE: The service workers for this app will only cache the site when it is in production mode.
