# Lab - Class 26-29

## Project: RESTy

### Author: Julian Barker

### Problem Domain

Build a react application that can be used to test API endpoints in the browser by allowing the user to select a HTTP method and provide a JSON input if necessary.

### Requirements

#### Functional

The core requirements and functionality are as follows:

Simple, intuitive user interface

- A form where a user:
  - Enters a REST API Endpoint (URI)
  - Selects the REST Method to use (get, post, put, delete)
  - For put and post, allow the user to enter JSON to be used as the body for the request
  - A button to initiate the request
- An output section which:
  - Displays a spinner to indicate a request is in process
  - Once a request is complete:
    - Hide the spinner
    - Display a well formatted view of the API response in 2 sections
      - Headers
      - Body
- A history section which:
  - Shows a list of all unique, successful requests
  - Allows a user to click or select one to re-populate the form so they can repeat the request

#### Technical

1. React
2. ES6 Classes
3. Shared Component State
4. Local Storage for storing request history
5. Superagent or Axios for performing API Requests
6. SASS for styling

    - Global Theme
    - Component specific CSS where possible

7. Test Driven Development, using Jest

    - Tests will be runnable locally

8. Deployment to GitHub Pages using an Action

### Links and Resources

- No deployment yet.

### UML

![UML-11](./assets/lab-11-UML.png)

### Setup

#### How to initialize/run your application (where applicable)

- `npm i` - install all relevant packages on the local machine
- `npm start` (alias for `node index.js`)

#### Features / Routes

- Allows drivers and vendors to respond to each other's events
- Allows drivers and vendors to catch up on missed messages while they were disconnected

#### Tests

- run tests with `npm test`



## For React Applications

 To deploy your application at GitHub pages, you'll need to add a home page property to your package.json which points to the deployed base URL of your GitHub Pages site.

  *NOTE: This will break deployments to other hosting services such as Netlify, Vercel, or AWS Amplify, so if you later wish to deploy there, remove this property completely*

    {
      "homepage": "https://yourname.github.io/repository-name"
    }
