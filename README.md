# Fortune Cookie Viewer

An app to catalog the words of wisdom learned from our favorite fortune cookie fortunes.

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
2. Add a `fortune-data.json` file to the root directory. This is what `json-server` will use as our database.
3. `npm run start` boots up the server on port 3000, and you're good to go :)