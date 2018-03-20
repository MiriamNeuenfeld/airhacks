let Loggable = (type) => class extends type { 
    constructor() { 
        super();
    }
    debug(msg) { 
        console.log(`hey joe: ${msg}`);
    }

}

class Another{ 
    message() { 
        console.log('good bye');
    }
}


class MyView extends Loggable(Another) { 

    constructor() { 
        super();
        super.debug('duke');
    }

}

const view = new MyView();
view.message();




