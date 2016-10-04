

var accordeon = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < accordeon.length; i++) {
    accordeon[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
};
jQuery(function ($) {

    $('.swapArchived').on('click', function () {
        var $el = $(this),
            textNode = this.lastChild;
        $el.find('span').toggleClass('glyphicon-minus-sign glyphicon-plus-sign');
        textNode.nodeValue = 'Show ' + ($el.hasClass('showArchieved') ? 'Incomplete' : 'Archived')
        $el.toggleClass('showArchieved');
    });
});