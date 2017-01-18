(function(){
  "use strict";
  var docImgs = document.querySelectorAll(".image-holder");
  var docHeader = document.querySelector(".heading");
  var docSubHeader = document.querySelector(".main-copy h2");
  var docSubText = document.querySelector(".main-copy p");
  var appliedClass;


  function changedElements() {

    docSubHeader.classList.remove(appliedClass);
    docHeader.classList.remove(appliedClass);

    appliedClass = this.id;
    docSubHeader.classList.add(this.id);
    docHeader.classList.add(this.id);

    docSubHeader.firstChild.nodeValue = dynamicContent[this.id].headline;
    docSubText.firstChild.nodeValue = dynamicContent[this.id].text;
  }
  [].forEach.call(docImgs, function(image){
image.addEventListener('click', changedElements, true);
  }); //looks at how many images, then asks each one to run the function image

  docSubHeader.firstChild.nodeValue = dynamicContent['winter'].headline;
  docSubText.firstChild.nodeValue = dynamicContent['winter'].text;
})();
