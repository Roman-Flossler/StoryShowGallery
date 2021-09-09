
SSG.cfg.wordpressGalleryFS = true;
SSG.cfg.respectOtherWpGalleryPlugins = true;
SSG.cfg.captionExif = 'trim';
SSG.cfg.globalAuthorCaption =  "photo by Flor" ;
SSG.cfg.preferedCaptionLocation =  8;
SSG.cfg.onImgLoad = function(data) {  SSG.cfgFused.captionExif = ( data.imgName == "on-the-hook" || data.imgName == "klaksvik-sheeps" ) ? 'icon' : 'trim'; };

// Watermark - logo configuration. Enter watermark text or image URL to display it. It has to be inside quotes.
// EXAMPLE: SSG.cfg.watermarkText = '© Mia Photo'; OR  SSG.cfg.watermarkImage = 'https://www.flor.cz/img/florcz.png';
SSG.cfg.watermarkWidth = 147; // watermark width in pixels, it is downsized on smaller screens.
SSG.cfg.watermarkImage = '';  // watermark image URL
SSG.cfg.watermarkOffsetX = 2; // watermark horizontal offset from left in percents
SSG.cfg.watermarkOffsetY = 2; // watermark vertical offset from bottom in percent of display size
SSG.cfg.watermarkOpacity = 0.42; // opacity

SSG.cfg.watermarkText = window.screen.width > 933 ? '<b>ꐠ</b> Story Show Gallery' : '<b>ꐠ</b> SSG';
SSG.cfg.watermarkFontSize = window.screen.width > 933 ? 18 : 20;

// URL of the HTML file to load behind the gallery (usually a signpost to other galleries). Set to null if you don't want it.
SSG.cfg.fileToLoad = 'https://roman-flossler.github.io/StoryShowGallery/play.html';   // More info about signpost is at https://ssg.flor.cz/

//SSG.cfg.separateWpGalleries = true;


if (location.hash == '#model') {
    jQuery('a[href*="faroe-islands-map"]').addClass('nossg');
    SSG.run( { imgs: [ { href: '../photos/model.jpg', alt: '', author: '' } ], imgsPos:'start', initImgID: 3, fsa:true, cfg: { theme:'dim'} });
}
