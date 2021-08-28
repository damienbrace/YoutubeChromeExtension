/* fetch("https://api.agify.io/?name=damien")
.then(response => response.json())
.then(data => console.log(data));
 */

/* fetch("https://youtube.googleapis.com/youtube/v3/videos?part=statistics&id=cjrOxszo6No&key=AIzaSyCZ0Nc68EsVvYNKeOeRsVGxnSehYBus3Xc")
.then(response => response.json())
.then(items => items.items)
.then (items => items[0])
.then(statistics => console.log(statistics.statistics.likeCount));  */

/* fetch("https://youtube.googleapis.com/youtube/v3/videos?part=statistics&id=cjrOxszo6No&key=AIzaSyCZ0Nc68EsVvYNKeOeRsVGxnSehYBus3Xc")
.then(response => response.json())
.then(likes => console.log("Likes: " + likes.items[0].statistics.likeCount)) */

async function fetchStats(){
    const response = await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=statistics&id=cjrOxszo6No&key=AIzaSyCZ0Nc68EsVvYNKeOeRsVGxnSehYBus3Xc")
    const responseJ = await response.json()
    const stats = responseJ.items[0].statistics
    let rating = Math.floor(Number(stats.likeCount) / (Number(stats.likeCount) + Number(stats.dislikeCount)) * 100);
    console.log("Likes: " + stats.likeCount);
    console.log("Dislikes:" + stats.dislikeCount);
    console.log("Rating: " + rating);
    console.log(stats);
}

fetchStats()

