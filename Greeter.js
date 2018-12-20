'use strict';

const fs   = require('fs');
const path = require('path');

// 11BE BladeIron Client API
const BladeIronClient = require('bladeiron_api');

class Greeter extends BladeIronClient {
	constructor(rpcport, rpchost, options) 
	{
		super(rpcport, rpchost, options);
		this.ctrName = 'Greeter';
		
		this.greet = () => 
		{
			return this.call(this.ctrName)('greet')()
				.then((response) => { return response });
		}

		this.newGreet = (greet) => 
		{
			if (this.userWallet === '0x') throw "Not yet linked to account";
			return this.sendTk(this.ctrName)('newGreet')(greet)();
		}
	}
}

module.exports = Greeter;
