# Cricket API POC
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Installation](#installation)
* [Usage](#usage)


## About The Project
This project has 2 main API's i.e 

- To get leaderboard data `/teams/leaderboard`
- To get match status by team `/matches/won-or-lost/:teamId`
  
### Built With
* NodeJS
* MongoDB



## Getting Started

### Installation

1. Install npm packages 
```sh
cd cricket-api
 ```
```sh
npm install
 ```
2. Create .env file in root folder with following
```
MONGODB_URI=<mongo uri with db name>
 ```
3. Seed Database
```sh
node ./seedDB/cleanAndSeedDB.js
```

>NOTE: This will clear the selected DB and Dump new data

4. Start the service 
```sh
npm start

OR

npm run develop
```
## Usage

- Get teams data:  `http://127.0.0.1:3000/teams  `

- Get leaderboard data: `http://127.0.0.1:3000/teams/leaderboard`
- Get match data: `http://127.0.0.1:3000/matches`
- Get won or lost status data for a team by passing id (For team id refer /teams api): `http://127.0.0.1:3000/matches/won-or-lost/:teamId`
