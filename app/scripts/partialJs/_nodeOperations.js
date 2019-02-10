export function newNodeOperations(data) {
    // _NodeOperations.js

    $(document).scroll(function(e){
        var scrollAmount = $(window).scrollTop();
        var documentHeight = $(document).height();
        var windowHeight = $(window).height();
      
        var scrollPercent = (scrollAmount / (documentHeight - windowHeight)) * 100;
        var roundScroll = Math.round(scrollPercent);
        
        $(".scroll").css("width", (scrollPercent + '%'));
        $("h1").text("Scroll Percentage: " + roundScroll + '%');
      });
      
      

    var saluto = data.table[0].saluto

    return saluto

}