# Reddit Cool Github Projects API [![Build Status](https://travis-ci.org/Rawnly/reddit-cool-github-projects.svg?branch=master)](https://travis-ci.org/Rawnly/reddit-cool-github-projects)

> Reddit first 25 cool github projects as an API

[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/Rawnly/reddit-cool-github-projects)


## Usage

```bash
	$ git clone Rawnly/reddit-cool-github-projects.git
	$ cd reddit-cool-github-projects
	$ npm install
	$ npm start
```



## Deployment

This microservice can be deployed to [now](https://zeit.co/now) by Zeit.
Assuming you've got `now` installed and set up:

```bash
	$ now Rawnly/reddit-cool-github-projects
```

Alternative, deploy right now without even leaving the browser:

[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/Rawnly/reddit-cool-github-projects)

## Sample Response
```json
	{
		"len": 25,
		"titles": [
			//...
			{
				"title": "Reddit first 25 cool github projects as an API.",
				"url": "https://github.com/rawnly/reddit-cool-github-projects"
			},
			//...
		]
	}
```

## License
MIT © [Federico Vitale](http://federicovitale.me)
