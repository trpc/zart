# ZART-Stack 🤯

**Z**ero-**A**PI, **R**eact, & **T**ypeScript


## Introduction

A monorepo with a Next.js example + Expo app that are using the same [tRPC](https://trpc.io)-API.

In tRPC you simply write API-functions that are automatically inferred straight into your frontend, whether it's React, React Native, or something else [JS-based].

## Getting started


```bash
git clone git@github.com:KATT/zart.git
cd zart
yarn
yarn dev
```

Now - head over to one of the `[apps](./apps), whilist updating [a router in tRPC](./packages/api/src/routers), see that the data is directly inferred.

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


## Credits

- tRPC and this example is made by [@alexdotjs](https://twitter.com/alexdotjs)
- `apps/expo` is basically a copy-paste from [`expo-next-monorepo-example`](https://github.com/axeldelafosse/expo-next-monorepo-example) by [axeldelafosse](https://github.com/axeldelafosse).

