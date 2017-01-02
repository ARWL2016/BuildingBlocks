npm shrinkwrap is a way of guaranteeing the same versions of dependencies
- this is useful if you don't include deps in your github repo

The mocha test script in package.json looks for the mocha binary in the node modules folder, so you don't need a global install