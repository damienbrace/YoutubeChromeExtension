async  function fetchYoutube(){
    const response = await (await fetch('https://www.youtube.com', myInit)).text;
    console.log(response);
}

const myInit = {
    method: 'GET',
    mode: 'no-cors'
};
fetchYoutube();