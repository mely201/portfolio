window.addEventListener("load", (e) => {
  e.preventDefault();

  new Glider(document.querySelector(".carousel__list"), {
    slidesToShow: 1,

    draggable: true,
    dots: document.querySelector(".carousel__indicator"),
    arrows: {
      prev: document.querySelector(".carousel__previus"),
      next: document.querySelector(".carousel__next"),
    },
    responsive: [
      {
        // screens greater than >= 775px
        breakpoint: 775,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: "1",
          slidesToScroll: "1",
          itemWidth: 150,
          duration: 0.25,
        },
      },
      {
        // screens greater than >= 1024px
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          itemWidth: 150,
          duration: 0.25,
        },
      },
    ],
  });
});
