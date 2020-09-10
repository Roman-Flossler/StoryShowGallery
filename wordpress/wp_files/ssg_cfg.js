// ---------------------- ⚙️⚙️⚙️ Story Show Gallery CONFIGURATION ⚙️⚙️⚙️ ---------------------------

// ⚙️ How to change configuration: Overwrite values (e.g.: 600 instead of 500 or true instead of false ) 
// and save the changes by clicking on Update file button at bottom of this page.
// Don't worry about the warning below, you can't screw it up, the gallery can use backup configuration.

// IMPORTANT! To see changes, you have to first press SHIFT+F5 when viewing your website. It refreshes browser cache.


// duration of scroll animation in miliseconds. Set to 0 for no scroll animation.
SSG.cfg.scrollDuration = 500;

// Photos from Wordpress galleries will show in full screen (Individual images not).
SSG.cfg.wordpressGalleryFS = true;

// Force SSG to always display in fullscreen - true/false
SSG.cfg.alwaysFullscreen = false;

// Force SSG to never display in fullscreen - true/false
SSG.cfg.neverFullscreen = false;

// if you set this to false, SSG gallery will try to override lightbox from other Wordpress gallery plugins.
SSG.cfg.respectOtherWpGalleryPlugins = true;

// display social share icon and menu
SSG.cfg.socialShare = true;

// log image views into Google Analytics - true/false. SSG supports only ga.js tracking code.
SSG.cfg.logIntoGA = true;

// Protect photos from being copied via right click menu - true/false
SSG.cfg.rightClickProtection = true;

// Side caption for smaller, landscape oriented photos, where is enough space below them as well as on their side. true/false
SSG.cfg.sideCaptionforSmallerLandscapeImg = false;  // false means caption below
// in other cases caption position depends on photo size vs. screen size.

// Locking the scale of mobile viewport at 1. Set it to true if the gallery has scaling problem on your website. 
SSG.cfg.scaleLock1 = false; 

// Watermark - logo configuration. Enter watermark text or image URL to display it. It has to be inside quotes.
// EXAMPLE: SSG.cfg.watermarkText = '© Mia Photo'; OR  SSG.cfg.watermarkImage = 'https://www.flor.cz/img/florcz.png';
SSG.cfg.watermarkWidth = 147; // watermark width in pixels, it is downsized on smaller screens.
SSG.cfg.watermarkImage = '';  // watermark image URL
SSG.cfg.watermarkText = 'ꐠ SSG';  //  watermark text, text will wrap according to watermark width
SSG.cfg.watermarkOffsetX = 2; // watermark horizontal offset from left in percents
SSG.cfg.watermarkOffsetY = 2; // watermark vertical offset from bottom in percent of display size
SSG.cfg.watermarkOpacity = 0.36; // opacity
SSG.cfg.watermarkFontSize = 20; // font size in pixels  

// Here you can translate SSG into other language. Leave tags <> and "" as they are.
SSG.cfg.hint1 = "Browse through Story Show Gallery by:";
SSG.cfg.hint2 = "a mouse wheel <strong>⊚</strong> or arrow keys <strong>↓→↑←</strong>";
SSG.cfg.hint3 = "or <strong>TAP</strong> on the bottom (top) of the screen";
SSG.cfg.hintTouch = "<strong>TAP</strong> on the bottom (top) of the screen<br> to browse through Story Show Gallery.";
SSG.cfg.hintFS = "For a better experience <br><a>click for fullscreen mode</a>"
SSG.cfg.toTheTop = "Scroll to top";
SSG.cfg.exitLink = "Exit the Gallery";

// share link dialog
SSG.cfg.imageLink = "The link to selected image:";
SSG.cfg.copyButton  = "⎘ Copy the link to clipboard";
SSG.cfg.linkPaste = "…and you can paste it anywhere via ctrl+v";

// in the portrait mode the gallery suggest to turn phone into landscape mode
SSG.cfg.showLandscapeHint = true;
SSG.cfg.landscapeHint = 'photos look better in landscape mode <span>😉</span>';

// URL of the HTML file to load behind the gallery (usually a signpost to other galleries). Set to null if you don't want it.
SSG.cfg.fileToLoad = null;   // More info about signpost is at https://ssg.flor.cz/
