
## Setup for local development
- Install `yarn`, `nodejs` (Refer Miscellaneous)



- Create `.env` files for client

REACT_APP_API_URL = http://localhost:8080/predict


- Setup project
```bash
yarn install
yarn run start
```

## Deployment steps


```bash

git add <filename>
git commit -m "Updates build"
git push origin <branchname>
cp client/.env.dev client/.env
```

2. Pull the updated code.

```bash
git pull origin master
```

## Miscellaneous

### Install `yarn`
https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable

