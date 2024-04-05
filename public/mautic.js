/** This section is only needed once per page if manually copying **/
if (typeof MauticSDKLoaded == "undefined") {
  var MauticSDKLoaded = true;
  var head = document.getElementsByTagName("head")[0];
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "https://neoleads.com.br/mautic/media/js/mautic-form.js";
  script.onload = function () {
    MauticSDK.onLoad();
  };
  head.appendChild(script);
  var MauticDomain = "https://neoleads.com.br/mautic";
  var MauticLang = {
    submittingMessage: "Por favor, aguarde...",
  };
}
