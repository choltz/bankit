import * as _ from 'lodash';

export default class Transaction {
  constructor(options) {
    if (_.isEmpty(options)) {
      return;
    }

    let processDecimal = (value) => { return _.isEmpty(value) ? 0.0 : parseFloat(value); };

    this.id             = options.id;
    this.category       = options.category;
    this.inflow         = processDecimal(options.inflow);
    this.memo           = options.memo;
    this.outflow        = processDecimal(options.outflow);
    this.payee          = options.payee;
    this.transaction_at = options.transaction_at;
  }
};
