# InReach Ventures' Interview

Thanks for taking the time to interview with us. 
We're very excited that you're interested in joining us and we hope you find this test challenging in a good way!
Time management and communication are as important as writing code, 
so we expect you to give us a good idea of how long you took to complete this, 
and to ask questions and communicate with us while you work on it.
How long you take is up to you, but our guideline would be 2 hours.

## The Challenge

The idea is to build a "Startup Explorer Widget" that a user can use to list and search for Startups.

These are the tasks we'd like you to work on. It is up to you how many you finish within the time you spend:

* Display the list of the startups
* Include the startup's name, image and a short description (try and make it look good)
* Users should be able to search for a startup. While typing a query into a box, they should see a list of the startups that match
* Users should be able to order the startups alphabetically and by founding date, when not searching for a name

Once you're finished, please re-zip this project with your changes and send it back to us, with a not explaining what you did.

## Getting Started

Given you're reading this, you have the test project. Here's how you run it:

```
docker-compose up
nvm install # if you use nvm
npm install
npm run start
```

## The Data

We built a mock endpoint to present a subset of startups (this is what docker-compose is running). Please consume this via an HTTP call:

`http://localhost:8080/organizations.json`

This is a sample of a startup you would get by querying the endpoint:

```
{
      "id": "693309",
      "name": "Gamma",
      "created_at": 1502456093963,
      "updated_at": 1502463342857,
      "description": "Gamma is a rapidly growing, technology based, provider of ...",
      "short_description": "Gamma is a leading supplier of voice, data and mobile products and services in the UK.",
      "founded_on": 1502454680000,
      "primary_role": "company",
      "is_closed": false,
      "homepage_url": "http://www.gamma.co.uk",
      "total_funding_usd": 0,
      "number_of_investments": 0,
      "image_url": "http://public.crunchbase.com/t_api_images/v1502454665/seozli1x8mxeny6mwayf.png",
      "locations": [
        {
          "latitude": 51.3995101,
          "longitude": -1.2997858,
          "city": "Newbury",
          "country": "United Kingdom",
          "name": "Headquarters",
          "continent": "Europe"
        }
      ],
      "domain": "gamma.co.uk",
      "trends": {
        "trend-organization-magnitude": 0.872,
        "trend-person-beta": 0.5,
        "trend": 0.8385,
        "trend-person-magnitude": 0.997,
        "trend-organization-beta": 1
      },
      "person_ids": [
        "693430",
        "693310",
        "693420"
      ],
      "origin": "CRUNCHBASE",
      "tags": [
        "Service Industry"
      ],
    }
```

Good luck! Please remember to communicate with us while you're working on the project. 
We'll endeavour to be responsive, but remember that working remotely is all about time-management and asynchronous communication.
