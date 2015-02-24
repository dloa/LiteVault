(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['addresses'] = template({"1":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "    <tr data-address=\""
    + escapeExpression(lambda((data && data.key), depth0))
    + "\">\n        <td>"
    + escapeExpression(lambda((data && data.key), depth0))
    + "</td>\n        <td>0</td>\n        <td><button class=\"btn btn-success viewkey-btn\">View Private Key</button></td>\n        <td><button class=\"btn btn-danger deleteaddr-btn\">Delete</button></td>\n    </tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1;
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.addresses : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"useData":true});
templates['transactions'] = template({"1":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda;
  return "    <tr>\n        <td>"
    + escapeExpression(((helpers.timeSince || (depth0 && depth0.timeSince) || helperMissing).call(depth0, (depth0 != null ? depth0.time_utc : depth0), {"name":"timeSince","hash":{},"data":data})))
    + " ago</td>\n        <td>"
    + escapeExpression(lambda((depth0 != null ? depth0.amount : depth0), depth0))
    + "</td>\n        <td>"
    + escapeExpression(lambda((depth0 != null ? depth0.address : depth0), depth0))
    + "</td>\n        <td>"
    + escapeExpression(lambda((depth0 != null ? depth0.confirmations : depth0), depth0))
    + "</td>\n        <td>\n            (<a href=\"https://ltc.blockr.io/tx/info/"
    + escapeExpression(lambda((depth0 != null ? depth0.tx : depth0), depth0))
    + "\" target=\"_blank\">Blockr</a>)\n            (<a href=\"http://explorer.litecoin.net/tx/"
    + escapeExpression(lambda((depth0 != null ? depth0.tx : depth0), depth0))
    + "\" target=\"_blank\">LTC Explorer</a>)\n        </td>\n    </tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1;
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.transactions : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"useData":true});
templates['wallet'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"logged_header main_header single\">\n    <h1>\n        <span class=\"pull-right\" id=\"ltc-balance\">0.00</span>\n    </h1>\n\n    <div class=\"container\">\n        <!-- Nav tabs -->\n        <ul class=\"nav nav-tabs\" role=\"tablist\">\n            <li><a href=\"#home\" role=\"tab\" data-toggle=\"tab\">Home</a></li>\n            <li><a href=\"#tab_transactions\" role=\"tab\" data-toggle=\"tab\">Transactions</a></li>\n            <li><a href=\"#tab_send_coins\" role=\"tab\" data-toggle=\"tab\">Send</a></li>\n            <li class=\"active\"><a href=\"#tab_addresses\" role=\"tab\" data-toggle=\"tab\">Receive (manage addresses)</a></li>\n            <li><a href=\"#tab_import_export\" role=\"tab\" data-toggle=\"tab\">Import/Export</a></li>\n            <li><a href=\"#tab_settings\" role=\"tab\" data-toggle=\"tab\">Settings</a></li>\n        </ul>\n    </div>\n</div>\n<div class=\"container\">\n    <br><br>\n    <div class=\"row\">\n        <div class=\"col-xs-12\" id=\"alerts-section\">\n\n        </div>\n    </div>\n    <!-- Tab panes -->\n    <div class=\"tab-content\">\n        <div class=\"tab-pane\" id=\"home\">...</div>\n        <div class=\"tab-pane\" id=\"tab_transactions\">\n            <h4>Your Transactions</h4>\n\n            <table id=\"list-transactions-outer\" class=\"table table-bordered\">\n                <thead>\n                <th>Date</th>\n                <th>Amount</th>\n                <th>Your Address</th>\n                <th>Confirmations</th>\n                <th>View</th>\n                </thead>\n                <tbody id=\"list-transactions\">\n                    <tr><td colspan=\"5\">Error loading transactions?</td></tr>\n                </tbody>\n            </table>\n        </div>\n        <div class=\"tab-pane active\" id=\"tab_addresses\">\n\n            <table id=\"list-addresses-outer\" class=\"table table-bordered\">\n                <thead>\n                <th>Address</th>\n                <th>Balance</th>\n                <th>Options</th>\n                <th>Delete?</th>\n                </thead>\n                <tbody id=\"list-addresses\">\n                    <tr><td colspan=\"4\">Error loading addresses?</td></tr>\n                </tbody>\n            </table>\n\n            <button id=\"generate-btn\" class=\"btn btn-default\">Generate New Address</button>\n        </div>\n        <div class=\"tab-pane\" id=\"tab_send_coins\">\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <div class=\"alert alert-danger\">Note: You will get an error if you try to send\n                    multiple transactions in a short period of time. This is because you cannot send\n                    unconfirmed coins yet.</div>\n\n                    <div class=\"well\">\n                        This service is not ran as a business and relies on the community to keep it alive. If you use the service, please\n                        donate, even just $1 in Litecoins contribute towards development time, and server costs.<br/>\n                        <br/>\n                        Donate to Litevault to keep us running: <br/><br/>\n                        <div class=\"panel panel-default\">\n                            <div class=\"panel-heading\">\n                                <h4 class=\"panel-title\">Litecoin</h4>\n                            </div>\n                            <div class=\"panel-body\">\n                                LNWEjx3DKSAWKX5fkWfCwa2tWSQeo7ZmnR\n                            </div>\n                        </div>\n                        <div class=\"panel panel-default\">\n                            <div class=\"panel-heading\">\n                                <h4 class=\"panel-title\">Bitcoin</h4>\n                            </div>\n                            <div class=\"panel-body\">\n                                17PPTHmS8N34KYKdDc4Gn1psabteGS8EE3\n                            </div>\n                        </div>\n                    </div>\n                    <h4>Exchange Rates</h4>\n                    <ul id=\"exchange-rates\">\n                        <li>Under Construction</li>\n                    </ul>\n                </div>\n\n                <div class=\"col-md-6\">\n                    <h4>Send LTC</h4>\n                    <div class=\"input-group-lg\">\n                        <label for=\"from-address\">From Address</label>\n                        <select name=\"my-addresses\" id=\"select-my-addresses\" class=\"form-control\"></select>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-8\">\n                            <div class=\"input-group form-inline\">\n                                <label for=\"to-address\">Recipient Address</label>\n                                <input type=\"text\" class=\"form-control\" id=\"to-address\"/>\n                            </div>\n                        </div>\n                        <div class=\"col-md-4\">\n                            <div class=\"input-group form-inline\">\n                                <label for=\"to-address\">Amount to send</label>\n                                <input type=\"text\" class=\"form-control\" id=\"send-coins-amount\" placeholder=\"0.0000\"/>\n                            </div>\n                        </div>\n                    </div>\n\n                    <hr/>\n                    <button class=\"btn btn-default\" id=\"send-coins-btn\">Send Coins</button>\n                </div>\n            </div>\n        </div>\n        <div class=\"tab-pane\" id=\"tab_import_export\">\n            <div class=\"row\">\n                <div class=\"col-md-6 form-inline\">\n                    <h4>Import</h4>\n                    <div class=\"input-group\">\n                        <p class=\"form-control-static\">Import Key (WIF)</p>\n                    </div>\n                    <div class=\"input-group\">\n                        <input type=\"text\" class=\"form-control\" id=\"import-address\" />\n                    </div>\n                    <button class=\"btn btn-default\" id=\"import-btn\">Import</button>\n                </div>\n                <div class=\"col-md-9\">\n                    <h4>Export</h4>\n                    <a href=\"javascript:void(0);\" id=\"export-wallet-json-link\">Export Wallet (JSON)</a>\n                </div>\n            </div>\n        </div>\n        <div class=\"tab-pane\" id=\"tab_settings\">\n            <h3>Security</h3>\n            <div class=\"row\">\n                <div class=\"col-md-6 form-inline\">\n                    <label for=\"account-email\">Your Email (optional): </label>\n                    <input type=\"text\" id=\"account-email\" class=\"form-control\"/>\n                    <button class=\"btn btn-default\" id=\"save-email\">Save Email</button>\n                </div>\n            </div>\n            <hr/>\n            <h4>2-Factor Authentication</h4>\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-md-6\">\n                    <strong>2-Factor Authentication Status: <strong id=\"2fa-status\" style=\"color:red\">Disabled</strong></strong>\n                    <button class=\"btn btn-default\" id=\"configure-gauth\">Enable/Modify 2-Factor Authentication</button>\n\n                </div>\n                <div class=\"col-xs-12 col-md-6\">\n                    <div class=\"well\">\n                    <p>NOTE: This is a beta feature. Please make sure you backup your wallet often when using 2-Factor authentication.\n                            If you find any bugs with 2-Factor authentication, please report them to\n                            <a href=\"mailto:info+security@someguy123.com\">info+security@someguy123.com</a> </p>\n                        <p>If you have 2-Factor authentication enabled, the button \"Enable/Modify\" will also allow you to replace it\n                            with a new 2-Factor token, for example if you reset or get a new phone.</p>\n                        <p>If you would like to disable 2-Factor authentication, please contact support</p>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n\n    <div class=\"modal fade\" id=\"deleteAddressModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n                    <h4 class=\"modal-title\" id=\"myModalLabel\">Deleting Address</h4>\n                </div>\n                <div class=\"modal-body\">\n                    <h3>Warning: You're deleting an address!</h3>\n                    <h4 style=\"color:#ff0000\">This action is irreversible, please make sure you're absolutely sure\n                        you want to do this, the private key will be removed from your account and you will lose\n                        access to any funds stored in this address unless you have a backup of the private key somewhere.</h4>\n                    <p>The address you are deleting is <strong id=\"deletingAddress\"></strong></p>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" id=\"i-am-sure-delete\" class=\"btn btn-danger\" data-dismiss=\"modal\">I'm sure I want to delete this address</button>\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"modal fade\" id=\"exportWalletModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exportWalletModalLabel\"\n         aria-hidden=\"true\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span\n                            aria-hidden=\"true\">&times;</span></button>\n                    <h4 class=\"modal-title\" id=\"exportWalletModalLabel\">Exporting Wallet</h4>\n                </div>\n                <div class=\"modal-body\">\n                    <textarea id=\"wallet-exported-txt\" class=\"form-control\" cols=\"20\" rows=\"30\" style=\"height: 300px;\"></textarea>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Done</button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"modal fade\" id=\"configGauthModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"configGauthModalLabel\"\n         aria-hidden=\"true\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span\n                            aria-hidden=\"true\">&times;</span></button>\n                    <h4 class=\"modal-title\" id=\"configGauthModalLabel\">Setting up Google Authenticator (or other TOTP\n                        app)</h4>\n                </div>\n                <div class=\"modal-body\">\n                    <p style=\"color: red\"><strong>IMPORTANT, READ BEFORE CONTINUING: </strong> Please make sure that you\n                    have an email set in your account settings. If you don't have one and you lose access to your 2FA app for\n                    any reason, you won't be able to get back into your account.</p>\n                    <div class=\"qrcode_container text-center\" id=\"modal-gauth-qr\">\n\n                    </div>\n                    <p>Manual key entry: <strong id=\"modal-gauth-secret\"></strong></p>\n                    <p>To enable 2 Factor Authentication, scan the QR code above into your favourite authenticator app\n                    such as <strong>Google Authenticator</strong> or <strong>Authy</strong>. Once done, enter the access\n                    token you get from the app into the text box below, it looks like <strong>123456</strong>.</p>\n                    <label for=\"modal-gauth-token\">Your 2FA token from the app:</label>\n                    <input type=\"text\" class=\"form-control\" id=\"modal-gauth-token\" placeholder=\"e.g. 123456\"/>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-danger\" id=\"confirm-setup-2fa\">Set Up 2FA</button>\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"modal fade\" id=\"completeGauthModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"completeGauthModalLabel\"\n         aria-hidden=\"true\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span\n                            aria-hidden=\"true\">&times;</span></button>\n                    <h4 class=\"modal-title\" id=\"completeGauthModalLabel\">You have successfully enabled 2FA for your\n                        account.</h4>\n                </div>\n                <div class=\"modal-body\">\n                    <p>You've just enabled 2FA for your account. </p>\n                    <p>Please be aware that from now on you will be required to\n                    enter a token from your 2FA application approximately once a week for security, where-as untrusted computers\n                    will be de-authorized within 2 hours. </p>\n                    <p>If you decide that you don't want 2FA, or run into a problem with the\n                    application, you will be able to disable it from this computer using your password for the next week, without\n                    being required to enter a 2FA token.</p>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Okay</button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"modal fade\" id=\"txModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"txModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span\n                            aria-hidden=\"true\">&times;</span></button>\n                    <h4 class=\"modal-title\" id=\"txModalLabel\">Transaction Sent</h4>\n                </div>\n                <div class=\"modal-body\">\n                    Transaction ID: <p id=\"txModalTXID\">ERROR</p>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>";
  },"useData":true});
})();