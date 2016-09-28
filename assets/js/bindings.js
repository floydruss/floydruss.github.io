(function($) {

  //////////////////////////////////////////////////////////////////////

  			//Bind modal functionality.
  			var $modal = $('#modal');

  			//Brings up modal and loads video
  			$('.video-thumbnail').on('click', function() {
  				var videoUrl = $(event.currentTarget).data('url');

  				$('#modal__video-container-inner').append(
  					'<iframe id="vimeo-iframe" class="vimeo-iframe" src="' + videoUrl + '&autoplay=true" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'
  				)

  				$modal.removeClass('hide');
  				$modal.addClass('show');
  			});

  			//Removes video iframe and modal
  			$('#modal__overlay').on('click', function() {
  				$modal.removeClass('show');
  				$modal.addClass('hide');
  				// $vimeoIframe.attr('src', '');
  				$('#vimeo-iframe').remove();
  			});

  //////////////////////////////////////////////////////////////////////

  			// Bind filters.
  			$('.filter-button--commercials').on('click', function() {
  				$('.videos').removeClass('music-videos')
  				$('.videos').removeClass('narratives')

  				$('.videos').hasClass('commercials')
  					? $('.videos').removeClass('commercials')
  					: $('.videos').addClass('commercials')
  			});

  			$('.filter-button--music-videos').on('click', function() {
  				$('.videos').removeClass('commercials')
  				$('.videos').removeClass('narratives')

  				$('.videos').hasClass('music-videos')
  					? $('.videos').removeClass('music-videos')
  					: $('.videos').addClass('music-videos')
  			});

  			$('.filter-button--narratives').on('click', function() {
  				$('.videos').removeClass('music-videos')
  				$('.videos').removeClass('commercials')

  				$('.videos').hasClass('narratives')
  					? $('.videos').removeClass('narratives')
  					: $('.videos').addClass('narratives')
  			});

  //////////////////////////////////////////////////////////////////////

})(jQuery);
