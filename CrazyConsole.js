$(document).ready(function()
{
    var metaIndex = 0;
    //
    $('head').append('<link rel="stylesheet" href="crazyConsoleStyle.css" type="text/css" />');
    CrazyBoxHandler();
    CursorHandler();
    //
    
});

CrazyBoxHandler = function()
{
    $("div.CrazyBox").before("<div>")
    $("div.CrazyBox").each(function(){ 
        $(this).val([$(this).html(), 0]);
        //$(this).after("</div><div class = Cursor></div>");
    });
    $(".CrazyBox").each(function(){
        setTimeout(SingleHandler,$(this).data().startDelay, $(this));
    })
    /*
    
    */
}

SingleHandler = function( Element )
{ 
    var Text  = Element.val()[0];
    var Index = Element.val()[1];
    var Delay = parseInt(Element.data().milisecondPerLetter + (Math.random() * Element.data().randomDelayRange));
    var Height = Element.css("font-size").split("px")[0];
    Height = Height - 3;
    Index++;
    if(Text[Index] == '<')
    {
        while(Text[Index] != '>')
        {
            Index++;
        }
    }

    Text = Text.slice(0,Index);
    Element.show();
    Element.html(Text);

    var CursorCode =    "<div class = Cursor style =" + 
                        "height:" + Height + "px;" +
                        "width:" + parseInt(Height/4) + "px;" +
                        "background-color:" + Element.css("color").replace(/ /g,'') +
                        "; ></div></div>";
                        
    Element.append(CursorCode);
    if(Element.val()[1] < Element.val()[0].length)
    {
        Element.val()[1] = Index;
        setTimeout(SingleHandler, Delay, Element);
    }
}

CursorHandler = function ()
{
    window.setInterval(function ()
    {
        if ($(".Cursor").is(":visible"))
        {
            $(".Cursor").hide();
        }
        else{
            $(".Cursor").show();
        }
    }
    , 300);
}