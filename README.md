# rehydration-example

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

### Objective:

Avoid the flickering content when the user is authenticated.

Note: `asyncData` and `fetch` are not executed when going full static.

### Demo:

https://60f08a8293123d00e57c14e8--happy-minsky-1268c6.netlify.app/

### Possible solution

Decide on the client which content the user can see. The problem with this solution is that is not search engine friendly because there is not static content generated after running `yarn generate`

Like in this two lines:

- Set null on the `data()` https://github.com/ltroya-as/nuxt-rehydratation-example/blob/possible-solution/pages/index.vue#L18
- Check against false instead of a falsy value https://github.com/ltroya-as/nuxt-rehydratation-example/blob/possible-solution/pages/index.vue#L6

It should have the `No authenticated content` content on the generated file, but it doesn't T.T:
https://gist.github.com/ltroya-as/fbbdce2b3dc30063e9c4ec7e93e3aba1#file-index-generated-file-html-L522

This is the expected output:
https://gist.github.com/ltroya-as/d37e3d0a89efebbfd66c2daf7700f50d#file-expected-generated-file-html-L523
