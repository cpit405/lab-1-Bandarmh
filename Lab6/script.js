const initLikes = 100;
const initDislikes = 20;

let upCount = initLikes
let downCount = initDislikes

let likesBtn = document.getElementById("likeBtn");
let dislikesBtn = document.getElementById("dislikeBtn");
likesBtn.innerText = "👍" + initLikes;
dislikesBtn.innerText = "👎" + initDislikes;

// check for cookies
window.onload = function(){
      if (document.cookie && document.cookie.indexOf("voted")>-1){
            disableButtons();
}
}

function doLike(){
upCount++;
likesBtn.innerText = "👍" + upCount;
disableButtons();
setCookie();
console.log("You liked this!")
}

function doDislike(){
downCount++;
dislikesBtn.innerText = "👎" + downCount;
disableButtons();
setCookie();
console.log("You Didliked this!")
}

function disableButtons(){
    dislikesBtn.disabled = true;
    likesBtn.disabled = true;
}

function setCookie(){
    document.cookie ="voted=true; SameSite=Max-Age="+ 60;
}