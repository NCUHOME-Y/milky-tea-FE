export function captureScreen() {
    html2canvas(document.body).then(function (canvas) {
        var img = canvas.toDataURL('image/png');
        var link = document.createElement('a');
        link.href = img;
        link.download = 'screenshot.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}