Atomic Event Emitter [![Donate on Gittip](http://badgr.co/gittip/twolfson.png)](https://www.gittip.com/twolfson/)====================Occasionally, you have a race condition between two asynchronous functions where one must run after the other. This atomic event emitter is built just for that.```var atomic = {s:{},after:function(n,f,c){c=this.s[n]=this.s[n]||[];c==1?f():c.push(f)},fire:function(n,c,f){for(c=this.s[n]||[];f=c.pop();)f();this.s[n]=1}};setTimeout(function () {  atomic.fire('first');}, 100);setTimeout(function () {  atomic.after('first', function () {    console.log('First must have run before this');  });}, 70 + (Math.random() * 60));```Tested in---------This code is **not** tested anywhere (browsers and node).