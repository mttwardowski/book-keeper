$(function() {

    // Make Bet Modal Components
    let betAmount   = $('#bet_amount_input');
    let betPick     = $('#bet_pick_input');
    let betSubmit   = $('#bet_submit');

    // Initialization Functions
    init();
    loadGameNews();

    /* ---- START OnClick SCRIPTS ---- */

    betSubmit.on('click', function() {

        let data = {
            userID: $(this).data('id'),
            pickValue: betPick.val(),
            amount: betAmount.val(),
        };

        $.ajax({
            type: 'POST',
            url: '/api/bet/new',
            data: data,
            error: function(e) {
                console.log(e);
            },
            success: function(response) {
                console.log(response);
                window.location.reload();
            }
        });


    });

    function init() {

        $('#page-link-find-games').addClass('selected');
    }

    function loadGameNews() {
        let data = {};
        $.ajax({
            type: 'GET',
            url: 'https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=9bc108a1ed5d4bc1b06f57c4bfef168d\n',
            data: data,
            error: function(e) {
                console.log(e);
            },
            success: function(response) {
                console.log(response);


                let html = "";

                let numArticles = 0;
                $.each(response.articles, function( index, value ) {
                    console.log(value);

                    if (numArticles < 3) {
                        html = "<div class=\"post-box\">\n" +
                            "                        <div class=\"post-media\" style=\"background-image: url(" + value.urlToImage + ")\"></div>\n" +
                            "                        <div class=\"post-content\">\n" +
                            "                            <h6 class=\"post-title\">\n" +
                            value.title +
                            "                            </h6>\n" +
                            "                            <div class=\"post-text\">\n" +
                            value.description +
                            "                            </div>\n" +
                            "                            <div class=\"post-foot\">\n" +
                            "                                <div class=\"post-tags\">\n" +
                            "                                    <div class=\"badge badge-primary\">\n" +
                            "                                        ESPN\n" +
                            "                                    </div>\n" +
                            "                                    <div class=\"badge badge-primary\">\n" +
                            "                                        Sports\n" +
                            "                                    </div>\n" +
                            "                                </div>\n" +
                            "                                <a class=\"post-link\" href=\"" + value.url + "\" target='_blank'><span>Read Full Story</span><i class=\"os-icon os-icon-arrow-right7\"></i></a>\n" +
                            "                            </div>\n" +
                            "                        </div>\n" +
                            "                    </div>";

                        $('#recent-news-container').append(html);

                        numArticles++;
                    }



                });

            }
        });
    }

});