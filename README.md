# Fortune Cookie Viewer

An app to catalog the words of wisdom learned from our favorite fortune cookie fortunes.

https://user-images.githubusercontent.com/67052402/166413911-c91f345d-c490-4997-a2f1-7663d3fa3c14.mov

## Getting Started

### Dependencies

This app uses `json-server` as a lightweight server to handle basic CRUD routing for our fortunes. This reads from a JSON file that acts as our database. This application assumes your database file follows the following format:

```
{
  "fortunes": [
    {
      "text": "Fortune Text",
      "date": "2021-07-06T22:55:00.037Z"
    },
    {
      "text": "Another Fortune Text",
      "date": "2021-07-15T15:14:10.890Z"
    },
    ...
  ]
}
```

### Installation

1. `npm i` to install dependencies.
2. Bundle your files! `npm run client-prod`.
3. Add a `fortune-data.json` file to the root directory. This is what `json-server` will use as our database.
4. `npm run start` boots up the server on port 3000, and you're good to go :)

## TODO

This app was built in a few hours, so there's still more to do, including:

1. Adding visual feedback when trying to submit an empty fortune.
3. Animations for view changes.
4. Improving visual date handling.
5. Smarter clipping of fortune text length in main view.
6. Move out SVGs into separate files.
