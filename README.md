# STD

Standard module for NodeJS / TypeScript

Note: TypeScript support is in testing

```js
import { cin } from '@thundernetworkrad/std';
cin('Question').then((response) => {
    console.log(response)
})
```

```js
import { createCout } from '@thundernetworkrad/std';

let ccout = new createCout(0, true); // debugLevel, logs enabled (file) (like using log() )

let cout = ccout.cout;

cout('test', 0) // console.log day, time and the string, if the number is >= to the debugLevel
```

```js
import { log } from '@thundernetworkrad/std';

log('test') // create a file at the first log, add the string to the log
```

```js
import { getTime } from '@thundernetworkrad/std';

let time = getTime() // return { year, month, day, hours, minutes, seconds }
```
