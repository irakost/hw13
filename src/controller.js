export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.view.compileHTML(this.model.getFromLocalStorage());
    this.btnSubmit = document.querySelector(".btn-submit");
    (function(self /* == this */) {
      self.btnSubmit.addEventListener('click', function() {
        let input = document.querySelector('.input-value');
        let linksFromModel = self.model.pushLink(input.value);
        self.view.compileHTML(linksFromModel);
      });
    })(this);
    console.log("controller");
  }
}