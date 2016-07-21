// Copyright 2016, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

var path = require('path');
var labelDetectionSample = require('../../vision/labelDetection');
var inputFile = path.join(__dirname, '../../vision/resources', 'cat.jpg');

describe('vision:labelDetection', function () {
  it('should detect labels', function (done) {
    labelDetectionSample.main(
      inputFile,
      function (err, labels) {
        assert(!err);
        assert(labels.length > 0);
        assert(console.log.calledWith('Found label: cat for ' + inputFile));
        done();
      }
    );
  });
});