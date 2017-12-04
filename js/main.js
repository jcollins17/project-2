var SlideFrame = document.getElementById("slideshow");

function slideshow() {
    var imgsrc = SlideFrame.getAttribute('src');

    if(imgsrc === 'content/images/img3.png') {
      SlideFrame.setAttribute ('src','content/images/img1.png');
      return;
    }
    if(imgsrc === 'content/images/img2.png') {
      SlideFrame.setAttribute ('src','content/images/img3.png');
      return;
    }
    else {
      SlideFrame.setAttribute ('src','content/images/img2.png');
      return;
    }
}
/*myImage.onclick = slideshow();*/
let timerId = setInterval(() => slideshow(),5000);
