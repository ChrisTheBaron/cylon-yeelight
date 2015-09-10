# Cylon.js For Yeelight
Cylon.js (http://cylonjs.com) is a JavaScript framework for robotics and
physical computing using Node.js

This repository contains the Cylon adaptor for [Yeelight](http://www.yeelight.co.uk/).

The implementation uses the [yeelight-blue](https://www.npmjs.com/package/yeelight-blue) node module from [@sandeepmistry](https://www.npmjs.com/~sandeepmistry). Thank you!

For more information about Cylon, check out the repo at
https://github.com/hybridgroup/cylon

## How to Install
Install the module with:
``` bash
$ npm install cylon-yeelight
```
## How to Use
```javascript
'use strict';

var Cylon = require('cylon');

Cylon.robot({

    connections: {
        yeelight: {
            adaptor: 'yeelight', uuid: '544a161fe7e7'
        }
    },

    devices: {
        light: {
            driver: 'yeelight'
        }
    },

    work: function (my) {

        my.light.setGradualMode(true, function () {

            my.light.turnOn(function () {

                setTimeout(function () {

                    my.light.setColorAndBrightness(204, 0, 204, 100, function () {

                        setTimeout(function () {

                            my.light.turnOff(function () {

                                setTimeout(function () {

                                    console.log("Done");
                                    process.exit(0);

                                }, 2500);

                            })

                        }, 5000);

                    })

                }, 5000);

            })

        });

    }
}).start();
```
## How to Connect
You will need to be able to access the Yeelight from your device.

To discover your devices run `node tools\discovery.js`

## Documentation
We're busy adding documentation to our web site at http://cylonjs.com/ please check there as we continue to work on Cylon.js

Thank you!
## Contributing
* Put your contribution guidelines here
* Submit a Pull Request to the appropriate branch and ideally discuss the changes with us in IRC.
* We will look at the patch, test it out, and give you feedback.
* Avoid doing minor whitespace changes, renamings, etc. along with merged content. These will be done by the maintainers from time to time but they can complicate merges and should be done seperately.
* Take care to maintain the existing coding style.
* Add unit tests for any new or changed functionality & lint and test your code using `make test` and `make lint`.
* All pull requests should be "fast forward"
  * If there are commits after yours use “git rebase -i <new_head_branch>”
  * If you have local changes you may need to use “git stash”
  * For git help see [progit](http://git-scm.com/book) which is an awesome (and free) book on git

## Release History
1.0.0 - Initial release
## License
Copyright (c) 2015 Chris Taylor. See `LICENSE` for more details
