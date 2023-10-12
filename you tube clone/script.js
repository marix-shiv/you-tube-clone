let button = document.querySelector(".hamburger_menu");
let sideBar = document.querySelector(".side_bar");
let videGrid = document.querySelector(".video_grid");

button.addEventListener("click", function () {
  if (
    sideBar.className == "side_bar_clicked" &&
    videGrid.className == "video_grid_Clicked"
  ) {
    sideBar.className = "side_bar";
    videGrid.className = "video_grid";
  } else {
    sideBar.className = "side_bar_clicked";
    videGrid.className = "video_grid_Clicked";
  }
});
console.log(sideBar);
