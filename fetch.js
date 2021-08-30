async  function fetchYoutube(){
    const response = await fetch('https://www.youtube.com/watch?v=cuEtnrL9-H0');
    const html = await response.text();
    return html;
}

function convertToHTML(text){
    let parser = new DOMParser();
    let doc = parser.parseFromString(text, 'text/html');
    return doc;
}

let html = await fetchYoutube();
let htmlDoc = await convertToHTML(html);
console.log(htmlDoc);
