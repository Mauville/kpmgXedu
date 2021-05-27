# WonderFlix

WonderFlix is a fullStack monorepo webapp based on the MERN stack with Apollo GraphQL.

## Tech Stack

**Core Dev**

- **[Lerna](https://github.com/lerna/lerna)** — JavaScript monorepo project manager

- [ESLint](https://eslint.org/), [Prettier](https://prettier.io/) — static code analysis

- [Husky](https://github.com/typicode/husky), [lint-staged](https://github.com/okonet/lint-staged) — Git hooks to run
  linters against staged git files

**Server**

- [x] **[Node.js](https://nodejs.org)**
- [x] **[Express](https://github.com/expressjs/express)**
- [x] **[GraphQL](http://graphql.org/)**
      with [Apollo Server Express](https://github.com/apollographql/apollo-server/tree/master/packages/apollo-server-express)
- [x] **[MongoDB](https://www.mongodb.com/)** with [Mongoose](https://github.com/Automattic/mongoose)
- [x] [Express Session](https://github.com/expressjs/session)
- [x] [Body Parser](https://github.com/expressjs/body-parser)
- [x] [NodeMailer](https://github.com/nodemailer/nodemailer)
- [x] [Helmet](https://github.com/helmetjs/helmet)
- [x] [Bcrypt.js](https://github.com/dcodeIO/bcrypt.js)
- [x] [Morgan](https://github.com/expressjs/morgan)
- [x] [Joi](https://github.com/hapijs/joi)
- [x] [Chalk](https://github.com/chalk/chalk)

**Client**

- [x] **[React](https://reactjs.org/)**
- [x] **[React Router](https://github.com/ReactTraining/react-router)**
- [x] **[Redux](https://redux.js.org/)**
- [x] Redux Thunk
- [x] **[Webpack](https://github.com/webpack/webpack)**
- [x] **[Babel](https://babeljs.io/)**
- [x] **[GraphQL](http://graphql.org/)**
      with [Apollo Client (Boost)](https://github.com/apollographql/apollo-client/tree/master/packages/apollo-boost)
- [x] [Less](http://lesscss.org/)
- [x] [Ant Design](https://ant.design/)
- [x] [Formik](https://jaredpalmer.com/formik/)
- [x] [Yup](https://github.com/jquense/yup)
- [ ] **[Jest](https://jestjs.io/)** with 100% test coverage
- [ ] **[i18n](https://github.com/mashpie/i18n-node)**
- [ ] **[Normalizr](https://github.com/paularmstrong/normalizr)**
- [ ] **[React 16.8 Hooks](https://reactjs.org/docs/hooks-overview.html)**

## Getting Started

### Prerequisites

- [MongoDB](https://www.mongodb.com/download-center/community) or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Node.js 10.0+](http://nodejs.org)
- Code Editor — [Visual Studio Code](https://code.visualstudio.com/) (preferred)
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
    and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) plug-ins.
- Command Line Tools

**Note:** If you are new to Node, Express, Mongo, React or GraphQL you may find
[Build a Complete App with GraphQL, Node.js, MongoDB and React.js](https://www.youtube.com/watch?v=7giZGFDGnkc&list=PL55RiY5tL51rG1x02Yyj93iypUuHYXcB_&index=1)
from [@maxedapps](https://twitter.com/maxedapps) helpful for learning everything you need to know.

### Installing

The easiest way is to clone the repository and run `npm run install:all`:

```bash
# Get the latest version
git clone https://github.com/Mauville/WonderFlix.git myproject

# Change current directory to the newly created one
cd myproject

# Install NPM dependencies of all packages(core, server and client)
npm run install:all
```

Now lets set the environment variables. Open `.env.example` and use it to create your own `.env` file and set your
variables.

**Note:** If you are using mongo server locally `MONGO_DB_URI` should look something like
this `mongodb://localhost:27017/test`

## Running WonderFlix

### Development

To run WonderFlix using development configs run:

```bash
npm run dev
```

### To Debug GraphQL

```bash
#On src/server
npm run dev
# And navigate to localhost:port/graphql
```

<br>
<hr />
<br>

<div align="center">
  <img src="https://cdn.iconscout.com/icon/free/png-256/mongodb-5-1175140.png" height="75">
  <img src="https://cdn.iconscout.com/icon/free/png-256/express-8-1175029.png" height="75">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/512px-React.svg.png" height="75">
  <img src="https://media.licdn.com/dms/image/C4E0BAQE19TrEXW022w/company-logo_200_200/0?e=2159024400&v=beta&t=KSA1haVf2zqXDG5scvlmrXltTNA3MkkLLQpolQrTBTU" height="75">
  <img src="https://nodejs.org/static/images/logo-hexagon-card.png" height="75">
</div>
<div align="center">
    <sub> Work by us. Boilerplate with ❤️ by <a ref="https://github.com/IgorMCesar">IgorMCesar</a>. </sub>
</div>
