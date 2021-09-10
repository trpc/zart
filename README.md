# zART-Stack 🤯

> **Z**ero-**A**PI, **R**eact, & **T**ypeScript


## Introduction

A monorepo containing:

- Next.js web app
- React Native app with Expo
- A [tRPC](https://trpc.io)-API that is inferred straight into the above.

In tRPC you simply write API-functions that are automatically inferred straight into your frontend - no matter if it's React, React Native, or something else _(that is TS/JS-based)_.

### Video

> Very rough video recorded in 2 minutes 😅

[![ZART](http://img.youtube.com/vi/dLLm6hgMhMQ/0.jpg)](http://www.youtube.com/watch?v=dLLm6hgMhMQ "Video Title")


## Getting started

```bash
git clone git@github.com:KATT/zart.git
cd zart
yarn
yarn dev
```

> Press `i` after `yarn dev` in to launch the iOS Simulator.

Now - head over to one of the [`./apps`](./apps), whilist updating [a router in tRPC](./packages/api/src/routers) or the [Database Schema](./prisma/schema.prisma) and see that the data is directly inferred.

## Available commands

| Command               | Description                                                                                    |
| --------------------- | ---------------------------------------------------------------------------------------------- |
| `yarn dev`            | Starts Postgres, Expo & Next.js                                                                |
| `yarn db-up`          | Starts Postgres on port `5466`                                                                 |
| `yarn db-migrate-dev` | Runs the latest Database migrations after updating the [Prisma schema](./prisma/schema.prisma) |
| `yarn db-nuke`        | Kills the database                                                                             |


## Folder structure


```graphql
.
├── apps
│   ├── expo    # Expo/RN application
│   └── nextjs  # Server-side rendered Next.js application
├── packages
│   ├── api           # tRPC API 
│   ├── react         # Shared React-helpers
│   └── react-native  # RN components. **Could** be shared between Expo & Next.js if you're in to that sort of thing.
└── prisma      # Prisma setup
```

## Further reading

### Deployment

- Create a Postgres Database
- Set env `DATABASE_URL` pointing towards that db

### Questions?

Shoot me a message [on Twitter](https://twitter.com/alexdotjs)!


## Credits

- tRPC and this example is made by [@alexdotjs](https://twitter.com/alexdotjs)
- `apps/expo` is basically a copy-paste from [`expo-next-monorepo-example`](https://github.com/axeldelafosse/expo-next-monorepo-example) by [axeldelafosse](https://github.com/axeldelafosse).

