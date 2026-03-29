class AppErorr extends Error{
    constructor(){
        super();
    }
    create (statuscode , message , statusText){
        this.status = statuscode;
        this.message = message;
        this.statusText = statusText
        return this
    }
}
module.exports = new AppErorr();