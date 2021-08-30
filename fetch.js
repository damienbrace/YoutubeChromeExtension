async  function fetchYoutube(){
    const response = await fetch('https://www.youtube.com/watch?v=cuEtnrL9-H0');
    const html = await response.text();
<<<<<<< HEAD
    return html;
=======
    console.log(html);
 
>>>>>>> 9b50eca1a3ffd04ca9509283ce0c65ceace34043
}

function convertToHTML(text){
    let parser = new DOMParser();
    let doc = parser.parseFromString(text, 'text/html');
    return doc;
}

<<<<<<< HEAD
let html = await fetchYoutube();
let htmlDoc = await convertToHTML(html);
console.log(htmlDoc);
=======
fetchYoutube();

>>>>>>> 9b50eca1a3ffd04ca9509283ce0c65ceace34043
