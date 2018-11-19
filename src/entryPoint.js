import Viewport from './viewport';

export default container => {
    const canvas = createCanvas(document, container);
    const sceneManager = new Viewport(
        canvas,
        canvas.offsetWidth,
        canvas.offsetHeight
    );

    bindEventListeners();

    function createCanvas(document, container) {
        const canvas = document.createElement('canvas');
        container.appendChild(canvas);
        return canvas;
    }

    function bindEventListeners() {
        window.onresize = resizeCanvas;
        window.onmousemove = mouseMove;
        resizeCanvas();	
    }

    function resizeCanvas() {        
        canvas.style.width = '100%';
        canvas.style.height= '100%';

        sceneManager.width = canvas.offsetWidth;
        sceneManager.height = canvas.offsetHeight;

        sceneManager.onWindowResize();
    }

    function mouseMove({screenX, screenY}) {
        sceneManager.onMouseMove(screenX, screenY);
    }
}