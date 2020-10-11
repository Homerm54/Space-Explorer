# Space-Explorer

Web App build with React/Redux, using Next.js to serve Prerendered Pages (Static Generation). Been served on Vercel [here](space-explorer-web.vercel.app).

This Web App is meant to be a friendly UI to use the Nasa API features like APOD, Mars Rover, etc. Using Workbox to be usable as a Progressive Web App. Also uses IndexedDB, to save user actions ans history in the same browser.

## Installation

Download this repo, cd into the repo folder, use the command `npm install`, to install all the dependencies needed.

## How to use this Repo

`package.json` comes with three function, this functions are the way you can launch this Web App:

* `dev`: Starts a developement server on your local machine, go to the localhost:XXXX shown in the command line. (This dev version doesn't uses Workbox or PWA support).
* `build`: Builds the project, creating all the Statically Generated pages needed to deployment.
* `start`: Runs a local server, that will use the `build` genereated files to run a production version on your localhost. (This build version does uses Workbox and has PWA supports).

## License

Check the LICENSE.txt file in this repository.
