$(function () {
    var baseUrl = 'http://www.sjwyx.com';
    var report = false;
    //详情页下载链
    function download() {

        console.log(111);
        var links = $('.downlinks');
        var androidBtn = $('.downlinks .android')
        var iosBtn = $('.downlinks .ios')
        var yuyueBtn = $('.downlinks .yuyue')
        androidBtn.hide()
        iosBtn.hide()
        yuyueBtn.hide()
        if (links.length > 0) {
            var client = core.isAndroid ? 'android' : (core.isIos ? 'ios' : '');
            var appid = links.data('appid');
            var lock = false;
            var pdata = window.pdata || {};
            var dlink = pdata['dlink'] || 0;
            if (dlink == 1) {
                yuyueBtn.show().text('已下架');
            } else {
                if (!lock && appid && !isNaN(appid)) {
                    $.getJSON(baseUrl + '/downs/url?callback=?', {
                        "id": appid,
                        "type": client
                    }, function (r) {
                        if (r && r.status == 'success') {
                            var data = r.data || {};
                            var durl = data.url
                            var rurl = data.report
                        }
                        if (durl) {
                            if (client === 'ios') {
                                iosBtn.show().click(function () {
                                    downFn(durl, rurl);
                                });
                            } else if (client === 'android') {
                                androidBtn.show().click(function () {
                                    downFn(durl, rurl)
                                });
                            }
                        } else {
                            yuyueBtn.show().click(function () {
                                var reserve = core.get_env('reserve_app')
                                if (reserve) {
                                    core.toast('已预约')
                                } else {
                                    core.show_pop_panel('#reserve-app-pop')
                                }
                            });
                        }
                    });
                }
            }

        }
    }

    // 执行下载函数
    function downFn(durl, rurl, type) {
        if (rurl && !report) {
            var i = new Image();
            type ? i.src = rurl + '&type=' + type : i.src = rurl
            report = true
        }
        location.href = durl;
    }

    // 发送统计请求
    function sendCount(appid, classify, type) {
        var i = new Image();
        i.src = baseUrl + '/ajax/stat?id=' + appid + '&name=' + classify + '&type=' + type
    }

    download();

   
})