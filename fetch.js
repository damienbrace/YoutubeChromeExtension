async  function fetchYoutube(){
    const response = await fetch('https://www.youtube.com/watch?v=cuEtnrL9-H0');
    const html = await response.text();
    console.log(html);
 
}



fetchYoutube();

