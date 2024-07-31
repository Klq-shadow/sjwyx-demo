!(function (e, t) {
  var n = t.documentElement,
    d = e.devicePixelRatio || 1;

  function i() {
    var w = n.clientWidth,
      e;
    e = w > 800 ? 800 : w;
    n.style.fontSize = e / 7.5 + "px";
  }
  if (
    ((function e() {
      t.body
        ? (t.body.style.fontSize = "12px")
        : t.addEventListener("DOMContentLoaded", e);
    })(),
    i(),
    e.addEventListener("resize", i),
    e.addEventListener("pageshow", function (e) {
      e.persisted && i();
    }),
    d >= 2)
  ) {
    var o = t.createElement("body"),
      a = t.createElement("div");
    (a.style.border = ".5px solid transparent"),
      o.appendChild(a),
      n.appendChild(o),
      1 === a.offsetHeight && n.classList.add("hairlines"),
      n.removeChild(o);
  }
})(window, document);
$(function () {

  // pc移动自动切换
  !core.isMobile && !location.host.indexOf('m.') && (location.href = location.href.replace('//m.', '//www.'));

  //新闻详情页
  //内容区iframe视频自适应
  function videoResize() {
    var video = $(".articleNew iframe.video");
    if (video.length) {
      var w = $(".articleNew").width();
      video.width(w);
      video.height(w / 1.5);
    }

    var video2 = $(".content-desc iframe.video");
    if (video2.length) {
      var w = $(".content-desc").width();
      video2.width(w);
      video2.height(w / 1.5);
    }
  }
  videoResize();
  $(window).resize(function () {
    videoResize();
  });

  //软件游戏列表点击跳转
  $(".app-box-jump").on("click", "li", function () {
    var link = $(this).find("a").eq(0).attr("href");
    location.href = link;
  });

  //fancybox 图片预览效果需在图片外层添加a标签
  function imgPreview() {
    var imgAddTag = function (item, index, dataFancybox) {
      var that = $(item);
      var src = that.attr("src");
      var alt = that.attr("alt");
      that.removeAttr("style");
      that.removeAttr("height");
      that.removeAttr("width");
      that.attr("title", "" + alt + "");
      that.wrap(
        '<a data-fancybox="' +
          dataFancybox +
          '" title="" href="' +
          src +
          '" data-caption="' +
          (alt ? alt : "") +
          '"></a>'
      );
    };
    //文章
    $("#softRemarkText")
      .find("img")
      .each(function (index, element) {
        imgAddTag(element, index, "detailCont");
      });
    //截图
    $(".PicturesShow")
      .find("img")
      .each(function (index, element) {
        imgAddTag(element, index, "appScreenshot");
      });
    $("#contentDesc")
      .find("img")
      .each(function (index, element) {
        imgAddTag(element, index, "contentDesc");
      });
  }
  navigator.userAgent.match(/baiduboxapp/i) || imgPreview();

  backTop();
});


function statis(id, classify) {
  var baseUrl = 'http://www.sjwyx.com';
  var tongji = new Image();
  tongji.src = baseUrl + '/ajax/stat?id=' + id + '&name=' + classify + '&type=2&time='+(new Date()).getTime();
}

/**返回顶部 */
function backTop() {
  /**添加点击事件 */
  $('.back_top').click(()=>{
      $('html,body').animate({
          scrollTop: 0
      }, 300);
  })
}
/**公共tabs切换 对应类名 m_com_toggle */
function mComToggleSelect(event){
  const target = event.target;
  if(target.dataset.key){
    const sourceDom = target.parentNode.parentNode;
    const key = parseInt(target.dataset.key);
    if(target.classList.contains('is-active')){
      return;
    }else{
      sourceDom.querySelector('.mct_tab_item.is-active').classList.remove('is-active');
      target.classList.add('is-active');
      const transtionValue = sourceDom.querySelector(`.mct_content_item:nth-child(${key+1})`).offsetLeft;
      sourceDom.querySelector('.mct_content_layout').style.transform = `translateX(-${transtionValue}px)`;
    }
  }else{
    return;
  }
}