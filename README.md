# Covid Map

![Screenshot of the app](https://github.com/TZ-fn/CovidMap/blob/main/assets/img/CovidMapScreenshot.jpg)

## About

This is an app that allows users to check various statistics about Covid-19 from around the world.

This app uses the [disease.sh](https://disease.sh/) API as a source of data.

## Usage

Users can check the current number of Covid-19 cases around the world using the main map, as well as two lists: most cases and most vaccine doses administrated.

Both countries on the maps and countries on the lists are links to an individual country's details page. You can also use a search bar to find a country and see its details page.

On the details page, users can check the number of cases and deaths day by day for a year back. They are displayed on two area charts.

Users can also switch between dark and light color themes using a switch in the top-right corner of the header.

## Live version

The live version can be found [here](https://covid-map-chi.vercel.app/).

## Running the project locally

Clone or download this repository.

Run `npm install` then `npm run dev` in the main directory.

Open `http://localhost:3000` to view the app in your browser.

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

Testing, especially mocking `useRouter` hook and my custom `useFetch` hook, was another thing that was giving me problems. Great help to mock the `useRouter` hook was [this](https://www.youtube.com/watch?v=uF2lqBluQV8) video by Bruno Antunes. My first attempts to mock `useRouter` were not working, because the Next.js `RouterContext` import was using a wrong module address (it was changed to a new one).
