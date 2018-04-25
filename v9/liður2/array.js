var photos=['"./img/p1.jpg"',"img/p2.jpg","img/p3.jpg","img/p4.jpg",
"img/p5.jpg","img/p6.jpg","img/p7.jpg","img/p8.jpg","img/p9.jpg"];




var arr = [ 4, "Pete", 8, "John" ];
var $spans = $( "span" );
$spans.eq( 0 ).text( jQuery.inArray( "John", arr ) );
$spans.eq( 1 ).text( jQuery.inArray( 4, arr ) );
$spans.eq( 2 ).text( jQuery.inArray( "Karl", arr ) );
$spans.eq( 3 ).text( jQuery.inArray( "Pete", arr, 2 ) );