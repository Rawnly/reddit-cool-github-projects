'use strict';

const {send} = require('micro');
const got = require('got');

// Get first 25
module.exports = async (req, res) => {
	const response = await got('https://www.reddit.com/r/coolgithubprojects/');
	const regex = /<a class="title .*?".*?>(.*?)<\/a>/g;
	let webpage = response.body;

	let titles = webpage.match(regex);

	titles = titles.map(title => {
		if (typeof title === 'string') {
			return title;
		}

		return false;
	});

	titles = titles.map(title => {
		if (/<a class=".*?" .*?>(.*?)<\/a>/g.test(title)) {
			return {
				title: /<a class=".*?" .*?>(.*?)<\/a>/g.exec(title)[1],
				url: /\shref="(.*?)"\s/g.exec(title)[1]
			};
		}

		return false;
	});

	send(res, 200, {titles, len: titles.length});
};