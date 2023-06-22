window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    document.getElementById("div0").style.animation = '0.5s linear fadein';
    document.getElementById("div0").style.opacity = 1;
  }
};