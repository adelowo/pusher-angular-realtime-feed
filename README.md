## pusher-angular-realtime-feed

Building a realtime post feed with Angular 7 and Pusher channels. 

### Getting Started

This project consists of a  `client` and `server`. 
You have to clone this repository before moving on 
`git clone git@github.com:adelowo/pusher-angular-realtime-feed.git`.

#### Client setup

- Navigate to the client directory with `cd client`.
- Install the dependencies with `npm install`.
- Run the application with `ng serve`. You will need to 
update [this file](https://github.com/adelowo/pusher-angular-realtime-feed/blob/master/client/src/app/feed.service.ts#L15) 
with your `PUSHER_KEY`.

#### Server setup

- From the directory root, cd to `server`.
- Install the server dependencies by running `npm install`.
- Update the `variable.env` file with your credentials.
- Run the application with `node index.js`

#### Prerequisites

- Node >= 10
- Angular's `ng` command line tool. You can install it via `npm install -g @angular/cli`

#### Built With

- [Pusher Channels](https://pusher.com/channels) - APIs to enable devs building realtime features.
- [Angular 7](https://angular.io)
