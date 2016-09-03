require.config({
  paths: {
    jquery: 'jquery-1.11.0.min'
  }
});

require(['jquery', 'window'], function($,w){
  $('#a').click(function(){
    new w.Window().alert({
      title: "提示",
      content: "welcome!",
      handler: function(){
        console.log("you click the button");
      },
      width: 300,
      height: 150,
      hasCloseBtn: true,
      handler4AlertBtn: function(){
        console.log("you click the alert");
      },
      handler4CloseBtn: function(){
        console.log("you click the close");
      }
    });
  })
});
