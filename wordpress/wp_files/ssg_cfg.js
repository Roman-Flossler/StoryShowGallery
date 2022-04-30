
SSG.cfg.wordpressGalleryFS = true;
SSG.cfg.respectOtherWpGalleryPlugins = true;
SSG.cfg.captionExif = 'trim';
SSG.cfg.globalAuthorCaption =  "photo by Flor" ;
SSG.cfg.preferedCaptionLocation =  8;
SSG.cfg.onImgLoad = function(data) {  SSG.cfgFused.captionExif = ( data.imgName == "on-the-hook" || data.imgName == "klaksvik-sheeps" ) ? 'icon' : SSG.cfg.captionExif; };

// Watermark - logo configuration. Enter watermark text or image URL to display it. It has to be inside quotes.
// EXAMPLE: SSG.cfg.watermarkText = '© Mia Photo'; OR  SSG.cfg.watermarkImage = 'https://www.flor.cz/img/florcz.png';
SSG.cfg.watermarkWidth = 147; // watermark width in pixels, it is downsized on smaller screens.
SSG.cfg.watermarkImage = '';  // watermark image URL
SSG.cfg.watermarkOffsetX = 2; // watermark horizontal offset from left in percents
SSG.cfg.watermarkOffsetY = 1;
SSG.cfg.watermarkOpacity = 0.42; // opacity
SSG.cfg.imgBorderRadius = "0.2";

SSG.cfg.watermarkText = '<b>ꐠ</b> Story Show Gallery';
SSG.cfg.watermarkFontSize = 18;

// URL of the HTML file to load behind the gallery (usually a signpost to other galleries). Set to null if you don't want it.
SSG.cfg.fileToLoad = 'https://roman-flossler.github.io/StoryShowGallery/play.html';   // More info about signpost is at https://ssg.flor.cz/

//SSG.cfg.separateWpGalleries = true;


if (location.hash == '#model') {
    jQuery('a[href*="faroe-islands-map"]').addClass('nossg');
    SSG.run( { imgs: [ { href: '../photos/model.jpg', alt: '', author: '' } ], imgsPos:'start', initImgID: 3, fsa:true, cfg: { theme:'dim'} });
}

function displayBorder(checkbox) {
    if(checkbox.checked) {
        SSG.cfg.imgBorderWidthX = 28;
        SSG.cfg.imgBorderWidthY = 20;
        SSG.cfg.imgBorderColor = "#bbbbbb";
        SSG.cfg.watermarkOffsetY = -26;
        //SSG.cfg.watermarkFontColor  = "blue";
        SSG.cfg.watermarkOffsetX = 3;
        SSG.cfg.imgBorderLightFx = true; 
        setTimeout(function(){ SSG.run({ initImgID: 5, fs: true}) }, 888);
    } else {
        SSG.cfg.imgBorderWidthX = 1;
        SSG.cfg.imgBorderWidthY = 1;
        SSG.cfg.imgBorderColor = "";
        SSG.cfg.watermarkOffsetY = 0.6;
        SSG.cfg.watermarkOffsetX = 1.8;
        SSG.cfg.imgBorderLightFx = false;
    }
}
