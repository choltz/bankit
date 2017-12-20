export default class Account {
  constructor(options) {
    this.name = options.name;
    this.type = options.type;
  }

  // Public: get the account id from the path.
  static accountIdFromPath() {
    if (document.location.pathname.match(/\/accounts\/\d+/)) {
      return document.location.pathname.match(/\/accounts\/(\d+)/)[1];
    }

    return null;
  }
};
