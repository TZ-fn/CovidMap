# Covid Map

![Screenshot of the app](https://github.com/TZ-fn/CovidMap/blob/main/assets/img/CovidMapScreenshot.jpg)

## About

This is an app that allows users to check various statistics about Covid-19 around the world.

This app uses the [disease.sh]('https://disease.sh/') API as a source of data.

## Usage

Users can check the current number of Covid-19 cases around the world using the main map, as well as two lists: most cases and most vaccine doses administrated.

Both countries on the maps and countries on the lists are links to an individual country's details page. You can also use a search bar to find a country and see its details page.

On the details page, users can check the number of cases and deaths day by day for a year back. They are displayed on two area charts.

## Live version

Live version can be found [here]('').

## Technologies I used

Next.js

React

TypeScript

styled-components

Leaflet

React-Leaflet

Recharts

Jest

React Testing Library

## What problems I had encountered

One of the main problems for me was the lack of sufficient documentation for the react-leaflet, many of the issues had to be solved by referring to the original Leaflet documentation. Mainly I had some problems with styling and working with GeoJSON objects, but they were all eventually solved.

Another challenge for me was using TypeScript in this project. This is the first time I was using it and had some troubles with solving all the errors that I encountered. One of them was using TypeScript along with the styled-components and typing its theme object.
