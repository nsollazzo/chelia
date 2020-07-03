var container = document.getElementById("rss-embed");
if (container) {
    var css = document.createElement('link');
    css.href = document.location.origin+"/js/rss-embed/rss-embed.css";
    css.rel = "stylesheet"
    document.getElementsByTagName('head')[0].appendChild(css);
    var script = document.createElement('script');
    script.src = document.location.origin+"/js/rss-embed/rss-embed.js";
    document.getElementsByTagName('body')[0].appendChild(script);
}