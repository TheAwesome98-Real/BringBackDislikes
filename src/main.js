var dislikeCount = document.querySelector(".top-level-buttons").getElementsByTagName("ytd-toggle-button-renderer")[1].getElementsByTagName("a")[0].getElementsByTagName("yt-formatted-string")[0];

if (!dislikeCount.innerText.toLowerCase() == "dislike") {
  // TODO: send to me!!!!!
} else {
  alert("test");
}
