var isMobileScreen = window.matchMedia(
  "(max-width: 933px) and (orientation: landscape), (max-width: 500px) and (orientation: portrait) "
).matches;
SSG.cfg.wordpressGalleryFS = true;
SSG.cfg.respectOtherWpGalleryPlugins = true;
SSG.cfg.captionExif = "trim";
SSG.cfg.enlargeImg = window.innerWidth > 2500 ? true : false;
SSG.cfg.theme = window.screen.width < 1666 && !isMobileScreen ? "dark" : "dim";
SSG.cfg.globalAuthorCaption = "photo by Flor";
SSG.cfg.preferedCaptionLocation = 8;
SSG.cfg.onImgLoad = function (data) {
  SSG.cfgFused.captionExif =
    data.imgName == "on-the-hook" || data.imgName == "klaksvik-sheeps" ? "icon" : SSG.cfg.captionExif;
};

// Watermark - logo configuration. Enter watermark text or image URL to display it. It has to be inside quotes.
// EXAMPLE: SSG.cfg.watermarkText = '© Mia Photo'; OR  SSG.cfg.watermarkImage = 'https://www.flor.cz/img/florcz.png';
SSG.cfg.watermarkWidth = 147; // watermark width in pixels, it is downsized on smaller screens.
SSG.cfg.watermarkImage = ""; // watermark image URL
SSG.cfg.watermarkOffsetX = 2; // watermark horizontal offset from left in percents
SSG.cfg.watermarkOffsetY = 1;
SSG.cfg.watermarkOpacity = 0.42; // opacity
SSG.cfg.imgBorderRadius = "0.2";

SSG.cfg.watermarkText = "<b>ꐠ</b> Story Show Gallery";
SSG.cfg.watermarkFontSize = 18;

// URL of the HTML file to load behind the gallery (usually a signpost to other galleries). Set to null if you don't want it.
SSG.cfg.fileToLoad = "https://roman-flossler.github.io/StoryShowGallery/play.html"; // More info about signpost is at https://ssg.flor.cz/

//SSG.cfg.separateWpGalleries = true;

if (location.hash == "#model") {
  jQuery('a[href*="faroe-islands-map"]').addClass("nossg");
  SSG.run({
    imgs: [{ href: "../photos/model.jpg", alt: "", author: "" }],
    imgsPos: "start",
    initImgID: 3,
    fsa: true,
    cfg: { theme: "dim" },
  });
}

function displayBorder(checkbox) {
  if (checkbox.checked) {
    SSG.cfg.imgBorderWidthX = 24;
    SSG.cfg.imgBorderWidthY = 24;
    SSG.cfg.imgBorderColor = "#cfcfcf";
    SSG.cfg.imgOutlineColor = "#ede89b";
    SSG.cfg.watermarkOffsetY = -23;
    SSG.cfg.watermarkText = "© Story Show Gallery";
    SSG.cfg.watermarkFontColor = "#26174a";
    SSG.cfg.watermarkOffsetX = 3;
    SSG.cfg.watermarkOpacity = 1;
    SSG.cfg.imgBorderLightFx = true;
    setTimeout(function () {
      SSG.run({ initImgID: 5, fs: true });
    }, 888);
  } else {
    SSG.cfg.watermarkOpacity = 0.42;
    SSG.cfg.imgBorderWidthX = 1;
    SSG.cfg.imgBorderWidthY = 1;
    SSG.cfg.imgBorderColor = "";
    SSG.cfg.imgOutlineColor = "";
    SSG.cfg.watermarkText = "<b>ꐠ</b> Story Show Gallery";
    SSG.cfg.watermarkFontColor = "";
    SSG.cfg.watermarkOffsetY = 0.6;
    SSG.cfg.watermarkOffsetX = 1.8;
    SSG.cfg.imgBorderLightFx = false;
  }
}
