/* <copyright>
Copyright (c) 2012, Motorola Mobility, Inc
All Rights Reserved.
BSD License.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

  - Redistributions of source code must retain the above copyright notice,
    this list of conditions and the following disclaimer.
  - Redistributions in binary form must reproduce the above copyright
    notice, this list of conditions and the following disclaimer in the
    documentation and/or other materials provided with the distribution.
  - Neither the name of Motorola Mobility nor the names of its contributors
    may be used to endorse or promote products derived from this software
    without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
POSSIBILITY OF SUCH DAMAGE.
</copyright> */
/**
 @module montage/data/operation
 @requires montage/core/core
 @requires montage/core/logger
 */
var Montage = require("montage/core").Montage;
var logger = require("montage/logger").logger("operation");

/**
 Handle top the operation manager. The manager is created automatically if not set by the application.
 @private
 */
var _operationManager = null;
/**
 @class module:montage/data/operation.Operation
 @extends module:montage/core/core.Montage
 */
var Operation = exports.Operation = Montage.create(Montage, /** @lends module:montage/data/operation.Operation# */ {

    init:{
        value:function () {
            return this;
        }
    },

    manager:{
        get:function () {
            if (_operationManager === null) {
                _operationManager = OperationManager.create().init();
            }
            return _operationManager;
        },
        set:function (manager) {
            _operationManager = manager;
        }
    }

});

/**
 @class module:montage/data/operation.OperationManager
 @extends module:montage/core/core.Montage
 */
var OperationManager = exports.OperationManager = Montage.create(Montage, /** @lends module:montage/data/operation.OperationManager# */ {

    init:{
        value:function () {
            return this;
        }
    },

    createNoopOperation:{
        value:function () {
            if (_noopOperation === null) {
                _noopOperation = NoopOperation.create().init();
            }
            return _noopOperation;
        }
    },

    createInsertOperation:{
        value:function () {
            return InsertOperation.create().init();
        }
    },

    createDeleteOperation:{
        value:function () {
            return DeleteOperation.create().init();
        }
    },

    createChangeOperation:{
        value:function () {
            return ChangeOperation.create().init();
        }
    }

});

var _noopOperation = null;
/**
 @class module:montage/data/operation.NoopOperation
 @extends module:montage/data/operation.Operation
 */
var NoopOperation = exports.NoopOperation = Montage.create(Operation, /** @lends module:montage/data/operation.NoopOperation# */ {


});

/**
 @class module:montage/data/operation.InsertOperation
 @extends module:montage/data/operation.Operation
 */
var InsertOperation = exports.InsertOperation = Montage.create(Operation, /** @lends module:montage/data/operation.InsertOperation# */ {


});

/**
 @class module:montage/data/operation.DeleteOperation
 @extends module:montage/data/operation.Operation
 */
var DeleteOperation = exports.DeleteOperation = Montage.create(Operation, /** @lends module:montage/data/operation.DeleteOperation# */ {


});

/**
 @class module:montage/data/operation.ChangeOperation
 @extends module:montage/data/operation.Operation
 */
var ChangeOperation = exports.ChangeOperation = Montage.create(Operation, /** @lends module:montage/data/operation.ChangeOperation# */ {


});