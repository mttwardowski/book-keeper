$(function() {


    let gamesNFL    = $('#find_games_nfl');

    init();





    function init() {

        $('#page-link-find-games').addClass('selected');

        let data = {};
        $.ajax({
            type: 'GET',
            url: 'https://api.the-odds-api.com/v3/odds/?apiKey=8df2d0eaf77440d3f9f8ff28e6b35208&sport=americanfootball_nfl&region=us',
            data: data,
            error: function(e) {
                console.log(e);
            },
            success: function(response) {
                console.log(response);


                let html = "";

                let numGames = 0;
                let data = [];
                $.each(response.data, function( index, value ) {
                    console.log(value);

                    data = {
                        teams: value.teams,
                        odds: value.sites[0].odds.h2h
                    };
                    console.log(data);

                    html = "<div class=\"col-12 col-md-4 col-lg-3\">\n" +
                        "            <div class=\"element-wrapper game-card\">\n" +
                        "                <div class=\"element-box\">\n" +
                        "                    <span class=\"badge badge-primary float-right\">\n" +
                        "                            <span>NFL</span>\n" +
                        "                        </span>\n" +
                        "                    <div class=\"game-card-title\">\n" +
                        "                        <h4>"+ value.teams[0] +" <span class='text-primary'>(" + data.odds[0] + ")</span></h4>\n" +
                        "                        <h4>"+ value.teams[1] +" <span class='text-primary'>(" + data.odds[1] + ")</span></h4>\n" +
                        "                    </div>\n" +
                        "                </div>\n" +
                        "            </div>\n" +
                        "        </div>";

                    gamesNFL.append(html);




                });

            }
        });
    }


});