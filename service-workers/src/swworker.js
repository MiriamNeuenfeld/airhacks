//console.log(this);
//console.log(self);
//
self.onactivate = e => console.log('activate', e);
self.oninstall = e => console.log('install ');
self.onfetch = e => { 

    console.log('request is: ',e.request);

}
