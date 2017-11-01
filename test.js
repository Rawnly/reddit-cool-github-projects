'use strict';

const listen = require('test-listen');
const micro = require('micro');
const test = require('ava');
const got = require('got');

require('async-to-gen/register')({includes: /index\.js$/});
const app = require('./'); // eslint-disable-line import/order

test('echo back the text', async t => {
	const service = micro(app);
	const url = await listen(service);

	const res = await got(url, {
		method: 'get',
		json: true,
		headers: {'content-type': 'application/json'}
	});

	t.is(typeof res.body.titles, 'object');
});

test('are 25 titles', async t => {
	const service = micro(app);
	const url = await listen(service);

	const res = await got(url, {
		method: 'get',
		json: true,
		headers: {'content-type': 'application/json'}
	});

	t.is(res.body.titles.length, 25);
});
