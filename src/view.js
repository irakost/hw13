export default class View {
    constructor() {
        this.listLinks = document.querySelector(".list-links");
        console.log("view");
    }

    compileHTML(list) {
        const source = '{{#each links}}<a href="{{this}}">{{this}}</a></br>{{/each}}';
        const template = Handlebars.compile(source);
        this.listLinks.innerHTML = template({"links": list});
        console.log("compileHTML");
    }
}