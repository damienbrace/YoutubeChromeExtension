
if( document.readyState !== 'loading' ) {
    myInitCode();

} else {
    document.addEventListener('DOMContentLoaded', function () {
        myInitCode();
    });
}

function myInitCode() {
    console.log("Page Loaded");
    getAllLinks();
}

function getAllLinks(){
    links = document.querySelectorAll("#video-title-link")
    for (i=0; i < links.length; i++){
        linkID = links[i].href.split("v=")[1];
        linkTitle = links[i].title;
        fetchStats(linkID, linkTitle)
        
    }
    
}



async function fetchStats(id, title){
    const response = await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=statistics&id=" + id + "&key=AIzaSyCZ0Nc68EsVvYNKeOeRsVGxnSehYBus3Xc")
    const responseJ = await response.json()
    const stats = responseJ.items[0].statistics
    let rating = Math.floor(Number(stats.likeCount) / (Number(stats.likeCount) + Number(stats.dislikeCount)) * 100);

    
    console.log("Title: "+ title);
    console.log("ID: "+ id);
    console.log("Likes: " + stats.likeCount);
    console.log("Dislikes:" + stats.dislikeCount);
    console.log("Rating: " + rating);
    console.log(" ");
}

function addRatingsToPage(){
    
}








