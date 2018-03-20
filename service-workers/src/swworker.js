//console.log(this);
//console.log(self);
//

self.onactivate = e => console.log('activate', e);
self.oninstall = e => { 
    /*
    e.waitUntil(
        caches.open('payload-cache').
            then(c => c.add('payload.json'))
    );
    */
}
self.onfetch = e => {
    if (e.request.url.endsWith('.json')) {
        e.respondWith(
            caches.open('payload-cache').
                then(c => c.match(e.request))
        )
    }
}
            
    


