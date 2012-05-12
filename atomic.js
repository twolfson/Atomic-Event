{  // Define the channels  'channels': {},  'after': function (channelName, fn) {    // Fallback the channel    var channel = (this.channels[channelName] = this.channels[channelName] || []);    // If the channel has already been run, run the fn    if (channel === true) {      fn();    } else {    // Otherwise, add the function      fn.push(fn);    }  },  'fire': function (channelName) {    // Fallback the channel    var channel = (this.channels[channelName] || []),        i = channel.length;    // Iterate and call the functions    while (i--) {      channel[i]();    }    // Set up the channel for atomic bindings    this.channels[channelName] = true;  }}