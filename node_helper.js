const NodeHelper = require("node_helper");
const DialServer = require("./DialServer.js");

module.exports = NodeHelper.create({
	dialServer: new DialServer(),
	start: function() {
		this.dialServer.mmSendSocket = (n,p) => this.sendSocketNotification(n,p);
	},
	socketNotificationReceived: function(notification, payload) {
		switch (notification) {
			case 'SET_CONFIG':
				this.dialServer.setConfig(payload);
				this.dialServer.start();
				break;
			default:
				break;
		}
	}
});
