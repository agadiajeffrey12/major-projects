const sectionPopUp = document.querySelector("#section-pop");
const closePop = document.querySelector("#close-pop-up");
const addToCartButton = document.querySelectorAll(".add-to-cart");
const cartPop = document.querySelectorAll(".e");
const itemPic = document.querySelectorAll(".item-pic");
const hideContent = function (e, b) {
  e.classList.add("hide");
  b.classList.remove("hide");
};
closePop.addEventListener("click", function () {
  hideContent(sectionPopUp);
});

const currentIteratior = 1;
console.log(cartPop.item(currentIteratior));
console.log(cartPop.length);
console.log(cartPop.item(0).firstElementChild.currentSrc);
addToCartButton.forEach((element) => {
  element.addEventListener("click", function () {
    cartPop.forEach((e) => {
      const currentPosition = Array.prototype.slice.call(cartPop);
      // console.log(currentPosition);
      for (let i = 0; i < currentPosition.length; i++) {
        let imagePoint = currentPosition[i].firstElementChild.src;
        if (imagePoint == currentPosition[i].firstElementChild.src) {
          console.log("");
        }
      }
      const divElement = document.createElement("div");
      element.parentNode.appendChild(divElement);
      element.parentNode.classList.add("control");
      const previewImage = document.createElement("img");

      divElement.appendChild(previewImage);
      divElement.classList.add("pos-abs", "display-cart-item", "d-flex");
      e.classList.add("pos-rel");
      const imageArray = [];
      itemPic.forEach((e) => {
        if (
          e.parentNode.firstElementChild.src ===
          e.parentNode.firstElementChild.src
        ) {
          imageArray.push(e.parentElement.firstElementChild.src);
          // console.log(imageArray);
          previewImage.src = e.parentElement.firstElementChild.currentSrc;
        } else {
          console.log("mao");
        }
      });
    });
  });
});
