import * as _ from 'lodash';

export default class Transaction {
  constructor(options) {
    if (_.isEmpty(options)) {
      return;
    }

    this.transaction_at = options.transaction_at;
    this.payee          = options.payee;
    this.category       = options.category;
    this.memo           = options.memo;
    this.outflow        = options.outflow;
    this.inflow         = options.inflow;
  }
};
