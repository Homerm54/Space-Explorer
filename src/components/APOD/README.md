## APOD Components

This file explains the distribution of the .js files in this folder.

This folder holds the components rendered by the APOD page (index.js), and are distributed as followed:

* FetchedList: Renders the list at the end of the page. Handles fetching queries in the database, deleting them, update the Store, fetching new data.
* FetchMediaForm: Renders 3 `select` components, and a button. This form handles the fetching of new data, based on the date selected. Futhermore, also updates the Queries list (pass action to the store).
* FetchMethod: Holder of fetching method for the APOD, renders nothing.
* RenderMedia: Renders the Media (image or video), only needs an object with the data and url needed.


All the CSS modules are with the same name as the components.