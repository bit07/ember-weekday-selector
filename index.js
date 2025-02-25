'use strict';

import { name } from './package';
export { name };
export function included(/* app */) {
  this._super.included.apply(this, arguments);
}
