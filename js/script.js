$(document).ready(function () {
  //$("body").css("overflow", "hidden");
  let observar = [true, true, true, true];
  const elementosObservados = [".redes", "#about-us", "#services", "#contact"];
  let guia = true;

  const observarAnimar = (elemento) => {
    const options = {
      threshold: 1.0,
    };
    const cb = (entries) => {
      if (!observar[elemento]) return;
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          observar[elemento] = false;

          document
            .querySelector(elementosObservados[elemento])
            .classList.toggle("animate__animated");
          document
            .querySelector(elementosObservados[elemento])
            .classList.toggle("animate__bounceInDown");
          document
            .querySelector(elementosObservados[elemento])
            .classList.toggle("animate__delay-1s");
        }
      });
    };

    let observer = new IntersectionObserver(cb, options);
    observer.observe(document.querySelector(elementosObservados[elemento]));
  };

  elementosObservados.map((elemento, index) => {
    observarAnimar(index);
  });

  const verify = (scrollPosition) => {
    if (window.scrollY !== scrollPosition) {
      guia = false;
    }
  };
  const guiar = () => {
    if (!guia) return;
    setTimeout(() => {
      window.location.href = "#about-us";
      let scrollPosition = window.scrollY;
      verify(scrollPosition);
    }, 5000);
    if (!guia) return;

    setTimeout(() => {
      window.location.href = "#services";
      let scrollPosition = window.scrollY;
      verify(scrollPosition);
    }, 5000 * 2);
    if (!guia) return;

    setTimeout(() => {
      window.location.href = "#contact";
      let scrollPosition = window.scrollY;
      verify(scrollPosition);
    }, 5000 * 3);
    if (!guia) return;

    setTimeout(() => {
      window.location.href = "#inicio";
      let scrollPosition = window.screenY;
      verify(scrollPosition);
      $("body").css("overflow", "auto");
    }, 5000 * 4);

    if (!guia) return;
  };
  guiar();
  $(function () {
    var windowH = $(window).height();
    var wrapperH = $(".hero").height();
    if (windowH > wrapperH) {
      $(".hero").css({ height: $(window).height() + "px" });
    }
    $(window).resize(function () {
      var windowH = $(window).height();
      var wrapperH = $(".hero").height();
      var differenceH = windowH - wrapperH;
      var newH = wrapperH + differenceH;
      var truecontentH = $("#truecontent").height();
      if (windowH > truecontentH) {
        $(".hero").css("height", newH + "px");
      }
    });
  });
});
