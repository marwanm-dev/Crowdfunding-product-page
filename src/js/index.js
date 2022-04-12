// _____START BOOKMARK_____
const bookmarkContainer = document.querySelector(".bookmark");
const bookmark = document.querySelector(".img-container");
const para = bookmark.previousElementSibling;
// Change onclick
bookmarkContainer.addEventListener("click", () => {
      if (
            bookmark.className == "img-container unbookmarked" &&
            para.className == "unactivated"
      ) {
            bookmark.classList.remove("unbookmarked");
            bookmark.classList.add("bookmarked");
            para.classList.remove("unactivated");
            para.classList.add("activated");
      } else {
            bookmark.classList.remove("bookmarked");
            bookmark.classList.add("unbookmarked");
            para.classList.remove("activated");
            para.classList.add("unactivated");
      }
});
// _____END BOOKMARK_____
// _____START MODAL_____
const modal = document.querySelector(".modal");
const modalContent = modal.firstElementChild;
const modalSuccess = modal.lastElementChild;
const selected = document.querySelectorAll(".selected");
const successButton = modalSuccess.lastElementChild;
const navButton = document.querySelector(".project-middle").firstElementChild;
const itemButton = document.querySelectorAll(".reward");
const closeIcon = modalContent.firstElementChild.lastElementChild;
const products = document.querySelectorAll(".product");
const checkboxes = document.querySelectorAll(".check-box");
const titles = document.querySelectorAll(".prod-title");
const diffTitle = document.getElementsByClassName("success-title")[0];

// All EventListeners__
itemButton[0].addEventListener("click", () => {
      openModal();
      openContent();
      openWindow(products[1].firstElementChild.childNodes[3]);
});
itemButton[1].addEventListener("click", () => {
      openModal();
      openContent();
      openWindow(products[2].firstElementChild.childNodes[3]);
});
successButton.addEventListener("click", () => {
      closeSuccess();
      closeModal();
});
selected.forEach((item) => {
      const prodButton = item.lastElementChild;
      prodButton.addEventListener("click", () => {
            openSuccess();
            closeContent();
      });
});
titles.forEach((item) => {
      let Count = 0;
      item.addEventListener("click", () => {
            closeAll();
            openWindow(item);
            item.onclick(() => {
                  closeWindow(item);
            });
      });
});
diffTitle.addEventListener("click", () => {
      openSuccess();
      closeContent();
});
navButton.addEventListener("click", () => {
      openModal();
      openContent();
});
closeIcon.addEventListener("click", () => {
      closeModal();
      closeContent();
});

// All Functions__
openModal = () => {
      modal.style.display = "initial";
      modal.style.background = "rgb(0, 0, 0, 0.8)";
};
closeModal = () => {
      modal.style.display = "none";
      modal.style.background = "transparent";
};
openContent = () => {
      modalContent.style.display = "initial";
      modalContent.scrollIntoView(true);
};
closeContent = () => {
      modalContent.style.display = "none";
      // Reset
      closeAll();
};
openSuccess = () => {
      modalSuccess.style.display = "initial";
      modalSuccess.scrollIntoView(true);
};
closeSuccess = () => {
      modalSuccess.style.display = "none";
};
openWindow = (obj) => {
      obj.previousElementSibling.style.opacity = 1;
      obj.parentElement.parentElement.style.height = "350px";
      obj.parentElement.parentElement.style.border =
            "1px solid hsl(176, 50%, 47%)";
};
closeWindow = (obj) => {
      obj.previousElementSibling.style.opacity = 0;
      obj.parentElement.parentElement.style.height = "200px";
      obj.parentElement.parentElement.style.border =
            "1px solid hsl(0, 0%, 75%)";
};
closeAll = () => {
      products.forEach((item) => {
            item.style.height = "200px";
            item.style.border = "1px solid hsl(0, 0%, 75%)";
      });
      checkboxes.forEach((item) => {
            item.style.opacity = 0;
      });
};
// _____END MODAL_____
