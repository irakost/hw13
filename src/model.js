export default class Model {
    constructor() {
        this.localStorage = window.localStorage;
        console.log("model");
    }

    getFromLocalStorage() {
        this.links = (this.localStorage.getItem('links')) ? this.localStorage.getItem('links').split(",") : [];
        console.log("getFromLocalStorage");
        return this.links;
    }

    pushLink(link) {
        let flag = true;
        this.links.forEach((elem) => {
            if(elem == link) {
                alert("Існує");
                flag = false;
            }
        });
        if(flag) {
            this.links.unshift(link);
            this.localStorage.setItem('links', this.links.join());
        }
        console.log("pushLink");
        return this.links;
    }
}