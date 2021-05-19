/** Project : DCT HTML 5 Template   Author : IgnitionBlr   version : TV 1.0 G - 15.0 */
function checkProtocal() {
        var e = document.getElementsByTagName("script");
        src = e[e.length - 1].src;
        for (var t = 0; t < e.length; t++) {
                if (String(e[t].src).indexOf("/TV/js/main_PCAStick_970x250.js") != -1) return src.split("://")[0] + ":";
                else if (String(e[t].src).indexOf("htmlmain/TV/minify/main_PCAStick_970x250.js") != -1) return src.split("://")[0] + ":"
        }
}

function addProtocal(e) {
        return ione_protocal + "//" + e.split("://")[1]
}

function ione_loadOnStart() {
        function e() {
                iONEinternal.ione_app_path = ione_protocal + "//" + iONEinternal.hostName + "/HTML5DCT";
                location.search != "" ? iONEorgelement.ione_debug = location.search.split("?rt=")[1] : iONEorgelement.ione_debug = "";
                iONEorgelement.cp = iONEinternal.ione_app_path + "/config/" + iONEinternal.aid + "/" + configId + ".js?" + (new Date).getTime() / 1e3;
                iONEinternal.aid = iONEinternal.aid;
                iONEorgelement.ione_evidon();
                iONEgeneral.ione_loadjs(iONEorgelement.cp);
                iONEgeneral.ione_CheckPlatform()
        }
        document.write("<div id='iONEevctrl' style='position:absolute;pointer-events:none;width:1px;height:1px;'></div>");
        var t = setInterval(function () {
                if (clickTag !== undefined) {
                        var n = String(unescape(unescape(unescape(clickTag))));
                        // iONEinternal.cid = n.split("CreativeId=")[1].split("&")[0];
                        // iONEinternal.aid = n.split("AdvertiserId=")[1].split("&")[0];
                        iONEinternal.aid = advertiser_ID;
                        iONEinternal.h = iONEorgelement.ione_config.ad_Height;
                        iONEinternal.w = iONEinternal.w = iONEorgelement.ione_config.ad_Width;
                        clearInterval(t)
                }
                e()
        }, 100)
}

function borderBlink(e, i) {
        var t = "";
        if ("y" == iONEorgelement.ione_config.showBorder) {
                t = "1" == iONEorgelement.ione_config.borderAroundImage ? "iONEThumbImage_" : "iONEImage_";
                for (var n = 0; n < iONEorgelement.ione_config.total_product; n++) document.getElementById(t + n).style.border = iONEorgelement.ione_config.imageBorder, document.getElementById("iONEImage_" + n).style.backgroundColor = "transparent";
                if ("over" == i && (document.getElementById(t + e).style.border = iONEorgelement.ione_config.imageBlinkBorder, "" != iONEorgelement.ione_config.boxBgColor && (document.getElementById("iONEImage_" + e).style.backgroundColor = iONEorgelement.ione_config.boxBgColor)), "out" == i || "click" == i) for (var n = 0; n < iONEorgelement.ione_config.total_product; n++) document.getElementById(t + n).style.border = iONEorgelement.ione_config.imageBorder, document.getElementById("iONEImage_" + n).style.backgroundColor = "transparent"
        }
}

function pageClickAction(e, t, n, r) {
        function i(e) {
                return String(unescape(unescape(unescape(clickTag)))).split(e)[1].split("&")[0]
        }
        EventBus.dispatch("PAGE_CLICK", null, iONEinternal.cur_page);
        //ione_clickTag.pixeFire(ione_protocal + "//a.netmng.com/click/?CreativeId=" + i("CreativeId=") + "&ImpressionId=" + i("ImpressionId=") + "&AdvertiserId=" + i("AdvertiserId=") + "&PublisherId=" + i("PublisherId=") + "&CategoryId=" + i("CategoryId=") + "&FeedId=" + iONEorgelement.ione_config.feedId + "&ProductID=" + t + "&RedirectUrl=");
        var s;
        if (n == "prdClick") {
                var s = unescape(unescape(unescape(clickTag)));
                //s = s.split("dctat=15").join("dctat=15&ProductID=" + t);
                s = unescape(unescape(unescape(s + iONEorgelement.ione_dataHolderArr[r].ClickThrough)));
        } else if (n == "logoClick") {
                var s = unescape(unescape(unescape(clickTag + iONEorgelement.ione_config.logoClick)));
                //s = s.split("dctat=15").join("dctat=15&ProductID=" + t)
        }
        if (s.indexOf("{scriptclickprefix}") != -1 && n == "prdClick") {
                s = unescape(unescape(unescape(iONEorgelement.ione_dataHolderArr[r].ClickThrough)));
        } else if (s.indexOf("{scriptclickprefix}") != -1 && n == "logoClick") {
                s = unescape(unescape(unescape(iONEorgelement.ione_config.logoClick)));
        }
        if (iONEorgelement.ione_config.trackerPlace == "0") window.open(decodeURIComponent(decodeURIComponent(decodeURIComponent(e + s))), "_blank");
        else if (iONEorgelement.ione_config.trackerPlace == "1") window.open(decodeURIComponent(decodeURIComponent(decodeURIComponent(s + e))), "_blank")
        EventBus.dispatch("PAGE_CLICK")
}

function showBlockBoard(e) {
        null == iONEcst.getElm(iONEcst.doc, "ioneTextContainer") && (iONEdyCreater.createDiv("ioneTextContainer", "100%", "100%", "iONEcontainer"), iONEcst.getElm(iONEcst.doc, "ioneTextContainer").onclick = function () {
                pageClickAction(iONEorgelement.ione_config.clickTracker, iONEorgelement.ione_dataHolderArr[iONEinternal.imgCnt].ProductId, "prdClick", iONEinternal.imgCnt)
        });
        var i = iONEcst.getElm(iONEcst.doc, "ioneTextContainer");
        i.innerHTML = iONEdyCreater.createTextField(e), iONEgeneral.truncate(iONEcst.getElm(iONEcst.doc, "iONEprd_" + e)), document.getElementById("iONEBigImage").style.visibility = "hidden", document.getElementById("ioneTextContainer").style.overflow = "hidden", document.getElementById("iONEBigImage").style.overflow = "hidden", i.style.left = iONEorgelement.ione_config.textContainer.split(" ")[0], i.style.top = iONEorgelement.ione_config.textContainer.split(" ")[1], i.style.width = iONEorgelement.ione_config.textContainer.split(" ")[2], i.style.height = iONEorgelement.ione_config.textContainer.split(" ")[3], borderBlink(e, "over"), EventBus.dispatch("BLACK_BOARD", null, iONEinternal.cur_page), iONEcst.getElm(iONEcst.doc, "iONEBigImage").onload = function (i) {
                document.getElementById("iONEBigImage").style.left = iONEorgelement.ione_config.bigimgX + "px", document.getElementById("iONEBigImage").style.top = iONEorgelement.ione_config.bigimgY + "px", document.getElementById("iONEBigImage").style.position = "absolute", document.getElementById("iONEBigImage").style.visibility = "hidden", Number(i.currentTarget.width) >= Number(i.currentTarget.height) ? (document.getElementById("iONEBigImage").style.width = iONEorgelement.ione_config.bigimgW + "px", document.getElementById("iONEBigImage").style.height = iONEorgelement.ione_config.bigimgW / (i.currentTarget.width / i.currentTarget.height) + "px", document.getElementById("iONEBigImage").style.marginTop = (parseInt(iONEorgelement.ione_config.bigimgH) - parseInt(i.currentTarget.style.height)) / 2 + "px", document.getElementById("iONEBigImage").style.visibility = "visible") : (document.getElementById("iONEBigImage").style.width = iONEorgelement.ione_config.bigimgH / (i.currentTarget.height / i.currentTarget.width) + "px", document.getElementById("iONEBigImage").style.height = iONEorgelement.ione_config.bigimgH + "px", document.getElementById("iONEBigImage").style.marginLeft = (parseInt(iONEorgelement.ione_config.bigimgW) - parseInt(i.currentTarget.style.width)) / 2 + "px", document.getElementById("iONEBigImage").style.visibility = "visible"), i.currentTarget.style.border = iONEorgelement.ione_config.bigimgBorder, borderBlink(e, "over")
        }, iONEcst.getElm(iONEcst.doc, "iONEBigImage").onerror = function (e) {
                document.getElementById("iONEBigImage").setAttribute("src", addProtocal(iONEorgelement.ione_config.noImgPath)), document.getElementById("iONEBigImage").style.width = iONEorgelement.ione_config.bigimgW + "px", document.getElementById("iONEBigImage").style.height = iONEorgelement.ione_config.bigimgW + "px", document.getElementById("iONEBigImage").style.marginTop = (parseInt(iONEorgelement.ione_config.bigimgH) - parseInt(e.target.style.height)) / 2 + "px", document.getElementById("iONEBigImage").style.visibility = "visible"
        }
}

