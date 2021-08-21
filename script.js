let votes = document.querySelectorAll("#top-level-buttons-computed #text");
upVotes = votes[0].textContent;
downVotes = votes[1].textContent;
upVotes = upVotes.split("K");
downVotes = downVotes.split("K");
upVotes = upVotes[0];
downVotes = downVotes[0];

rating = (Number(upVotes) / (Number(upVotes) + Number(downVotes))) * 100;
rating = Math.round(rating);
console.log(upVotes);
console.log(downVotes);
console.log(rating);


let ratingText = document.querySelector("#rating");
ratingText.textContent = rating;