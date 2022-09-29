class Controls {
  constructor() {
    this.forward = false;
    this.reverse = false;
    this.right = false;
    this.left = false;

    this.#addListener();
  }

  #addListener() {
    document.onkeydown = (ev) => {
      switch (ev.key) {
        case "ArrowLeft":
          this.left = true;
          break;
        case "ArrowUp":
          this.forward = true;
          break;
        case "ArrowRight":
          this.right = true;
          break;
        case "ArrowDown":
          this.reverse = true;
          break;
      }
    };

    document.onkeyup = (ev) => {
      switch (ev.key) {
        case "ArrowLeft":
          this.left = false;
          break;
        case "ArrowUp":
          this.forward = false;
          break;
        case "ArrowRight":
          this.right = false;
          break;
        case "ArrowDown":
          this.reverse = false;
          break;
      }
    };
  }
}