function createRumTimeAnimCSS3() {
        if (zoom_IN_keyframes = "@" + iONEuniqueCall.browserType() + "keyframes zoom_in { from {" + iONEuniqueCall.browserType() + "transform: scale(0); }to {" + iONEuniqueCall.browserType() + "transform: scale(1); }}", zoom_OUT_keyframes = "@" + iONEuniqueCall.browserType() + "keyframes zoom_out { from {" + iONEuniqueCall.browserType() + "transform: scale(1); }to {" + iONEuniqueCall.browserType() + "transform: scale(0); }}", "Horizontal" == iONEorgelement.ione_config.tweenType ? (startPt = iONEorgelement.ione_config.ad_Width, forward_keyframes = "@" + iONEuniqueCall.browserType() + "keyframes front_fowardcall { from {left:" + startPt + "px; }to {left:0px; }}", backward_keyframes = "@" + iONEuniqueCall.browserType() + "keyframes front_backwardcall { from {left:0px; }to {left:" + Number(-iONEorgelement.ione_config.ad_Width) + "px; }}", forward_keyframes1 = "@" + iONEuniqueCall.browserType() + "keyframes back_fowardcall { from {left:" + Number(-iONEorgelement.ione_config.ad_Width) + "px; }to {left:0px; }}", backward_keyframes1 = "@" + iONEuniqueCall.browserType() + "keyframes back_backwardcall { from {left:0px; }to {left:" + iONEorgelement.ione_config.ad_Width + "px; }}") : "Vertical" == iONEorgelement.ione_config.tweenType && (startPt = iONEorgelement.ione_config.ad_Height, forward_keyframes = "@" + iONEuniqueCall.browserType() + "keyframes front_fowardcall { from {left:0px;top:" + -startPt + "px; }to {left:0px;top:0px; }}", backward_keyframes = "@" + iONEuniqueCall.browserType() + "keyframes front_backwardcall { from {left:0px;top:0px; }to {left:0px;top:" + startPt + "px; }}", forward_keyframes1 = "@" + iONEuniqueCall.browserType() + "keyframes back_fowardcall { from {left:0px;top:" + startPt + "px; }to {left:0px;top:0px; }}", backward_keyframes1 = "@" + iONEuniqueCall.browserType() + "keyframes back_backwardcall { from {left:0px;top:0px; }to {left:0px;top:" + -startPt + "px; }}"), iONEcst.doc.styleSheets && iONEcst.doc.styleSheets.length) iONEcst.doc.styleSheets[0].insertRule(forward_keyframes, 0), iONEcst.doc.styleSheets[0].insertRule(backward_keyframes, 0), iONEcst.doc.styleSheets[0].insertRule(forward_keyframes1, 0), iONEcst.doc.styleSheets[0].insertRule(backward_keyframes1, 0), iONEcst.doc.styleSheets[0].insertRule(zoom_IN_keyframes, 0), iONEcst.doc.styleSheets[0].insertRule(zoom_OUT_keyframes, 0);
        else {
                var e = iONEcst.doc.createElement("style");
                e.innerHTML = forward_keyframes + backward_keyframes + forward_keyframes1 + backward_keyframes1 + zoom_IN_keyframes + zoom_OUT_keyframes, iONEcst.doc.getElementsByTagName("head")[0].appendChild(e)
        }
}

function forwardAnim(e, i) {
        iONEanimCtrl.anim_inprocess = !0, iONEinternal.cur_page == iONEinternal.total_rounds && (iONEinternal.cur_page = 0), 0 == iONEinternal.cur_page ? iONEanimCtrl.previous = iONEinternal.total_rounds - 1 : iONEanimCtrl.previous = iONEinternal.cur_page - 1;
        var t = iONEcst.getElm(iONEcst.doc, "iONEanim_" + iONEinternal.cur_page),
                n = iONEcst.getElm(iONEcst.doc, "iONEanim_" + iONEanimCtrl.previous);
        n.style[iONEuniqueCall.browserType() + "animation"] = "front_backwardcall 1s", n.removeEventListener(iONEgeneral.preFixEvent(iONEuniqueCall.browserType()), forwardBackAnimEndHandler, !1), n.addEventListener(iONEgeneral.preFixEvent(iONEuniqueCall.browserType()), forwardBackAnimEndHandler, !1), t.style.left = e + "px", t.style[iONEuniqueCall.browserType() + "animation"] = "front_fowardcall 1s", t.removeEventListener(iONEgeneral.preFixEvent(iONEuniqueCall.browserType()), rightArrowAnimEndHandler, !1), t.addEventListener(iONEgeneral.preFixEvent(iONEuniqueCall.browserType()), rightArrowAnimEndHandler, !1), EventBus.dispatch("FORWARD_ANIM_START", null, iONEinternal.cur_page)
}

function forwardBackAnimEndHandler(e) {
        e.target.removeEventListener(iONEgeneral.preFixEvent(iONEuniqueCall.browserType()), forwardBackAnimEndHandler, !1), e.target.style.left = Number(-iONEorgelement.ione_config.ad_Width) + "px", EventBus.dispatch("FORWARD_BACK_ANIM_END", null, iONEinternal.cur_page)
}

function rightArrowAnimEndHandler(e) {
        zoomOutAnimation(), EventBus.dispatch("FORWARD_ANIM_END", null, iONEinternal.cur_page)
}

function zoomOutAnimation() {
        showBlockBoard(iONEinternal.imgCnt), iONEcst.getElm(iONEcst.doc, "iONEanim_" + iONEinternal.cur_page).style.left = "0px", iONEcst.getElm(iONEcst.doc, "iONEanim_" + iONEinternal.cur_page).removeEventListener(iONEgeneral.preFixEvent(iONEuniqueCall.browserType()), rightArrowAnimEndHandler, !1), iONEcst.getElm(iONEcst.doc, "ioneTextContainer").style[iONEuniqueCall.browserType() + "animation"] = "zoom_in 0.5s", iONEcst.getElm(iONEcst.doc, "ioneTextContainer").removeEventListener(iONEgeneral.preFixEvent(iONEuniqueCall.browserType()), zoomOutHandler, !1), iONEcst.getElm(iONEcst.doc, "ioneTextContainer").addEventListener(iONEgeneral.preFixEvent(iONEuniqueCall.browserType()), zoomOutHandler, !1)
}

function zoomOutHandler(e) {
        e.target.removeEventListener(iONEgeneral.preFixEvent(iONEuniqueCall.browserType()), zoomOutHandler, !1), iONEcst.getElm(iONEcst.doc, "ioneTextContainer").style[iONEuniqueCall.browserType() + "transform"] = "scale(1)", iONEanimCtrl.anim_inprocess = !1, iONEorgelement.ione_ReplayEnabled || zoomINAnim()
}

function zoomINAnim() {
        "" != zoomINTimer && clearInterval(zoomINTimer), zoomINTimer = setInterval(function () {
                iONEanimCtrl.anim_inprocess = !0, iONEinternal.initAnim = !1, (Number(iONEinternal.imgCnt) + Number(1)) % Number(iONEorgelement.ione_config.imgShowInRow) != 0 || iONEinternal.initAnim ? (iONEcst.getElm(iONEcst.doc, "ioneTextContainer").removeEventListener(iONEgeneral.preFixEvent(iONEuniqueCall.browserType()), zoomInEndHandler, !1), iONEcst.getElm(iONEcst.doc, "ioneTextContainer").addEventListener(iONEgeneral.preFixEvent(iONEuniqueCall.browserType()), zoomInEndHandler, !1), iONEcst.getElm(iONEcst.doc, "ioneTextContainer").style[iONEuniqueCall.browserType() + "animation"] = "zoom_out 0.5s") : clearInterval(zoomINTimer)
        }, 3e3)
}

function replayZoomInAnim() {
        iONEanimCtrl.anim_inprocess = !0, iONEinternal.initAnim = !1, (Number(iONEinternal.imgCnt) + Number(1)) % Number(iONEorgelement.ione_config.imgShowInRow) != 0 || iONEinternal.initAnim ? (iONEcst.getElm(iONEcst.doc, "ioneTextContainer").removeEventListener(iONEgeneral.preFixEvent(iONEuniqueCall.browserType()), zoomInEndHandler, !1), iONEcst.getElm(iONEcst.doc, "ioneTextContainer").addEventListener(iONEgeneral.preFixEvent(iONEuniqueCall.browserType()), zoomInEndHandler, !1), iONEcst.getElm(iONEcst.doc, "ioneTextContainer").style[iONEuniqueCall.browserType() + "animation"] = "zoom_out 0.5s") : (iONEinternal.cur_page++, iONEcst.getElm(iONEcst.doc, "ioneTextContainer").style[iONEuniqueCall.browserType() + "animation"] = "zoom_out 0.5s", iONEcst.getElm(iONEcst.doc, "ioneTextContainer").addEventListener(iONEgeneral.preFixEvent(iONEuniqueCall.browserType()), showNextRowAnim, !1))
}

function zoomInEndHandler(e) {
        iONEcst.getElm(iONEcst.doc, "ioneTextContainer").removeEventListener(iONEgeneral.preFixEvent(iONEuniqueCall.browserType()), zoomInEndHandler, !1), iONEcst.getElm(iONEcst.doc, "ioneTextContainer").style[iONEuniqueCall.browserType() + "transform"] = "scale(0)", iONEinternal.imgCnt++, zoomOutAnimation()
}

function showNextRowAnim(e) {
        iONEcst.getElm(iONEcst.doc, "ioneTextContainer").style[iONEuniqueCall.browserType() + "transform"] = "scale(0)", iONEcst.getElm(iONEcst.doc, "ioneTextContainer").removeEventListener(iONEgeneral.preFixEvent(iONEuniqueCall.browserType()), showNextRowAnim, !1), "right" == iONEinternal.click ? (iONEinternal.imgCnt++, iONEinternal.imgCnt >= iONEorgelement.ione_config.total_product && (iONEinternal.imgCnt = 0), forwardAnim(iONEorgelement.ione_config.ad_Width, 0)) : "left" == iONEinternal.click && (iONEinternal.imgCnt = 0, backwardAnim(Number(-iONEorgelement.ione_config.ad_Width), 0), iONEinternal.click = "right")
}

