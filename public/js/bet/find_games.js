$(function() {


    let gamesNFL    = $('#find_games_nfl');

    let gameCardsContainer = $('#game_cards_container');

    let selectSportTab = $('.find-games-sport-tab');

    init();
    // getSportsData();
    // getGamesBySportID(2);



    selectSportTab.on('click', function() {
        loadGameCardsBySportID($(this).data('id'));
    });

    function loadGameCardsBySportID(sportID) {
        let data = {
            sportID: sportID
        };
        $.ajax({
            type: 'POST',
            url: '/api/games/get/html',
            data: data,
            error: function(e) {
                console.log(e);
            },
            success: function(response) {
                console.log(response);
                let numGames = 0;
                gameCardsContainer.empty();
                gameCardsContainer.append(response.html);
            }
        });

    }


    function getSportsData() {
        let settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://therundown-therundown-v1.p.rapidapi.com/sports",
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "therundown-therundown-v1.p.rapidapi.com",
                "x-rapidapi-key": "231f91c2f7msh01febf018c19e3ap11db12jsn84cad05a5b26"
            }
        };

        $.ajax(settings).done(function (response) {
            console.log(response);
        });
    }

    function getGamesBySportID(sportID) {
        let settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://therundown-therundown-v1.p.rapidapi.com/sports/2/events?include=all_periods&include=scores&offset=0",
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "therundown-therundown-v1.p.rapidapi.com",
                "x-rapidapi-key": "231f91c2f7msh01febf018c19e3ap11db12jsn84cad05a5b26"
            }
        };

        $.ajax(settings).done(function (response) {
            console.log(response);


            let postData = [];
            $.each(response.events, function( index, value ) {
                console.log('INDEX', index);

                let data = {
                    title: value.teams[0].name + " vs. " + value.teams[1].name,
                    eventID: value.event_id,
                    sportID: value.sport_id,
                    startDate: value.event_date,
                    teams: value.teams_normalized,
                    gameData: value.line_periods["1"].period_full_game,

                };
                console.log(data);
                console.log(data.teams);
                console.log(value.line_periods["1"].period_full_game);

                postData.push(data);

                $.ajax({
                    type: 'POST',
                    url: '/api/data/games/update',
                    data: data,
                    error: function(e) {
                        console.log(e);
                    },
                    success: function(response) {
                        console.log(response);
                    }
                });


            });
            console.log(postData);


        });
    }

    function init() {
        $('#page-link-find-games').addClass('selected');
        $('#tab_sport_1').addClass('active');
    }


});