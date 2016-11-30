'use strict';
class SilentRenderer {
	get nonTTY() {
		return true;
	}
	render() { }
	end() {	}
}

module.exports = SilentRenderer;
