console.log('connected');

document.getElementById('generate_text_btn').addEventListener('click', function () {
    downloadAsFile({
        data: 'this is some text',
        filename: 'demo.txt'
    })
})