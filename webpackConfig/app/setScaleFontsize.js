/*设置根元素字体大小*/
function setHtmlFont () {
    var html = document.documentElement,
        deviceWidth = html.clientWidth > 1300 ? 1300 : html.clientWidth;
    console.log(deviceWidth);
    html.style.fontSize = (deviceWidth / 7.5) + 'px';
}
/*end*/
/*设置网页缩放*/
function setMetaViewport() {
    var header = document.querySelector('head'),
        devicePixelRatio = window.devicePixelRatio,
        scale = 1 / devicePixelRatio,
        metaViewport,
        metaViewportCont;

    metaViewportCont = 'width=device-width,initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no';

    metaViewport = document.createElement('meta');
    metaViewport.setAttribute('name','viewport');
    metaViewport.setAttribute('content',metaViewportCont)

    header.appendChild(metaViewport);
}
/*end*/

setMetaViewport();
setHtmlFont();