function rightArrowClickAction() {
        0 == iONEanimCtrl.anim_inprocess && (iONEinternal.click = "right", iONEinternal.initAnim = !1, iONEanimCtrl.anim_inprocess = !0, clearInterval(zoomINTimer), iONEinternal.imgCnt = iONEinternal.cur_page * iONEorgelement.ione_config.imgShowInRow + (iONEorgelement.ione_config.imgShowInRow - 1), iONEinternal.cur_page++, iONEcst.getElm(iONEcst.doc, "ioneTextContainer").style[iONEuniqueCall.browserType() + "animation"] = "zoom_out 0.5s", iONEcst.getElm(iONEcst.doc, "ioneTextContainer").addEventListener(iONEgeneral.preFixEvent(iONEuniqueCall.browserType()), showNextRowAnim, !1))
}

function leftArrowClickAction() {
        0 == iONEanimCtrl.anim_inprocess && (iONEinternal.click = "left", iONEinternal.initAnim = !1, iONEanimCtrl.anim_inprocess = !0, clearInterval(zoomINTimer), iONEinternal.imgCnt = iONEinternal.cur_page * iONEorgelement.ione_config.imgShowInRow + (iONEorgelement.ione_config.imgShowInRow - 1), iONEcst.getElm(iONEcst.doc, "ioneTextContainer").style[iONEuniqueCall.browserType() + "animation"] = "zoom_out 0.5s", iONEcst.getElm(iONEcst.doc, "ioneTextContainer").addEventListener(iONEgeneral.preFixEvent(iONEuniqueCall.browserType()), showNextRowAnim, !1))
}

function imageOver(e) {
        0 == iONEanimCtrl.anim_inprocess && (stopAllAnimation(), iONEinternal.imgCnt = String(e.target.id).split("_")[1], borderBlink(iONEinternal.imgCnt, "over"), showBlockBoard(iONEinternal.imgCnt))
}

function imageOut(e) {
        0 == iONEanimCtrl.anim_inprocess && (iONEinternal.imgCnt = String(e.currentTarget.id).split("_")[1], iONEinternal.click = "right", "visible" != iONEcst.getElm(iONEcst.doc, "iONEreplay1").style.visibility && zoomINAnim())
}

function stopAllAnimation() {
        iONEanimCtrl.anim_inprocess = !1, iONEinternal.initAnim = !1, "" != zoomINTimer && clearInterval(zoomINTimer)
}

function backwardAnim(e, i) {
        iONEanimCtrl.previous = iONEinternal.cur_page, 0 == iONEinternal.cur_page ? iONEinternal.cur_page = iONEinternal.total_rounds - 1 : iONEinternal.cur_page = iONEinternal.cur_page - 1, iONEcst.getElm(iONEcst.doc, "iONEanim_" + iONEanimCtrl.previous).style[iONEuniqueCall.browserType() + "animation"] = "back_backwardcall 1s", iONEcst.getElm(iONEcst.doc, "iONEanim_" + iONEinternal.cur_page).style[iONEuniqueCall.browserType() + "animation"] = "back_fowardcall 1s", iONEcst.getElm(iONEcst.doc, "iONEanim_" + iONEanimCtrl.previous).addEventListener(iONEgeneral.preFixEvent(iONEuniqueCall.browserType()), previousBackAnimEnd, !1), iONEcst.getElm(iONEcst.doc, "iONEanim_" + iONEinternal.cur_page).addEventListener(iONEgeneral.preFixEvent(iONEuniqueCall.browserType()), backwardAnimEndHandler, !1), EventBus.dispatch("BACKWARD_ANIM_START", null, iONEinternal.cur_page)
}

function backwardAnimEndHandler(e) {
        e.target.removeEventListener(iONEgeneral.preFixEvent(iONEuniqueCall.browserType()), backwardAnimEndHandler, !1), e.target.style.left = "0px", iONEinternal.imgCnt = iONEinternal.cur_page * iONEorgelement.ione_config.imgShowInRow, zoomOutAnimation(), EventBus.dispatch("BACKWARD_ANIM_END", null, iONEinternal.cur_page)
}

function previousBackAnimEnd(e) {
        e.target.removeEventListener(iONEgeneral.preFixEvent(iONEuniqueCall.browserType()), previousBackAnimEnd, !1), e.target.style.left = -iONEorgelement.ione_config.ad_Width + "px"
}

var ione_protocal = checkProtocal();
zoomINTimer = "";
var iONEinternal = {
        path: "https://dct.rezync.com/Results.aspx?DATA_PSC/",
        hostName: "a.netmng.com",
        googleEnabled: false,
        ione_app_path: "",
        cur_page: 0,
        defaultCall: false,
        max_fields: 5,
        ione_TemplateName: "TV",
        ione_platform: "",
        total_rounds: 0,
        cur_rounds: 0,
        aid: "",
        imgCnt: 0,
        animStarted: false,
        adSize: "",
        initAnim: true,
        btnClick: false,
        leftAnimEnd: true,
        rightAnimEnd: true,
        startMouseover: false,
        click: "right"
};

function getHostName(a) {
        var regex = /^[\w-]*(\.netmng\.com|\.netmining\.com|\.zetaglobal\.net|localhost)$/g;
        return regex.test(a) ? a : "a.netmng.com";
}
iONEinternal.hostName = getHostName(window.location.hostname);

