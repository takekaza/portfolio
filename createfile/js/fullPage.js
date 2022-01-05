jQuery(function () {
  jQuery("#fullpage").fullpage({
    scrollOverflow: false,
    navigation: true,
    navigationPosition: "left",
    loopBottom: true,
    anchors: ["1", "2", "3", "4", "5"],
    onLeave: function (index, nextIndex, direction) {
      if (direction == "down") {
        $(".tg-" + index).each(function () {
          $(this).removeClass("fadeUp");
          $(this).removeClass("bgLRextend");
        });
        for (let i = 1; i < 6; i++) {
          if (i == nextIndex) {
            $(".tg-" + i).each(function () {
              $(this).addClass("fadeUp");
              $(this).addClass("bgLRextend");
            });
          }
        }
        $(".ct-" + index).each(function () {
          $(this).removeClass("-visible");
        });
        for (let i = 1; i < 6; i++) {
          if (i == nextIndex) {
            let ct = ".ct-" + i;
            let ctTitle = ".content-item__title" + ct;
            let ctText = ".content-item__text" + ct;
            $(".ct-" + i).each(function () {
              $(ctTitle).each(function () {
                let delay = 600;
                setTimeout(() => {
                  $(this).addClass("-visible");
                }, delay);
              });
              $(ctText).each(function () {
                let delay = 800;
                setTimeout(() => {
                  $(this).addClass("-visible");
                }, delay);
              });
            });
          }
        }
      } else if (direction == "up") {
        $(".tg-" + index).each(function () {
          $(this).removeClass("fadeUp");
          $(this).removeClass("bgLRextend");
        });
        for (let i = 1; i < 6; i++) {
          if (nextIndex == 1) {
            $(".tg-" + i).each(function () {
              $(this).addClass("fadeUp");
            });
          } else if (i == nextIndex) {
            $(".tg-" + i).each(function () {
              $(this).addClass("fadeUp");
              $(this).addClass("bgLRextend");
            });
          }
        }
        $(".ct-" + index).each(function () {
          $(this).removeClass("-visible");
        });
        for (let i = 1; i < 6; i++) {
          if (i == nextIndex) {
            let ct = ".ct-" + i;
            let ctTitle = ".content-item__title" + ct;
            let ctText = ".content-item__text" + ct;
            $(".ct-" + i).each(function () {
              $(ctTitle).each(function () {
                let delay = 600;
                setTimeout(() => {
                  $(this).addClass("-visible");
                }, delay);
              });
              $(ctText).each(function () {
                let delay = 800;
                setTimeout(() => {
                  $(this).addClass("-visible");
                }, delay);
              });
            });
          }
        }
      }
    },
    afterLoad: function (anchorLink, index) {
      for (let i = 1; i < 6; i++) {
        if (i == index) {
          continue;
        }
        $(".tg-" + i).each(function () {
          $(this).removeClass("fadeUp");
        });
      }
    },
  });
});
