/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

"use strict";

const { classes: Cc, interfaces: Ci, utils: Cu, results: Cr } = Components;

Cu.import("resource://gre/modules/Services.jsm");
Cu.import("resource://gre/modules/XPCOMUtils.jsm");

function debug(aMsg) {
  // dump("-- InterAppConnection: " + Date.now() + ": " + aMsg + "\n");
}

/**
 * MozInterAppConnection implementation.
 */

function InterAppConnection() {
  debug("InterAppConnection()");
  this.keyword = null;
  this.publisher = null;
  this.subscriber = null;
};

InterAppConnection.prototype = {
  classDescription: "MozInterAppConnection",

  classID: Components.ID("{9dbfa904-0718-11e3-8e77-0721a45514b8}"),

  contractID: "@mozilla.org/dom/inter-app-connection;1",

  QueryInterface: XPCOMUtils.generateQI([Ci.nsISupports]),

  __init: function(aKeyword, aPublisher, aSubscriber) {
    debug("__init: aKeyword: " + aKeyword +
          " aPublisher: " + aPublisher + " aSubscriber: " + aSubscriber);
    this.keyword = aKeyword;
    this.publisher = aPublisher;
    this.subscriber = aSubscriber;
  },

  cancel: function() {
    // TODO
  }
};


/**
 * MozInterAppConnectionRequest implementation.
 */

function InterAppConnectionRequest() {
  debug("InterAppConnectionRequest()");
  this.keyword = null;
  this.port = null;
};

InterAppConnectionRequest.prototype = {
  classDescription: "MozInterAppConnectionRequest",

  classID: Components.ID("{6a77e9e0-0645-11e3-b90b-73bb7c78e06a}"),

  contractID: "@mozilla.org/dom/inter-app-connection-request;1",

  QueryInterface: XPCOMUtils.generateQI([Ci.nsISupports]),

  __init: function(aKeyword, aPort) {
    debug("__init: aKeyword: " + aKeyword + " aPort: " + aPort);
    this.keyword = aKeyword;
    this.port = aPort;
  }
};

this.NSGetFactory = XPCOMUtils.generateNSGetFactory([InterAppConnection,
                                                     InterAppConnectionRequest]);
