console.log('connected');

const generate = document.getElementById('generate_text_btn');
generate.setAttribute('href', 'data:text/plain;charset=utf-8');
generate.setAttribute('download', 'template.txt');