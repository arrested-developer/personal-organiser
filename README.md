# starter-stack 🥞

![](https://api.travis-ci.org/arrested-developer/personal-organiser.svg?branch=master)

A blank project, built using:

Express / React / Postgres

## Configuration

Database scripts for testing are currently simple examples for a to-do list. The scripts in `server/db` should be configured.

Environment variables need to be set for:

- NODE_ENV (production, development, or test)
- DATABASE_URL (production database URL)
- DATABASE_URL_TEST (local and remote test db URL)
- DATABASE_URL_DEV (local persistent database URL)

## Testing

Testing, CI and coverage are all set up and ready to go. We're using Jest with react-testing-library on the front-end and tape with supertest on the backend.

Example test files are in place, and should be changed to match your code.

## Deployment

This is tested with deployment to Heroku. When you configure the postgres add-on in Heroku CLI, the DATABASE_URL environment variable will be populated for you.

