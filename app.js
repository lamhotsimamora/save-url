class Storage{
    
    check(){
        return window.localStorage.getItem('_URL_')? true: false;
    }

    save(value){
        if (value==null || value==='null'){
            return;
        }
        window.localStorage.setItem('_URL_', value);
        return true;
    }

    get(){
        return window.localStorage.getItem('_URL_');
    }
}

const STORAGE = new Storage()