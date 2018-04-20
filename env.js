const NodeEnvironment = require('jest-environment-node');
const ref = require('./src');

class CustomEnvironment extends NodeEnvironment {
  constructor(config) {
    super(config);
  }

  async setup() {
    await super.setup();

    this.global.REF = ref;
  }
}

module.exports = CustomEnvironment;
