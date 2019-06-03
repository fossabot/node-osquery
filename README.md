# node-osquery ![GitHub package.json version](https://img.shields.io/github/package-json/v/4ir/node-osquery.svg?style=popout-square) ![](https://img.shields.io/github/license/4ir/node-osquery.svg?style=popout-square) ![s](https://img.shields.io/github/issues-raw/4ir/node-osquery.svg?style=popout-square) ![](https://img.shields.io/github/issues-pr/4ir/node-osquery.svg?style=popout-square)

<p style="text-align: center">
<img src="https://img.shields.io/bundlephobia/min/@4ir/osquery.svg?style=popout-square"> <img src="https://img.shields.io/github/repo-size/4ir/node-osquery.svg?style=popout-square"> <img src="https://img.shields.io/github/downloads/4ir/node-osquery/total.svg?style=popout-square"> <img src="https://img.shields.io/npm/dm/@4ir/osquery.svg?style=popout-square">
</p>

------

**node-osquery** is a robust and easy to use wrapper for [osquery](https://osquery.io/) by facebook.

## Install

_from npm_

   ```sh
   npm install --save @4ir/osquery
   ```

## How to use

_example showing the query of `users`_

```ts
import { OSQuery } from '@4ir/osquery';

const query = new OSQuery(); // enter the path of osqueri otherwise it will use the default path

(async () => {
  // running the query and waiting for response
  const response = await query.users();

  // checking if response is successful
  if (response.success) {
    // printing the response
    response.data.forEach((data) => {
      // showing the username and its home directory
      console.log(data.username, data.directory);
    });
  }
})();

```

## API

## Licensing

This project is licensed under [Apache-2.0](https://github.com/4ir/node-osquery/blob/master/LICENSE)

## Contribution

**Rules for contribution**
1. No pushing on master branch, all the commits on master branch will be closed instantly
2. Commit message should be relevant to the changes made
3. Comment before 
4. TSLint rules should be strictly followed

**Scope of contribution**
+ Documentation of this project
+ Adding and implementing **EVENTED TABLE**
+ Making module faster
+ Adding filtering functionality withing module, deprecating the `.query()` method

## Reach Us

Email: support@4iresearch.com

Website: https://4iresearch.com

Blog: https://blog.4iresearch.com