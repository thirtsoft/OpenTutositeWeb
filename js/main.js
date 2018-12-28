$(document).ready(function(){
    /* Vav slide toogle c'est dire permet de cacher le menu
    ou le rendre visible via les telephone*/
    $('i.icon').click(function(){
        $('.nav-list').slideToggle()
    });

    /**Changer la couleur du menu quand
     * on scrolle sur le site
     * 
     */
    $(window).scroll(function(){
        var sc = $(this).scrollTop();
        if(sc > 50){
            $('header').addClass('sticky');
        }else{
            $('header').removeClass('sticky');
        }
    });

});