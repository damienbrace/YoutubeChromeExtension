// Get element that holds the likes and dislikes
let getLikesElement = document.querySelectorAll("#top-level-buttons-computed #text");

function likeCount(likeElement){
    // Get like count from element
    upVotes = likeElement[0].textContent;
    // Check if like count is in the 1,000's
    if (upVotes.includes("K")){
        // Remove "K" from number
        upVotes = upVotes.split("K");
        // Select number
        upVotes = upVotes[0];
        // Return likes as an interger
        upVotes = upVotes + "000"
        return Number(upVotes);
    }
    else{
        // Return likes as an interger
        return Number(upVotes);
    }
    
    
}


function dislikeCount(likeElement){
    // Get dislike count from element
    upVotes = likeElement[1].textContent;
    if (upVotes.includes('K')){
        // Remove "K" from number
        upVotes = upVotes.split("K");
        // Select number
        upVotes = upVotes[0];
        upVotes = upVotes + "000"
        // Return dislikes as an interger
        return Number(upVotes);
    }
    else{
        // Return likes as an interger
        return Number(upVotes);
    }
}

function calculateRating(likes, dislikes){
    let rating = (Number(likes) / (Number(likes) + Number(dislikes))) * 100;
    rating = Math.round(rating);
    return rating.toString();
}



function addRatingToPage(rating){
    // Find parent element
    let parentElement = document.querySelectorAll("#top-level-buttons-computed > ytd-toggle-button-renderer:nth-child(1) > a");
    parentElement = parentElement[1];
    // Create span element
    let span = document.createElement("span");
    // Append span element to parent element
    span.textContent = rating;
    // Add rating to text content of span tag
    parentElement.appendChild(span);
}

let likes = likeCount(getLikesElement);
let dislikes = dislikeCount(getLikesElement);
let rating = calculateRating(likes, dislikes)
addRatingToPage(rating);

console.log(likes);
console.log(dislikes);
console.log(rating);















/* downVotes = votes[1].textContent;

downVotes = downVotes.split("K");
upVotes = upVotes[0];
downVotes = downVotes[0];

rating = (Number(upVotes) / (Number(upVotes) + Number(downVotes))) * 100;
rating = Math.round(rating);
rating.toString();

console.log(downVotes);
console.log(rating);


let ratingText = document.querySelector("#rating");
ratingText.textContent = rating; */