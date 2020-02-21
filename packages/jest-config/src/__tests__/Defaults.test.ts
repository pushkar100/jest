/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {defaults} from '../index';

jest.mock('../importEsm', () => (s: string) => import(s));

test('get configuration defaults', () => {
  expect(defaults).toBeDefined();
});