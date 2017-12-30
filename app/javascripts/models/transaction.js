import * as _ from 'lodash';

export default class Transaction {
  constructor(options) {
    if (_.isEmpty(options)) {
      return;
    }

    this.id             = options.id;
    this.category       = options.category;
    this.inflow         = options.inflow;
    this.memo           = options.memo;
    this.outflow        = options.outflow;
    this.payee          = options.payee;
    this.transaction_at = options.transaction_at;
  }
};
