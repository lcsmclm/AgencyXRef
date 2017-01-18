(function(){
  "use strict";
  //var docImgs = document.querySelectorAll(".image-holder");
  //var docHeader = document.querySelector(".heading");
  //var docSubHeader = document.querySelector(".main-copy h2");
  //var docSubText = document.querySelector(".main-copy p");
  var appliedClass;
var $docImgs = $('.image-holder');
var $docHeader = $('.heading');
var $docSubHeader = $('.main-copy h2');
var $docSubText = $('.main-copy p');
  function changedElements() {

    $docSubHeader.removeClass(appliedClass);
    $docHeader.removeClass(appliedClass);

    appliedClass = event.currentTarget.id

    $docSubHeader.addClass(event.currentTarget.id);
    $docHeader.addClass(event.currentTarget.id);

$docSubHeader.text(dynamicContent[event.currentTarget.id].header);
$docSubText.text(dynamicContent[event.currentTarget.id].text);
  }
  /**[].forEach.call(docImgs, function(image){
image.addEventListener('click', changedElements, true);
  }); //looks at how many images, then asks each one to run the function image**/

  $docImgs.click(function(){
    changedElements();
  });

})();

/**(function(){
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

**/
