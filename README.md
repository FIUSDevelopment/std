Work IN PROGRESS

```js
const { cin } = require('@thundernetworkrad/std');
cin('Question').then((response) => {
    console.log(response)
})
```

```js
const { createCout } = require('@thundernetworkrad/std');

let ccout = new createCout(0, true); // debugLevel, logs enabled (file)

let cout = ccout.cout;

cout('test', 0) // console.log day and time, if the number is >= to the debugLevel
```
