document.getElementById('generate_text_btn').addEventListener('click', function () {
    let content = "";

    if (document.getElementById('exampleCheck1').checked) {
        content += "List item 1 checked\n";
    }

    if (document.getElementById('exampleCheck2').checked) {
        content += "List item 2 checked\n";
    }

    if (document.getElementById('exampleCheck3').checked) {
        content += "List item 3 checked\n";
    }
    
    downloadAsFile({
        data: content,
        filename: 'demo.txt'
    })
})