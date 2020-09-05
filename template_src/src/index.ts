

const app = document.getElementById('app');

document.addEventListener('deviceready', () => {
    // Now your app is ready. Do whatever you like.

    app.innerText = 'hello world!';
    (navigator as any).splashscreen.hide();
});