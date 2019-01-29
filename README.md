# starter-stack 🥞

![Travis CI](https://api.travis-ci.org/arrested-developer/starter-stack.svg?branch=master) [![codecov](https://codecov.io/gh/arrested-developer/starter-stack/branch/master/graph/badge.svg)](https://codecov.io/gh/arrested-developer/starter-stack)

A blank project, built using:

Express / React / Postgres

## Setup

This is set up as a **monorepo**

The parent repo mainly contains scripts to be used in testing and deployment.

The `client` folder is a self-contained installation of `create-react-app`

The `server` folder is a self-contained installation of `Express`

In production, `client/build` is served as a static folder from Express. Any requests to Express for api routes will be handled by the router, otherwise all unhandled routes will be redirected to React where they can be handled with React Router if desired.

## Configuration

Two local databases should be set up for development and testing, and added to the environment variable as described below. The expected format is `postgres://user:password@localhost:5432/db_name`

Environment variables need to be set for:

- NODE_ENV (production, development, or test)
- DATABASE_URL (production database URL)
- DATABASE_URL_TEST (local and remote test db URL)
- DATABASE_URL_DEV (local persistent database URL)

**Locally**, these are set using a `config.env` file in the root folder.
**On Travis**, environment vars are set in the `.travis.yml`
**In production**, Heroku will take care of these by itself 🤓 - when you add the postgres add-on in the CLI, the DATABASE_URL variable will be configured

Database scripts for testing are currently simple examples for a to-do list. The scripts in `server/db` should be configured and can be used in tests to destroy, build, populate and clear the database.

## Development

You can run `npm run dev` from the root of the project to load up the React dev server **and** the Express dev server. The proxy in `client/package.json` allows the React app to use the Express server as a backend during development.

## Testing

Testing, CI and coverage are all set up and ready to go. We're using `Jest` with `react-testing-library` on the front-end and `tape` with `supertest` on the backend.

Coverage is set up using Codecov

Example test files are in place, and should be changed to match your code.
