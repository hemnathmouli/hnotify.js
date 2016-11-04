/*************************************************************/
/* Plugin Author: Hemnath Mouli                              */
/* Plugin Name  : hnotify.js                                 */
/* Version      : 1.0                                        */
/* Requirements : Bootstrap ( JS )                           */
/*************************************************************/

(function ($) {
    $.hnotify 	= 	function ( options ) {
	    hnotify = this,
	    options = options || {};
	    var time	=	options.interval	?	options.interval	:	5000;

        hnotify.init 		= 	function () {
            var settings = $.extend({}, options);
            $.data( document, 'hnotify', settings );
        }
        
        hnotify.showsuccess	=	function ( text, time ) {
			$( ".hnotify_alert_pops span" ).html( text );
			$( ".hnotify_alert_pops" ).show();
			$( ".hnotify_alert_pops" ).fadeIn();
			setTimeout(function() {
				$( ".hnotify_alert_pops" ).fadeOut();
			}, time);
        };
        
        hnotify.showwarning	=	function ( text, time ) {
			$( ".hnotify_alert_pops_warn span" ).html( text );
			$( ".hnotify_alert_pops_warn" ).show();
			$( ".hnotify_alert_pops_warn" ).fadeIn();
			setTimeout(function() {
				$( ".hnotify_alert_pops_warn" ).fadeOut();
			}, time);
        }
        
        hnotify.showdanger	=	function ( text, time ) {
			$( ".hnotify_alert_pops_dang span" ).html( text );
			$( ".hnotify_alert_pops_dang" ).show();
			$( ".hnotify_alert_pops_dang" ).fadeIn();
			setTimeout(function() {
				$( ".hnotify_alert_pops_dang" ).fadeOut();
			}, time);
        }
        
        hnotify.showinfo	=	function ( text, time ) {
			$( ".hnotify_alert_pops_info span" ).html( text );
			$( ".hnotify_alert_pops_info" ).show();
			$( ".hnotify_alert_pops_info" ).fadeIn();
			setTimeout(function() {
				$( ".hnotify_alert_pops_info" ).fadeOut();
			}, time);
        }
        
        hnotify.init();
        
        if( $( "html" ).find( ".hnotify" ).length == 0 ){
        	 var html	=	'<div class ="container hnotify"><div class = "row">'
        	 +'<div class="alert-success hnotify_alert_pops">	<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>	    <span>Sorry there is problem while Updating</span>		</div>'
        	 +'<div class="alert-warning hnotify_alert_pops_warn">	<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>	    <span>Sorry there is problem while Updating</span>		</div>'
        	 +'<div class="alert-warning hnotify_alert_pops_dang">	<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>	    <span>Sorry there is problem while Updating</span>		</div>'
        	 +'<div class="alert-warning hnotify_alert_pops_info">	<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>	    <span>Sorry there is problem while Updating</span>		</div>'
        	 +'</div></div>';
             $("body").append( html );
             $(".hnotify_alert_pops, .hnotify_alert_pops_warn, .hnotify_alert_pops_dang, .hnotify_alert_pops_info").css( "width", $(".container").css("width") );
        }
        
        if( options.text != "" && options.text != undefined ){
        	switch( options.flag ){
        		case "success":	 hnotify.showsuccess	( options.text, time ); 	break;
        		case "warning":	 hnotify.showwarning	( options.text, time ); 	break;
        		case "danger" :	 hnotify.showdanger		( options.text, time ); 	break;
        		case "info"	  :	 hnotify.showinfo		( options.text, time ); 	break;
        		default		  :  hnotify.showsuccess( options.text, time );
        	}
        }
    }

    $.hnotify.init = function (callback) {
        console.log($.data(document, 'hnotify is active'));
        callback();
    }
    
    $(document).on("click", ".hnotify .close", function(){
    	$(this).parent().slideUp();
    });

}(jQuery));
