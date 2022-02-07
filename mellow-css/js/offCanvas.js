class OffCanvas {
  constructor(element) {
    this.element = element;
    this.isVisible = false;
  }

  // Functions
  toggle() {
    return this.isVisible ? this.hide() : this.show();
  }

  hide() {
    if (!this.isVisible) {
      return;
    }

    this.isVisible = false;
    this.element.classList.remove('show');
  }

  show() {
    if (this.isVisible) {
      return;
    }

    this.isVisible = true;
    this.element.classList.add('show');
  }
}

export default OffCanvas;
