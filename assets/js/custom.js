$(document).ready(function(){
    $('.sidebar .openSidebarBtn').on('click',function(){
        $(this).toggleClass('smallSidebarBtn');
        $(this).parent().closest('.sidebar').toggleClass('smallSidebar');
    })
    $('[data-search]').on('keyup', function() {
        var searchVal = $(this).val();
        var filterItems = $('[data-filter-item]');
    
        if ( searchVal != '' ) {
            filterItems.addClass('hidden');
            $('[data-filter-item][data-filter-name*="' + searchVal.toLowerCase() + '"]').removeClass('hidden');
        } else {
            filterItems.removeClass('hidden');
        }
    });
});