$(document).ready(function()
    {
        $("section.contacordeon").hide();
        $("h4.acordeon").click(function()
        {
            $("section.contacordeon").slideUp(2000);
            $(this).next("section.contacordeon").slideDown(2000);
        });
});