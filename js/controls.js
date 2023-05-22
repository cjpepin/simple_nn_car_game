class Controls {
    constructor(controlType) {
        this.left = false;
        this.right = false;
        this.up = false;
        this.down = false;

        switch(controlType) {
            case 'KEYS':
                this.#addKeyboardListeners();
                break;
            case 'DUMMY':
                this.up = true;
                break;
        }
    }

    #addKeyboardListeners() {
        document.onkeydown = (e) => {
            switch (e.key) {
                case 'ArrowLeft':
                    this.left = true;
                    break;
                case 'ArrowRight':
                    this.right = true;
                    break;
                case 'ArrowUp':
                    this.up = true;
                    break;
                case 'ArrowDown':
                    this.down = true;
                    break;
            }
        }

        document.onkeyup = (e) => {
            switch (e.key) {
                case 'ArrowLeft':
                    this.left = false;
                    break;
                case 'ArrowRight':
                    this.right = false;
                    break;
                case 'ArrowUp':
                    this.up = false;
                    break;
                case 'ArrowDown':
                    this.down = false;
                    break;
            }
        }
    }

}