window.onload = () => {
  $(document).ready(function () {
    $('.news__slide').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3
    });
  });
}