var iONEcst = {
        doc: document,
        getTag: function (e, t) {
                return e.getElementsByTagName(t)
        },
        getElm: function (e, t) {
                return e.getElementById(t)
        },
        n: navigator
};
var EventBusClass = {};
EventBusClass = function () {
        this.listeners = {}
};
EventBusClass.prototype = {
        addEventListener: function (e, t, n) {
                var r = [];
                var i = arguments.length;
                for (var s = 0; s < i; s++) {
                        r.push(arguments[s])
                }
                r = r.length > 3 ? r.splice(3, r.length - 1) : [];
                if (typeof this.listeners[e] != "undefined") {
                        this.listeners[e].push({
                                scope: n,
                                callback: t,
                                args: r
                        })
                } else {
                        this.listeners[e] = [{
                                scope: n,
                                callback: t,
                                args: r
                        }]
                }
        },
        removeEventListener: function (e, t, n) {
                if (typeof this.listeners[e] != "undefined") {
                        var r = this.listeners[e].length;
                        var i = [];
                        for (var s = 0; s < r; s++) {
                                var o = this.listeners[e][s];
                                if (o.scope == n && o.callback == t) { } else {
                                        i.push(o)
                                }
                        }
                        this.listeners[e] = i
                }
        },
        hasEventListener: function (e, t, n) {
                if (typeof this.listeners[e] != "undefined") {
                        var r = this.listeners[e].length;
                        if (t === undefined && n === undefined) {
                                return r > 0
                        }
                        for (var i = 0; i < r; i++) {
                                var s = this.listeners[e][i];
                                if ((n ? s.scope == n : true) && s.callback == t) {
                                        return true
                                }
                        }
                }
                return false
        },
        dispatch: function (e, t) {
                var n = 0;
                var r = {
                        type: e,
                        target: t
                };
                var i = [];
                var s = arguments.length;
                for (var o = 0; o < s; o++) {
                        i.push(arguments[o])
                }
                i = i.length > 2 ? i.splice(2, i.length - 1) : [];
                i = [r].concat(i);
                if (typeof this.listeners[e] != "undefined") {
                        var u = this.listeners[e].length;
                        for (var o = 0; o < u; o++) {
                                var a = this.listeners[e][o];
                                if (a && a.callback) {
                                        var f = i.concat(a.args);
                                        a.callback.apply(a.scope, f);
                                        n += 1
                                }
                        }
                }
        },
        getEvents: function () {
                var e = "";
                for (var t in this.listeners) {
                        var n = this.listeners[t].length;
                        for (var r = 0; r < n; r++) {
                                var i = this.listeners[t][r];
                                e += i.scope && i.scope.className ? i.scope.className : "anonymous";
                                e += " listen for '" + t + "'\n"
                        }
                }
                return e
        }
};
var EventBus = new EventBusClass;
var iONEgeneral = {
        getPassedParameters: function () {
                var e = iONEcst.getTag(iONEcst.doc, "script");
                for (var t = 0; t < e.length; t++) {
                        if (String(e[t].src).indexOf(iONEinternal.hostName) != -1) {
                                if (e[t].src.replace(/^[^\?]+\??/, "") != "") return e[t].src.replace(/^[^\?]+\??/, "")
                        }
                }
        },
        ione_loadjs: function (e) {
                var t = iONEcst.doc.createElement("script");
                t.setAttribute("type", "text/javascript");
                t.setAttribute("src", e);
                t.onerror = function () {
                        if (t.onerror) clearInterval(iONEorgelement.cp)
                };
                iONEcst.getTag(iONEcst.doc, "head")[0].appendChild(t)
        },
        formatCurrency: function (e) {
                var t = e.toString();
                var n = "";
                if (iONEorgelement.ione_config.feedDecimal == "0") t = String(t).substr(0, t.lastIndexOf("."));
                if (iONEorgelement.ione_config.feedDelim == "1") {
                        t = t.replace(/[,]/gi, "");
                        t = parseFloat(t).toFixed(iONEorgelement.ione_config.decimalLen)
                }
                if (iONEorgelement.ione_config.currentFormat == "Japan" || iONEorgelement.ione_config.currentFormat == "US") {
                        if (iONEorgelement.ione_config.addDelim == "1") {
                                while (t.length > 3) {
                                        var r = t.substr(-3);
                                        t = t.substr(0, t.length - 3);
                                        n = "," + r + n
                                }
                                if (t.length > 0) {
                                        n = t + n
                                }
                        } else {
                                n = t
                        }
                }
                if (iONEorgelement.ione_config.currencyPlace == "1") return String(iONEorgelement.ione_config.extraCharPrice_Be) + String(iONEorgelement.ione_config.currency).trim() + iONEorgelement.ione_config.priceGap + String(n).trim() + String(iONEorgelement.ione_config.extraCharPrice_Af);
                else if (iONEorgelement.ione_config.currencyPlace == "2") return String(n).trim() + iONEorgelement.ione_config.priceGap + String(iONEorgelement.ione_config.currency).trim();
                else return n
        },
        OS: function () {
                var e = "Unknown OS";
                if (iONEcst.n.appVersion.indexOf("Win") != -1) e = "Windows";
                if (iONEcst.n.appVersion.indexOf("Mac") != -1) e = "MacOS";
                if (iONEcst.n.appVersion.indexOf("X11") != -1) e = "UNIX";
                if (iONEcst.n.appVersion.indexOf("Linux") != -1) e = "Linux";
                return e
        },
        browserVersion: function () {
                var e = iONEcst.n.appName,
                        t = iONEcst.n.userAgent,
                        n;
                var r = t.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
                if (r && (n = t.match(/version\/([\.\d]+)/i)) != null) r[2] = n[1];
                r = r ? [r[1], r[2]] : [e, iONEcst.n.appVersion, "-?"];
                return parseFloat(r[1])
        },
        browser: function () {
                var e = iONEcst.n.appName,
                        t = iONEcst.n.userAgent,
                        n;
                var r = t.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
                if (r && (n = t.match(/version\/([\.\d]+)/i)) != null) r[2] = n[1];
                r = r ? [r[1], r[2]] : [e, iONEcst.n.appVersion, "-?"];
                return r[0]
        },
        textToXML: function (e) {
                try {
                        var t = null;
                        if (window.DOMParser) {
                                var n = new DOMParser;
                                t = n.parseFromString(e, "text/xml");
                                var r = t.getElementsByTagName("parsererror");
                                if (!r || !r.length || !r[0].childNodes.length) {
                                        return t
                                }
                                return null
                        } else {
                                t = new ActiveXObject("Microsoft.XMLDOM");
                                t.async = false;
                                t.loadXML(e);
                                return t
                        }
                } catch (i) { }
        },
        isCanvasSupported: function () {
                var e = iONEcst.doc.createElement("canvas");
                return !!(e.getContext && e.getContext("2d"))
        },
        isCSS3Supported: function (e) {
                var t = false,
                        n = "animation",
                        r = "",
                        i = "Webkit Moz O ms Khtml".split(" "),
                        s = "";
                if (e.style.animationName) {
                        t = true
                }
                if (t === false) {
                        for (var o = 0; o < i.length; o++) {
                                if (e.style[i[o] + "AnimationName"] !== undefined) {
                                        s = i[o];
                                        n = s + "Animation";
                                        r = "-" + s.toLowerCase() + "-";
                                        t = true;
                                        break
                                }
                        }
                }
                return t
        },
        preFixEvent: function (e) {
                switch (e) {
                        case "-webkit-":
                                return "webkitAnimationEnd";
                                break;
                        case "-o-":
                                return "oanimationend";
                                break;
                        case "-ms-":
                                return "MSAnimationEnd";
                                break;
                        default:
                                return "animationend";
                                break
                }
        },
        ione_CheckPlatform: function () {
                if (iONEcst.n.userAgent.toLowerCase().indexOf("iphone") != -1) iONEinternal.ione_platform = "mobile";
                else if (iONEcst.n.userAgent.toLowerCase().indexOf("android") != -1) iONEinternal.ione_platform = "mobile";
                else iONEinternal.ione_platform = "pc"
        },
        truncate: function (e) {
                if (String(String(e.id).split("_")[0]).indexOf("iONEprd") != -1) {
                        if (String(e.innerHTML).length > iONEorgelement.ione_config.prdMaxChars) e.innerHTML = String(e.innerHTML).substr(0, iONEorgelement.ione_config.prdMaxChars) + "..."
                } else if (String(String(e.id).split("_")[0]).indexOf("iONEdesc") != -1) {
                        if (String(e.innerHTML).length > iONEorgelement.ione_config.descriMaxChars) e.innerHTML = String(e.innerHTML).substr(0, iONEorgelement.ione_config.descriMaxChars) + "..."
                }
                return
        }
};
var iONEorgelement = {
        ione_config: "",
        ione_debug: "",
        ione_evidon: function () {
                document.getElementById("iONEevctrl").style.width = parseInt(iONEinternal.w) + "px";
                document.getElementById("iONEevctrl").style.height = parseInt(iONEinternal.h) + "px"
        },
        ione_dataHolderArr: [],
        ione_GTimer: "",
        ione_ReTimer: "",
        ione_ReplayEnabled: false
};
var fontList = {
        loadFont: function (e, t, n) {
                var r = document.createElement("style");
                r.appendChild(document.createTextNode("@font-face {    font-family: '" + e + "';    src: url('" + t + "');	font-weight: '" + n + "';}"));
                document.head.appendChild(r)
        }
};
ione_loadOnStart();
var iOneDCT = {
        run: function () {
                iONEorgelement.ione_config_interval = setInterval(function () {
                        "undefined" != typeof Ione_ThumbView && (iONEorgelement.ione_config = Ione_ThumbView, clearInterval(iONEorgelement.ione_config_interval), iONEloadProcessStart.ioneLoadData())
                }, 10)
        }
},
        iONEanimCtrl = {
                animTimer: null,
                previous: 3,
                anim_inprocess: !1,
                animClickMode: "front",
                forwardClick: !0,
                backwardClick: !1,
                mouseOver: !1,
                safariOut: !1
        },
        Base64 = {
                _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                encode: function (e) {
                        var i, t, n, o, r, l, a, c = "",
                                g = 0;
                        for (e = Base64._utf8_encode(e); g < e.length;) i = e.charCodeAt(g++), t = e.charCodeAt(g++), n = e.charCodeAt(g++), o = i >> 2, r = (3 & i) << 4 | t >> 4, l = (15 & t) << 2 | n >> 6, a = 63 & n, isNaN(t) ? l = a = 64 : isNaN(n) && (a = 64), c = c + this._keyStr.charAt(o) + this._keyStr.charAt(r) + this._keyStr.charAt(l) + this._keyStr.charAt(a);
                        return c
                },
                decode: function (e) {
                        var i, t, n, o, r, l, a, c = "",
                                g = 0;
                        for (e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); g < e.length;) o = this._keyStr.indexOf(e.charAt(g++)), r = this._keyStr.indexOf(e.charAt(g++)), l = this._keyStr.indexOf(e.charAt(g++)), a = this._keyStr.indexOf(e.charAt(g++)), i = o << 2 | r >> 4, t = (15 & r) << 4 | l >> 2, n = (3 & l) << 6 | a, c += String.fromCharCode(i), 64 != l && (c += String.fromCharCode(t)), 64 != a && (c += String.fromCharCode(n));
                        return c = Base64._utf8_decode(c)
                },
                _utf8_encode: function (e) {
                        e = e.replace(/\r\n/g, "\n");
                        for (var i = "", t = 0; t < e.length; t++) {
                                var n = e.charCodeAt(t);
                                128 > n ? i += String.fromCharCode(n) : n > 127 && 2048 > n ? (i += String.fromCharCode(n >> 6 | 192), i += String.fromCharCode(63 & n | 128)) : (i += String.fromCharCode(n >> 12 | 224), i += String.fromCharCode(n >> 6 & 63 | 128), i += String.fromCharCode(63 & n | 128))
                        }
                        return i
                },
                _utf8_decode: function (e) {
                        for (var i = "", t = 0, n = c1 = c2 = 0; t < e.length;) n = e.charCodeAt(t), 128 > n ? (i += String.fromCharCode(n), t++) : n > 191 && 224 > n ? (c2 = e.charCodeAt(t + 1), i += String.fromCharCode((31 & n) << 6 | 63 & c2), t += 2) : (c2 = e.charCodeAt(t + 1), c3 = e.charCodeAt(t + 2), i += String.fromCharCode((15 & n) << 12 | (63 & c2) << 6 | 63 & c3), t += 3);
                        return i
                }
        },
        iONEstorage = {
                passData: function (e) {
                        var zmp_click;
                        var zmp_view;
                        if (2 == iONEorgelement.ione_config.datatype) {
                                iONEorgelement.ione_config.total_product = e.Products.ProductsCount, Number(iONEorgelement.ione_config.total_product) % Number(iONEinternal.imgShowInRow) == 0 && (iONEinternal.total_rounds = Number(iONEorgelement.ione_config.total_product) / Number(iONEinternal.imgShowInRow));
                                for (var i = 0; i < e.Products.Product.length; i++) {
                                        if (iONEinternal.defaultCall == true) {
                                                zmp_click = e.Products.Product[i].ClickThrough;
                                                zmp_view = '';
                                        } else {
                                                zmp_click = e.Products.Product[i].ZmpClickUrl;
                                                zmp_view = e.Products.Product[i].ZmpViewPixel;
                                        }
                                        iONEorgelement.ione_dataHolderArr[i] = {
                                                ProductId: e.Products.Product[i].ProductId,
                                                ImageURL: addProtocal(e.Products.Product[i].ImageURL),
                                                ProductName: e.Products.Product[i].ProductName,
                                                Description: e.Products.Product[i].Description,
                                                Price: e.Products.Product[i].Price,
                                                ClickThrough: zmp_click,
                                                ZmpViewPixel: zmp_view,
                                                field1: e.Products.Product[i].Field1,
                                                field2: e.Products.Product[i].Field2,
                                                field3: e.Products.Product[i].Field3,
                                                field4: e.Products.Product[i].Field4,
                                                field5: e.Products.Product[i].Field5,
                                                field6: e.Products.Product[i].Field6,
                                                field7: e.Products.Product[i].Field7,
                                                field8: e.Products.Product[i].Field8,
                                                field9: e.Products.Product[i].Field9,
                                                field10: e.Products.Product[i].Field10
                                        };
                                }
                                for (var i = 0; i < e.Products.Product.length; i++) iONEuniqueCall.findReplaceControls(i, "imgURL", "ImageURL"), iONEuniqueCall.findReplaceControls(i, "deepLink", "ClickThrough")
                        } else if (1 == iONEorgelement.ione_config.datatype) {
                                iONEinternal.defaultCall || (e = iONEgeneral.textToXML(e));
                                for (var i = 0; i < iONEorgelement.ione_config.total_product; i++) {
                                        var t = e.getElementsByTagName("Product")[i];
                                        iONEorgelement.ione_dataHolderArr[i] = {
                                                ProductId: iONEcst.getTag(t, "id"),
                                                ImageURL: iONEcst.getTag(t, "ImageURL"),
                                                ProductName: iONEcst.getTag(t, "ProductName"),
                                                Description: iONEcst.getTag(t, "Description"),
                                                Price: iONEcst.getTag(t, "Price"),
                                                ClickThrough: iONEcst.getTag(t, "ClickThrough"),
                                                field1: iONEcst.getTag(t, "Field1"),
                                                field2: iONEcst.getTag(t, "Field2"),
                                                field3: iONEcst.getTag(t, "Field3"),
                                                field4: iONEcst.getTag(t, "Field4"),
                                                field5: iONEcst.getTag(t, "Field5"),
                                                field6: iONEcst.getTag(t, "Field6"),
                                                field7: iONEcst.getTag(t, "Field7"),
                                                field8: iONEcst.getTag(t, "Field8"),
                                                field9: iONEcst.getTag(t, "Field9"),
                                                field10: iONEcst.getTag(t, "Field10")
                                        }
                                }
                        }
                }
        },
        iONEuniqueCall = {
                findReplaceControls: function (e, i, t) {
                        "deepLink" == i && (iONEorgelement.ione_dataHolderArr[e][t] = unescape(iONEorgelement.ione_dataHolderArr[e][t])), "" != iONEorgelement.ione_config[i + "Find"] && (iONEorgelement.ione_dataHolderArr[e][t] = String(iONEorgelement.ione_dataHolderArr[e][t]).replace(iONEorgelement.ione_config[i + "Find"], iONEorgelement.ione_config[i + "Replace"])), "" != iONEorgelement.ione_config[i + "ReplaceFind"] && ("0" == iONEorgelement.ione_config[i + "ReplaceArea"] && (iONEorgelement.ione_dataHolderArr[e][t] = String(iONEorgelement.ione_dataHolderArr[e][t]).split(iONEorgelement.ione_config[i + "ReplaceFind"])[0] + iONEorgelement.ione_config[i + "ReplaceAdd"] + iONEorgelement.ione_config[i + "ReplaceFind"] + String(iONEorgelement.ione_dataHolderArr[e][t]).split(iONEorgelement.ione_config[i + "ReplaceFind"])[1]), "1" == iONEorgelement.ione_config[i + "ReplaceArea"] && (iONEorgelement.ione_dataHolderArr[e][t] = String(iONEorgelement.ione_dataHolderArr[e][t]).split(iONEorgelement.ione_config[i + "ReplaceFind"])[0] + iONEorgelement.ione_config[i + "ReplaceFind"] + iONEorgelement.ione_config[i + "ReplaceAdd"] + String(iONEorgelement.ione_dataHolderArr[e][t]).split(iONEorgelement.ione_config[i + "ReplaceFind"])[1])), "" != iONEorgelement.ione_config[i + "AddEnd"] && (iONEorgelement.ione_dataHolderArr[e][t] = String(iONEorgelement.ione_dataHolderArr[e][t]) + iONEorgelement.ione_config[i + "AddEnd"]), "deepLink" == i && (iONEorgelement.ione_dataHolderArr[e][t] = escape(iONEorgelement.ione_dataHolderArr[e][t]))
                },
                checkTextAlignProp: function () {
                        "" == iONEorgelement.ione_config.prdNameAlign ? iONEorgelement.ione_config.prdNameAlign = "left" : "", "" == iONEorgelement.ione_config.priceAlign ? iONEorgelement.ione_config.priceAlign = "left" : "", "" == iONEorgelement.ione_config.descriAlign ? iONEorgelement.ione_config.descriAlign = "left" : "";
                        for (var e = 1; e <= iONEinternal.max_fields; e++)"" == iONEorgelement.ione_config["f" + Number(e) + "Align"] ? iONEorgelement.ione_config["f" + Number(e) + "Align"] = "left" : ""
                },
                browserType: function () {
                        var e;
                        e = "MacOS" == iONEgeneral.OS() ? "Webkit Moz O ms Khtml".split(" ") : "Webkit O ms Khtml".split(" ");
                        for (var i = iONEcst.getElm(iONEcst.doc, "iONEcontainer"), t = "animation", n = "", o = "", r = 0; r < e.length; r++)
                                if (void 0 !== i.style[e[r] + "AnimationName"]) {
                                        o = e[r], t = o + "Animation", n = "-" + o.toLowerCase() + "-";
                                        break
                                }
                        return "MacOS" == iONEgeneral.OS() && "Firefox" == iONEgeneral.browser() ? n = "" : "" == n && "MacOS" == iONEgeneral.OS() && "Opera" == iONEgeneral.browser() ? n = "" : "" == n && "MacOS" == iONEgeneral.OS() ? n = "-webkit-" : n
                }
        },
        iONEdyCreater = {
                createBodyDiv: function (e, i) {
                        var t = iONEcst.doc.createElement("div");
                        t.id = e, t.className = i, iONEcst.doc.getElementsByTagName("body")[0].appendChild(t)
                },
                createDiv: function (e, i, t, n) {
                        var o = iONEcst.doc.createElement("div");
                        o.id = e, o.width = i, o.height = t, o.style.position = "absolute", iONEcst.getElm(iONEcst.doc, n).appendChild(o)
                },
                createCanvas: function (e, i, t, n, o) {
                        var r = iONEcst.doc.createElement("canvas");
                        r.id = e, r.width = i, r.height = t, r.style.position = "absolute", iONEcst.getElm(iONEcst.doc, o).appendChild(r)
                },
                createTextField: function (e) {
                        var i = "";
                        return i = iONEcreateTextData.proudctData(e) + iONEcreateTextData.priceData(e) + iONEcreateTextData.descriptionData(e) + iONEcreateTextData.ione_FieldsData(e) + iONEcreateTextData.shopButton(e) + iONEcreateTextData.bigImageData(e)
                },
                createHoverField: function (e) {
                        var i = "";
                        return i = iONEcreateTextData.priceData(e) + iONEcreateTextData.shopButton(e)
                }
        },
        iONEcreateTextData = {
                proudctData: function (e) {
                        var i, t;
                        return i = iONEorgelement.ione_config.prdNameX, t = iONEorgelement.ione_config.prdNameY, "1" == iONEorgelement.ione_config.prdNameShow ? "<div id='iONEprd1_" + e + "' style='pointer-events:none;position:absolute;left:" + i + "px;top:" + t + "px;width:" + iONEorgelement.ione_config.prdNameW + "px;text-align:" + iONEorgelement.ione_config.prdNameAlign + ";height:" + iONEorgelement.ione_config.prdNameH + "px;overflow:hidden;font-size:" + iONEorgelement.ione_config.prdNamefSize + "px;color:" + iONEorgelement.ione_config.prdNamefColor + ";font-weight:" + iONEorgelement.ione_config.prdNamefBold + ";font-family:" + iONEorgelement.ione_config.prdNamefName + "'><label id='iONEprd_" + e + "'>" + iONEorgelement.ione_dataHolderArr[e].ProductName + "</label></div>" : ""
                },
                priceData: function (e) {
                        // console.log(iONEorgelement.ione_dataHolderArr[e].Price)
                        var i, t;
                        return i = iONEorgelement.ione_config.priceX, t = iONEorgelement.ione_config.priceY, "1" == iONEorgelement.ione_config.priceShow ? "<div id='iONEprice1_" + e + "' style='pointer-events:none;position:absolute;left:" + i + "px;top:" + t + "px;width:" + iONEorgelement.ione_config.priceW + "px;text-align:" + iONEorgelement.ione_config.priceAlign + ";height:" + iONEorgelement.ione_config.priceH + "px;font-size:" + iONEorgelement.ione_config.pricefSize + "px;color:" + iONEorgelement.ione_config.pricefColor + ";font-weight:" + iONEorgelement.ione_config.pricefBold + ";overflow:hidden;font-family:" + iONEorgelement.ione_config.pricefName + "'><label id='iONEprice_" + e + "'>" + iONEgeneral.formatCurrency(iONEorgelement.ione_dataHolderArr[e].Price) + "</label></div>" : ""
                },
                shopButton: function (e) {
                        var i, t;
                        return i = iONEorgelement.ione_config.sButtonX, t = iONEorgelement.ione_config.sButtonY, "1" == iONEorgelement.ione_config.sButtonShow ? "<div id='iONEshop1_" + e + "' style='pointer-events:none;position: absolute; top:" + t + "px; left:" + i + "px;'><img id='iONEshop_" + e + "' src='" + addProtocal(iONEorgelement.ione_config.sBtnPath) + "'></img></div>" : ""
                },
                descriptionData: function (e) {
                        var i, t;
                        return i = iONEorgelement.ione_config.descriX, t = iONEorgelement.ione_config.descriY, "1" == iONEorgelement.ione_config.descriShow ? "<div id='iONEdesc1_" + e + "' style='pointer-events:none;position:absolute;left:" + i + "px;top:" + t + "px;width:" + iONEorgelement.ione_config.descriW + "px;text-align:" + iONEorgelement.ione_config.descriAlign + ";height:" + iONEorgelement.ione_config.descriH + "px;overflow:hidden;font-size:" + iONEorgelement.ione_config.descrifSize + "px;color:" + iONEorgelement.ione_config.descrifColor + ";font-weight:" + iONEorgelement.ione_config.descrifBold + ";font-family:" + iONEorgelement.ione_config.descrifname + "'><label id='iONEdesc_" + e + "'>" + iONEorgelement.ione_dataHolderArr[e].Description + "</label></div>" : ""
                },
                bigImageData: function (e) {
                        return "<img id='iONEBigImage' src='" + iONEorgelement.ione_dataHolderArr[Number(e)].ImageURL + "'></img>"
                },
                ione_FieldsData: function (e) {
                        for (var i = "", t = 1; t <= iONEinternal.max_fields; t++) fieldX = iONEorgelement.ione_config["f" + Number(t) + "X"], fieldY = iONEorgelement.ione_config["f" + Number(t) + "Y"], i += "1" == iONEorgelement.ione_config["f" + Number(t) + "Show"] ? "<div id='iONEprd_" + (t - 1) + "' style='pointer-events:none;position:absolute;left:" + fieldX + "px;top:" + fieldY + "px;width:" + iONEorgelement.ione_config["f" + Number(t) + "W"] + "px;text-align:" + iONEorgelement.ione_config["f" + Number(t) + "Align"] + ";height:" + iONEorgelement.ione_config["f" + Number(t) + "H"] + "px;font-size:" + iONEorgelement.ione_config["f" + Number(t) + "fSize"] + "px;color:" + iONEorgelement.ione_config["f" + Number(t) + "fColor"] + ";font-weight:" + iONEorgelement.ione_config["f" + Number(t) + "Bold"] + ";overflow:hidden;font-family:" + iONEorgelement.ione_config["f" + t + "fname"] + "'><label id='iONEprd_" + t + "'>" + iONEorgelement.ione_dataHolderArr[e]["field" + t] + "</label></div>" : "";
                        return i
                }
        },
        iONEloadProcessStart = {
                ioneLoadData: function () {
                        iONEtypeAdRun.ione_init(), iONEinternal.adSize = iONEorgelement.ione_config.ad_Width + "x" + iONEorgelement.ione_config.ad_Height, "Firefox" == iONEgeneral.browser() && iONEgeneral.browserVersion() <= 16 ? iONEtypeAdRun.ione_RunBackFill() : iONEgeneral.browserVersion() >= 12.1 && "Opera" == iONEgeneral.browser() ? iONEtypeAdRun.ione_RunHTML5Template() : iONEgeneral.browserVersion() <= 9 && "msie" == iONEgeneral.browser() ? iONEtypeAdRun.ione_RunBackFill() : iONEgeneral.isCSS3Supported(iONEcst.getElm(iONEcst.doc, "iONEcontainer")) && iONEgeneral.isCanvasSupported() ? "Opera" == iONEgeneral.browser() ? iONEgeneral.browserVersion() >= 12.1 ? iONEtypeAdRun.ione_RunHTML5Template() : iONEtypeAdRun.ione_RunBackFill() : iONEtypeAdRun.ione_RunHTML5Template() : iONEtypeAdRun.ione_RunBackFill()
                }
        },
        iONEtypeAdRun = {
                ione_RunBackFill: function () {
                        iONEcst.getElm(iONEcst.doc, "iONEcontainer").innerHTML = "<img src='" + addProtocal(iONEorgelement.ione_config.backfillPath) + "'></img>", iONEcst.getElm(iONEcst.doc, "iONEcontainer").onclick = function () {
                                var e = String(unescape(unescape(unescape(clickTag + iONEorgelement.ione_config.logoClick)))),
                                        i = e.split("&RedirectUrl=")[0] + "&RedirectUrl=",
                                        t = escape(e.split("&RedirectUrl=")[1]);
                                "0" == iONEorgelement.ione_config.trackerPlace ? window.open(iONEorgelement.ione_config.clickTracker + i + t, "_blank") : "1" == iONEorgelement.ione_config.trackerPlace && window.open(i + t + iONEorgelement.ione_config.clickTracker, "_blank")
                        }, iONEcst.getElm(iONEcst.doc, "iONEcontainer").style.cursor = "pointer", iONEcst.getElm(iONEcst.doc, "iONEcontainer").style.width = iONEorgelement.ione_config.ad_Width + "px", iONEcst.getElm(iONEcst.doc, "iONEcontainer").style.height = iONEorgelement.ione_config.ad_Height + "px"
                },
                ione_init: function () {
                        function e(e) {
                                return String(unescape(unescape(unescape(clickTag)))).split(e)[1].split("&")[0]
                        }
                        var i = (iONEcst.getElm(iONEcst.doc, "iONEevctrl").parentNode, iONEcst.doc.createElement("div"));
                        i.id = "iONEcontainer", i.width = "100%:", i.height = "100%", i.style.position = "absolute", iONEcst.getElm(iONEcst.doc, "iONEevctrl").parentNode.appendChild(i), iONEuniqueCall.checkTextAlignProp(), ione_clickTag = {
                                // xmlpath: String(iONEinternal.path) + String(Base64.encode(String("imp=" + e("ImpressionId=") + "&aid=" + e("AdvertiserId=") + "&fid=" + e("FeedId=") + "&pc=" + iONEorgelement.ione_config.total_product + "&ocf=" + iONEorgelement.ione_config.datatype))),
                                xmlpath: String(iONEinternal.path) + String(Base64.encode(String("imp=" + (new Date).getTime() / 1e3 + "&aid=" + advertiser_ID + "&fid=" + iONEorgelement.ione_config.feedId + "&pc=" + iONEorgelement.ione_config.total_product + "&ocf=" + iONEorgelement.ione_config.datatype))),
                                pixeFire: function (e) {
                                        var i = e,
                                                t = iONEcst.doc.createElement("img"),
                                                n = "iONEpixel_" + (new Date).getTime() / 1e3,
                                                o = i;
                                        t.setAttribute("id", n), t.setAttribute("width", "1"), t.setAttribute("height", "1"), t.setAttribute("src", o), t.setAttribute("style", "display:none"), iONEcst.doc.body.appendChild(t)
                                },
                                callDefaultXML: function () {
                                        iONEinternal.defaultCall = !0
                                },
                                callDefaultJSON: function () {
                                        iONEinternal.defaultCall = !0, iONEreadData.readData(Ione_DPrd)
                                }
                        }
                },
                ione_RunHTML5Template: function () {
                        function e(e, i) {
                                function t(e, i) {
                                        var t = new XMLHttpRequest;
                                        return "withCredentials" in t ? t.open(e, i, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest, t.open(e, i)) : t = null, t
                                }

                                function n(e) {
                                        return "n" == iONEorgelement.ione_config.clientApproved ? void ione_clickTag.callDefaultJSON() : "default" == iONEorgelement.ione_config.version ? void ione_clickTag.callDefaultJSON() : void (void 0 != e.Products ? iONEreadData.readData(e) : ione_clickTag.callDefaultJSON())
                                }
                                var o = t("get", e);
                                o.withCredentials = !0, o && (o.onload = function () {
                                        "default" == i ? iONEreadData.readData(JSON.parse(o.responseText)) : n(JSON.parse(o.responseText))
                                }, o.send())
                        }

                        // Checking to get result from .aspx or not             // New code
                        if (iONEorgelement.ione_config.clientApproved == "y") e(ione_clickTag.xmlpath, "live");
                        else ione_clickTag.callDefaultJSON();
                        // e(ione_clickTag.xmlpath, "live");
                        "" != iONEorgelement.ione_config.impression && ione_clickTag.pixeFire(iONEorgelement.ione_config.impression + (new Date).getTime() / 1e4)
                }
        },
        iONEreadData = {
                readData: function (e) {
                        for (var i = 0; void 0 != String(iONEorgelement.ione_config.customFont).split(",")[i];) {
                                var t = String(iONEorgelement.ione_config.customFont).split(",")[i];
                                fontList.loadFont(t.split("||")[0], ione_protocal + "//" + iONEinternal.hostName + "/HTML5DCT/fonts/" + t.split("||")[1], t.split("||")[2]), i++
                        }
                        Number(iONEorgelement.ione_config.total_product) % Number(iONEorgelement.ione_config.imgShowInRow) == 0 ? iONEinternal.total_rounds = Number(iONEorgelement.ione_config.total_product) / Number(iONEorgelement.ione_config.imgShowInRow) : console.log("Total Product not matching"), iONEstorage.passData(e), iONEdisplayAreaController.createBackground(); if (iONEinternal.defaultCall == false) {
                                ione_clickTag.pixeFire(iONEorgelement.ione_dataHolderArr[0].ZmpViewPixel, 'ZmpViewPixel');
                        }
                        for (var n = 0; n < iONEinternal.total_rounds; n++) iONEdyCreater.createDiv("iONEanim_" + n, iONEorgelement.ione_config.ad_Width + "px", iONEorgelement.ione_config.ad_Height + "px", "iONEcontainer"), iONEcst.getElm(iONEcst.doc, "iONEanim_" + n).style.left = iONEorgelement.ione_config.ad_Width + "px", iONEcst.getElm(iONEcst.doc, "iONEanim_" + n).style.left = iONEorgelement.ione_config.ad_Width + "px", iONEdisplayAreaController.createPage(n), iONEinternal.cur_rounds++;
                        iONEdisplayAreaController.createdisplayObject(), createRumTimeAnimCSS3(), forwardAnim(iONEorgelement.ione_config.ad_Width, 0), -1 != String(iONEorgelement.ione_config.version).indexOf("google") && (iONEorgelement.ione_GTimer = setTimeout(function () {
                                iONEinternal.googleEnabled = !0, iONEorgelement.ione_ReplayEnabled = !0, stopAllAnimation(), -1 != String(iONEorgelement.ione_config.version).indexOf("google_1") && (leArrow.style.visibility = "hidden", riArrow.style.visibility = "hidden"), reBtn.style.visibility = "visible"
                        }, 22500)), iONEcst.getElm(iONEcst.doc, "iONEcontainer").addEventListener("mouseup", iONEclickHandler.CLICK, !1)
                }
        },
        iONEclickHandler = {
                MOUSEOVER: function (e) {
                        e.target.id
                },
                MOUSEOUT: function (e) { },
                CLICK: function (e) {
                        "iONElogo" == e.target.id ? pageClickAction(iONEorgelement.ione_config.clickTracker, "logoClick", "logoClick", 1e3) : ("addNonAnimDiv1" == e.target.id || "addNonAnimDiv2" == e.target.id || "addAnimDiv1" == e.target.id || "addAnimDiv2" == e.target.id || "iONEcontainer" == e.target.id) && pageClickAction(iONEorgelement.ione_config.clickTracker, iONEorgelement.ione_dataHolderArr[iONEinternal.imgCnt].ProductId, "prdClick", iONEinternal.imgCnt)
                }
        },
        iONEdisplayAreaController = {
                createdisplayObject: function () {
                        iONEdyCreater.createDiv("iONErunCustScript", "100%", "100%", "iONEcontainer"), iONEdyCreater.createDiv("iONEleftArrow1", "100%", "100%", "iONEcontainer"), iONEdyCreater.createDiv("iONErightArrow1", "100%", "100%", "iONEcontainer"), iONEdyCreater.createDiv("iONEreplay1", "100%", "100%", "iONEcontainer"), iONEdyCreater.createDiv("iONElogo1", "100%", "100%", "iONEcontainer"), leArrow = iONEcst.getElm(iONEcst.doc, "iONEleftArrow1"), riArrow = iONEcst.getElm(iONEcst.doc, "iONErightArrow1"), reBtn = iONEcst.getElm(iONEcst.doc, "iONEreplay1"), logoB = iONEcst.getElm(iONEcst.doc, "iONElogo1"), leArrow.style.left = iONEorgelement.ione_config.leftArrowX + "px", riArrow.style.left = iONEorgelement.ione_config.rightArrowX + "px", leArrow.style.top = iONEorgelement.ione_config.leftArrowY + "px", riArrow.style.top = iONEorgelement.ione_config.rightArrowY + "px", riArrow.style.top = iONEorgelement.ione_config.rightArrowY + "px", leArrow.style.zIndex = 2, riArrow.style.zIndex = 2, reBtn.style.top = iONEorgelement.ione_config.replayBtnY + "px", reBtn.style.left = iONEorgelement.ione_config.replayBtnX + "px", logoB.style.top = iONEorgelement.ione_config.logoY + "px", logoB.style.right = iONEorgelement.ione_config.logoX + "px", riArrow.style.margin = "0px", leArrow.style.margin = "0px", logoB.style.margin = "0px", reBtn.style.margin = "0px", riArrow.style.padding = "0px", leArrow.style.padding = "0px", logoB.style.padding = "0px", reBtn.style.padding = "0px", riArrow.style.height = "0px", leArrow.style.height = "0px", logoB.style.height = "0px", logoB.style.width = "0px", reBtn.style.height = "0px", reBtn.style.zIndex = 2, leArrow.innerHTML = "<img id='iONEleftArrow' src='" + addProtocal(iONEorgelement.ione_config.LarrowPath) + "'></img>", riArrow.innerHTML = "<img id='iONErightArrow' src='" + addProtocal(iONEorgelement.ione_config.RarrowPath) + "'></img>", logoB.innerHTML = "<img id='iONElogo' src='" + addProtocal(iONEorgelement.ione_config.logoPath) + "'></img>", reBtn.innerHTML = "<img id='iONEreplay' src='" + addProtocal(iONEorgelement.ione_config.replayPath) + "'></img>", 1 == iONEinternal.total_rounds && (leArrow.style.visibility = "hidden", riArrow.style.visibility = "hidden"), reBtn.style.visibility = "hidden", "" != iONEorgelement.ione_config.addNonAnimDiv1 && (iONEdyCreater.createDiv("nonAnimObjDiv1", "100%", "100%", "iONEcontainer"), iONEcst.getElm(iONEcst.doc, "nonAnimObjDiv1").innerHTML = iONEorgelement.ione_config.addNonAnimDiv1), "" != iONEorgelement.ione_config.addNonAnimDiv2 && (iONEdyCreater.createDiv("nonAnimObjDiv2", "100%", "100%", "iONEcontainer"), iONEcst.getElm(iONEcst.doc, "nonAnimObjDiv2").innerHTML = iONEorgelement.ione_config.addNonAnimDiv2), reBtn.onclick = function () {
                                iONEorgelement.ione_ReplayEnabled = !1, reBtn.style.visibility = "hidden", iONEinternal.total_rounds > 1 && (leArrow.style.visibility = "visible", riArrow.style.visibility = "visible"), iONEinternal.click = "right", stopAllAnimation(), 0 == iONEanimCtrl.anim_inprocess && replayZoomInAnim(), iONEorgelement.ione_ReTimer = setTimeout(function () {
                                        iONEinternal.googleEnabled = !0, iONEorgelement.ione_ReplayEnabled = !0, reBtn.style.visibility = "visible", leArrow.style.visibility = "hidden", riArrow.style.visibility = "hidden", stopAllAnimation()
                                }, 4e3)
                        }, leArrow.onclick = function () {
                                leftArrowClickAction()
                        }, riArrow.onclick = function () {
                                rightArrowClickAction()
                        }, "" != iONEorgelement.ione_config.executeCustom && iONE_ScriptExecute.run("iONErunCustScript", "<script type='text/javascript'>" + iONEorgelement.ione_config.executeCustom + "</script>")
                },
                replayAnimation: function () { },
                createBackground: function () {
                        var e = iONEcst.getElm(iONEcst.doc, "iONEcontainer");
                        e.style.cursor = "pointer", e.style.padding = "0px", e.style.margin = "0px", e.style.width = Number(iONEorgelement.ione_config.ad_Width) - Number(2) + "px", e.style.height = Number(iONEorgelement.ione_config.ad_Height) - Number(2) + "px", e.style.backgroundColor = iONEorgelement.ione_config.backgroundColor, e.style.borderWidth = iONEorgelement.ione_config.borderW, e.style.borderColor = iONEorgelement.ione_config.borderColor, e.style.borderStyle = iONEorgelement.ione_config.borderStyle, e.style.fontFamily = "Arial", e.style.position = "absolute", e.style.overflow = "hidden", "1" == iONEorgelement.ione_config.backgroundImage && (e.style.backgroundImage = "url('" + addProtocal(iONEorgelement.ione_config.bgPath) + "')")
                },
                createPage: function (e) {
                        if (iONEdyCreater.createDiv("iONEThumbContainer_" + e, "100%", "100%", "iONEanim_" + e), iONEcst.getElm(iONEcst.doc, "iONEThumbContainer_" + e).style.left = iONEorgelement.ione_config.imgX + "px", iONEcst.getElm(iONEcst.doc, "iONEThumbContainer_" + e).style.top = iONEorgelement.ione_config.imgY + "px", "" != iONEorgelement.ione_config.imageBlinkBorder) var i = Number(iONEorgelement.ione_config.imageBlinkBorder.split(" ")[1].split("px")[0]);
                        else
                                var i = 0;
                        for (var t = 0; t < iONEorgelement.ione_config.imgShowInRow; t++) {
                                var n = Number(e * iONEorgelement.ione_config.imgShowInRow + t);
                                iONEdyCreater.createDiv("iONEThumb_" + n, "100%", "100%", "iONEThumbContainer_" + e), "1" == iONEorgelement.ione_config.borderAroundContainer && (document.getElementById("iONEThumb_" + n).style.left = t * iONEorgelement.ione_config.imgW + t * i + t * iONEorgelement.ione_config.img_gap + "px"), t >= 2 && "2x2" == iONEorgelement.ione_config.thumbOrd && (document.getElementById("iONEThumb_" + n).style.top = iONEorgelement.ione_config.imgH + iONEorgelement.ione_config.img_gap + "px", "1" == iONEorgelement.ione_config.borderAroundContainer && (document.getElementById("iONEThumb_" + n).style.left = (t) * iONEorgelement.ione_config.imgW + (t) * i + (t) * iONEorgelement.ione_config.img_gap + "px")), iONEdyCreater.createDiv("iONEImage_" + n, "100%", "100%", "iONEThumb_" + n), document.getElementById("iONEImage_" + n).innerHTML = "<img  alt='.' id='iONEThumbImage_" + n + "' src='" + iONEorgelement.ione_dataHolderArr[Number(e * iONEorgelement.ione_config.imgShowInRow + t)].ImageURL + "'></img>", document.getElementById("iONEThumb_" + n).style.width = iONEorgelement.ione_config.imgW + "px", document.getElementById("iONEThumb_" + n).style.height = iONEorgelement.ione_config.imgH + "px", iONEcst.getElm(iONEcst.doc, "iONEThumb_" + n).style.zIndex = 1, document.getElementById("iONEThumb_" + n).style.visibility = "hidden", "1" == iONEorgelement.ione_config.borderAroundContainer && "y" == iONEorgelement.ione_config.showBorder && (iONEcst.getElm(iONEcst.doc, "iONEImage_" + n).style.width = iONEorgelement.ione_config.imgW + "px", iONEcst.getElm(iONEcst.doc, "iONEImage_" + n).style.height = iONEorgelement.ione_config.imgH + "px"), iONEcst.getElm(iONEcst.doc, "iONEImage_" + n).onmouseover = function (e) {
                                        var i = e.target.id.split("_")[1];
                                        // iONEcst.getElm(iONEcst.doc, "iONEThumbImage_" + i).style.opacity = 1, null == iONEcst.getElm(iONEcst.doc, "iONEPopup_" + i) && (iONEdyCreater.createDiv("iONEPopup_" + i, "100%", "100%", "iONEImage_" + i), iONEcst.getElm(iONEcst.doc, "iONEPopup_" + i).innerHTML = iONEdyCreater.createHoverField(i), iONEcst.getElm(iONEcst.doc, "iONEPopup_" + i).style.top = "0px", iONEgeneral.truncate(iONEcst.getElm(iONEcst.doc, "iONEPopup_" + i))), iONEcst.getElm(iONEcst.doc, "iONEPopup_" + i).style.visibility = "visible", iONEcst.getElm(iONEcst.doc, "iONEPopup_" + i).style.width = iONEorgelement.ione_config.imgW + 'px', iONEcst.getElm(iONEcst.doc, "iONEPopup_" + i).style.height = iONEorgelement.ione_config.imgH + 'px', iONEcst.getElm(iONEcst.doc, "iONEPopup_" + i).style.backgroundColor = "#ffffff", iONEcst.getElm(iONEcst.doc, "iONEPopup_" + i).style.opacity = '0.85'
                                }, iONEcst.getElm(iONEcst.doc, "iONEImage_" + n).onmouseout = function (e) {
                                        var i = e.target.id.split("_")[1];
                                        //iONEcst.getElm(iONEcst.doc, "iONEThumbImage_" + i).style.opacity = 1, iONEcst.getElm(iONEcst.doc, "iONEPopup_" + i).style.visibility = "hidden"
                                }, iONEcst.getElm(iONEcst.doc, "iONEThumb_" + n).onclick = function (e) {
                                        pageClickAction(iONEorgelement.ione_config.clickTracker, iONEorgelement.ione_dataHolderArr[this.id.split("iONEThumb_")[1]].ProductId, "prdClick", this.id.split("iONEThumb_")[1]), stopAllAnimation(), iONEanimCtrl.anim_inprocess = !1, imageOut(e)
                                }, iONEcst.getElm(iONEcst.doc, "iONEThumb_" + n).onmouseover = function (e) {
                                        imageOver(e)
                                }, iONEcst.getElm(iONEcst.doc, "iONEThumb_" + n).onmouseout = function (e) {
                                        imageOut(e)
                                }, iONEcst.getElm(iONEcst.doc, "iONEThumbImage_" + n).onerror = function (e) {
                                        var i = this.id.split("_")[1];
                                        "1" == iONEorgelement.ione_config.borderAroundContainer ? document.getElementById("iONEImage_" + i).innerHTML = "<img id='" + this.id + "'  height='" + iONEorgelement.ione_config.imgH + "' width='" + iONEorgelement.ione_config.imgW + "' src='" + addProtocal(iONEorgelement.ione_config.noImgPath) + "'></img>" : "1" == iONEorgelement.ione_config.borderAroundImage && (document.getElementById("iONEImage_" + i).innerHTML = "<img id='" + this.id + "'  height='" + iONEorgelement.ione_config.imgH + "' width='" + iONEorgelement.ione_config.imgW + "' src='" + addProtocal(iONEorgelement.ione_config.noImgPath) + "'></img>"), document.getElementById("iONEThumbImage_" + i).onload = function (e) {
                                                if (document.getElementById(this.parentNode.id).style.visibility = "visible", "y" == iONEorgelement.ione_config.showBorder && (document.getElementById(this.parentNode.id).style.border = iONEorgelement.ione_config.imageBorder), "1" == iONEorgelement.ione_config.borderAroundImage && i > 0) var t = document.getElementById("iONEThumb_" + i),
                                                        n = setInterval(function () {
                                                                "" != document.getElementById("iONEThumbImage_" + (i - 1)).style.width && (t.style.left = document.getElementById("iONEThumbImage_" + (i - 1)).style.width, this.width = document.getElementById("iONEThumbImage_" + (i - 1)).style.width, this.height = document.getElementById("iONEThumbImage_" + (i - 1)).style.height, document.getElementById(this.id).setAttribute("width", this.width), clearInterval(n))
                                                        }, 100)
                                        }
                                }, iONEcst.getElm(iONEcst.doc, "iONEThumbImage_" + n).onload = function (e) {
                                        Number(e.target.width) >= Number(e.target.height) ? (this.style.width = iONEorgelement.ione_config.imgW + "px", this.style.height = iONEorgelement.ione_config.imgW / (this.width / this.height) + "px", document.getElementById(this.parentNode.id).style.visibility = "visible", "1" == iONEorgelement.ione_config.borderAroundContainer && "y" == iONEorgelement.ione_config.showBorder && (this.style.marginTop = (parseInt(iONEorgelement.ione_config.imgH) - parseInt(this.style.height)) / 2 + "px"), "1" == iONEorgelement.ione_config.borderAroundImage && "y" == iONEorgelement.ione_config.showBorder && (this.style.border = iONEorgelement.ione_config.imageBorder)) : (this.style.width = iONEorgelement.ione_config.imgH / (this.height / this.width) + "px", this.style.height = iONEorgelement.ione_config.imgH + "px", document.getElementById(this.parentNode.id).style.visibility = "visible", "1" == iONEorgelement.ione_config.borderAroundContainer && "y" == iONEorgelement.ione_config.showBorder && (this.style.marginLeft = (parseInt(iONEorgelement.ione_config.imgW) - parseInt(this.style.width)) / 2 + "px"), "1" == iONEorgelement.ione_config.borderAroundImage && "y" == iONEorgelement.ione_config.showBorder && (this.style.border = iONEorgelement.ione_config.imageBorder));
                                        var t = this.parentNode.id.split("_")[1];
                                        "0" == iONEorgelement.ione_config.borderAroundContainer && (t %= "2x2" == iONEorgelement.ione_config.thumbOrd ? 2 : iONEorgelement.ione_config.imgShowInRow, document.getElementById(this.parentNode.id).style.left = t * this.width + t * i + t * iONEorgelement.ione_config.img_gap + "px", document.getElementById(this.parentNode.id).style.height = this.height + "px")
                                }
                        }
                        "" != iONEorgelement.ione_config.addAnimDiv1 && (iONEdyCreater.createDiv("addAnimDiv1_" + e, "100%", "100%", "iONEanim_" + e), iONEcst.getElm(iONEcst.doc, "addAnimDiv1_" + e).innerHTML = iONEorgelement.ione_config.addAnimDiv1, iONEcst.getElm(iONEcst.doc, "addAnimDiv1_" + e).id = "addAnimDiv1_" + e), "" != iONEorgelement.ione_config.addAnimDiv2 && (iONEdyCreater.createDiv("addAnimDiv2_" + e, "100%", "100%", "iONEanim_" + e), iONEcst.getElm(iONEcst.doc, "addAnimDiv2_" + e).innerHTML = iONEorgelement.ione_config.addAnimDiv1, iONEcst.getElm(iONEcst.doc, "addAnimDiv2_" + e).id = "addAnimDiv2_" + e), EventBus.dispatch("PAGE_CREATED")
                }
        },
        iONE_ScriptExecute = {
                run: function (e, i) {
                        function t(e, i) {
                                return e.nodeName && e.nodeName.toUpperCase() === i.toUpperCase()
                        }

                        function n(e) {
                                data = e.text || e.textContent || e.innerHTML || "";
                                var i = document.getElementsByTagName("head")[0] || document.documentElement,
                                        t = document.createElement("script");
                                t.type = "text/javascript", t.appendChild(document.createTextNode(data)), i.insertBefore(t, i.firstChild), i.removeChild(t), e.parentNode && e.parentNode.removeChild(e)
                        }
                        domelement = document.getElementById(e), domelement.innerHTML = i;
                        var o = [];
                        ret = domelement.childNodes;
                        for (var r = 0; ret[r]; r++)!o || !t(ret[r], "script") || ret[r].type && "text/javascript" !== ret[r].type.toLowerCase() || o.push(ret[r].parentNode ? ret[r].parentNode.removeChild(ret[r]) : ret[r]);
                        for (script in o) n(o[script])
                }
        }