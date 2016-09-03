define(['jquery'], function(){
  function Window(){
    this.cfg = {
      width: 500,
      height: 300,
      title: "系统消息",
      content: "",
      handler: null,
      hasCloseBtn: false,
      handler4AlertBtn: null,
      handler4CloseBtn: null
    }
  };
  Window.prototype = {
    alert: function(cfg){
      var CFG = $.extend(this.cfg, cfg);
      var boundingBox = $('<div class="window_boundingBox">'+
        '<div class="window_header">'+ CFG.title +'</div>'+
        '<div class="window_body">'+ CFG.content +'</div>'+
        '<div class="window_footer"><input type="button" value="确定"></div>'+
        '</div>');
      //btn = boundingBox.find(".window_footer input");
      btn = boundingBox.find(".window_alertBtn")
      boundingBox.appendTo('body');
      //boundingBox.html(CFG.content);
      var btn = $('<input type="button" value="确定" />');
      btn.appendTo(boundingBox);
      btn.click(function() {
        //CFG.handler && CFG.handler();
        CFG.handler4AlertBtn && CFG.handler4AlertBtn();
        boundingBox.remove();
      });
      $.extend(this.cfg, cfg);
      boundingBox.css({
        width: this.cfg.width + "px",
        height: this.cfg.height + "px",
        left: (this.cfg.x || 0 ) + "px",
        top: (this.cfg.y || 0 ) + "px"
      });
      //是否需要关闭按钮
      if(CFG.hasCloseBtn){
        var closeBtn = $('<span class="window_closeBtn">X</span>');
        closeBtn.appendTo(boundingBox);
        closeBtn.click(function() {
          CFG.handler4CloseBtn && CFG.handler4CloseBtn();
          boundingBox.remove();
        });
      }
    },
    confirm: function(){},
    prompt: function(){}
  }
  return {
    Window: Window
  }
})
