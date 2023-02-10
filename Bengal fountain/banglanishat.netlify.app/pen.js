var b = document.getElementById("b");
var ctx = b.getContext("2d");

//making the canvas full screen
b.height = window.innerHeight;
b.width = window.innerWidth;


var bangla = "অ আ ই ই উ ঊ ঋ  এ ঐ ও ঔ ক খ গ ঘ ঙ চ ছ জ ঝ ঞ ট ঠ ড ঢ ণ ত থ দ ধ ন প ফ ব ভ ম য় ড় ঢ় য র ল হ শ ষ স ৎ ং ঃ ঽ ১ ২ ৩ ৪ ৫ ৬ ৭ ৮ ৯ ০ অ আ ই ই উ ঊ ঋ  এ ঐ ও ঔ ক খ গ ঘ ঙ চ ছ জ ঝ ঞ ট ঠ ড ঢ ণ ত থ দ ধ ন প ফ ব ভ ম য় ড় ঢ় য র ল হ শ ষ স ৎ ং ঃ ঽ ১ ২ ৩ ৪ ৫ ৬ ৭ ৮ ৯ ০";

bangla = bangla.split("");

var font_size = 14;
var columns = b.width / font_size;
var drops = [];

for (var x = 0; x < columns; x++)
    drops[x] = 1;


function draw() {

    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, b.width, b.height);

    ctx.fillStyle = "#0F0"; //green text
    ctx.font = font_size + "px arial";
    //looping over drops
    for (var i = 0; i < drops.length; i++) {
        print;
        var text = bangla[Math.floor(Math.random() * bangla.length)];

        ctx.fillText(text, i * font_size, drops[i] * font_size);


        if (drops[i] * font_size > b.height && Math.random() > 0.947)
            drops[i] = 0;


        drops[i]++;
    }
}

setInterval(draw, 50);
//# sourceURL=pen.js