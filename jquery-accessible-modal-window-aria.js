$(document).ready(function(){


   // loading modal ------------------------------------------------------------------------------------------------------------
   
   // init
   if ( $('.js-modal').length  ) { // if there are at least one :)
      $('.js-modal' ).each( function(index_to_expand) {
          var $this = $(this) ,
              index_lisible = index_to_expand+1;
          
          $this.attr({
                  'id' : 'label_modal_' + index_lisible
                });

      });
      
      // events ------------------
      $( 'body' ).on( 'click', '.js-modal', function( event ) {
         var $this = $(this),
             $modal_text = $this.attr('data-modal-text'),
             $modal_content_id = '#' + $this.attr('data-modal-content-id'),
             $modal_title = $this.attr('data-modal-title'),
             $modal_close_text = $this.attr('data-modal-close-text'),
             $modal_close_title = $this.attr('data-modal-close-title'),
             $modal_starter_id = $this.attr('id'),
             $modal_code,
             $modal_overlay,
             $page = $('#page');
         
         if ( typeof $modal_text === "undefined" || $modal_text === "undefined" || $modal_text === "" ) {
                  $modal_text = '';
                  }
         if ( typeof $modal_id === "undefined" || $modal_id === "undefined" || $modal_id === "" ) {
                  $modal_id = '';
                  }
         if ( typeof $modal_title === "undefined" || $modal_title === "undefined" || $modal_title === "" ) {
                  $modal_title = '';
                  }
         if ( typeof $modal_close_text === "undefined" || $modal_close_text === "undefined" || $modal_close_text === "" ) {
                  $modal_close_text = 'Close';
                  }
         if ( typeof $modal_close_title === "undefined" || $modal_close_title === "undefined" || $modal_close_title === "" ) {
                  $modal_close_title = $modal_close_text;
                  }
         
         // insert code at the end
         $modal_code = '<dialog id="js-modal" class="modal" role="dialog" aria-labelledby="modal-title"><div role="document">';
         $modal_code += '<button id="js-modal-close" class="modal-close" data-focus-back="' + $modal_starter_id + '" title="' + $modal_close_title + '">' + $modal_close_text + '</button>';
         if ($modal_title !== ''){
            $modal_code += '<h1 id="modal-title" class="modal-title">' + $modal_title + '</h1>';
            }
         if ($modal_text !== ''){
            $modal_code += '<p>' + $modal_text + '</p>';
            }
            else {
                  if ($modal_content_id !== '' && $($modal_content_id).length  ){
                     $modal_code += $($modal_content_id).html();
                     }
                  }
         $modal_code += '<span id="js-modal-tabindex" tabindex="0"></span>';
         $modal_code += '</div></dialog>';
         
         $( $modal_code ).insertAfter($page);
         
         $page.attr('aria-hidden', 'true');
         
         // add overlay
         $modal_overlay = '<a role="button" id="js-modal-overlay" class="modal-overlay" title="' + $modal_close_title + '"><span class="invisible">Close modal</span></a>';
         $( $modal_overlay ).insertAfter($('#js-modal'));
         
         $('#js-modal-close').focus();
         
         
         
         event.preventDefault();
         
      })
      // close button and esc key
      $( 'body' ).on( 'click', '#js-modal-close', function( event ) {
         var $this = $(this),
             $focus_back = '#' + $this.attr('data-focus-back'),
             $page = $('#page');
             
         $page.removeAttr('aria-hidden');
         $('#js-modal').remove();
         $('#js-modal-overlay').remove();
         $( $focus_back ).focus();
         
      })
      .on( 'click', '#js-modal-overlay', function( event ) {
         $('#js-modal-close').click(); 
         event.preventDefault();
      })
      .on( 'keydown', '#js-modal-overlay', function( event ) {
         if ( event.keyCode == 13 || event.keyCode == 32 ) { // space or enter
            $('#js-modal-close').click();
            event.preventDefault();
         }
      })
      .on( "keydown", "#js-modal", function( event ) {
         if ( event.keyCode == 27 ) { // esc
             $('#js-modal-close').click();
             event.preventDefault();
         }
         if ( event.keyCode == 9 ) { // tab or maj+tab

            if ( !event.shiftKey && $( document.activeElement ).is( $('#js-modal-tabindex') ) ){
                $('#js-modal-close').focus(); 
                event.preventDefault();
               }
            if ( event.shiftKey &&  $( document.activeElement ).is( $('#js-modal-close') ) ){
                $('#js-modal-tabindex').focus(); 
                event.preventDefault();
               }
               
           
            }
         
      })
      .on( 'focus', '#js-modal-tabindex', function( event ) {
         $('#js-modal-close').focus(); 
      });
   
   
   }
 
  
});
