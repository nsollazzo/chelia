var container = document.getElementById("rss-embed");
if (container) {
    var css = document.createElement('link');
    css.href = "../css/embed-rss.css";
    css.rel = "stylesheet"
    document.getElementsByTagName('head')[0].appendChild(css);
    var script = document.createElement('script');
    script.src = "./embed-rss.js";
    document.getElementsByTagName('body')[0].appendChild(script);
}