$(function() {


    let gamesNFL    = $('#find_games_nfl');

    init();
    // getSportsData();
    // getGamesBySportID(4);
    // sendStaticGameData();


    function sendStaticGameData() {
        let data = {
            games: [
                {
                    "event_id": "07ea277f7834a64e2e6f451223e24c16",
                    "sport_id": 1,
                    "event_date": "2020-01-02T20:00:00Z",
                    "rotation_number_away": 271,
                    "rotation_number_home": 272,
                    "score": {
                        "event_id": "07ea277f7834a64e2e6f451223e24c16",
                        "event_status": "STATUS_SCHEDULED",
                        "score_away": 0,
                        "score_home": 0,
                        "winner_away": 0,
                        "winner_home": 0,
                        "score_away_by_period": null,
                        "score_home_by_period": null,
                        "venue_name": "Legion Field (AL)",
                        "venue_location": "Birmingham, AL",
                        "game_clock": 0,
                        "display_clock": "0.00",
                        "game_period": 0,
                        "broadcast": "ESPN",
                        "event_status_detail": "1/2 - 3:00 PM EST"
                    },
                    "teams": [
                        {
                            "team_id": 3571,
                            "team_normalized_id": 134,
                            "is_away": true,
                            "is_home": false,
                            "name": "Boston College"
                        },
                        {
                            "team_id": 5043,
                            "team_normalized_id": 140,
                            "is_away": false,
                            "is_home": true,
                            "name": "Cincinnati U"
                        }
                    ],
                    "teams_normalized": [
                        {
                            "team_id": 134,
                            "name": "Boston College",
                            "mascot": "Eagles",
                            "abbreviation": "BC",
                            "is_away": true,
                            "is_home": false,
                            "ranking": "",
                            "record": "6-6"
                        },
                        {
                            "team_id": 140,
                            "name": "Cincinnati",
                            "mascot": "Bearcats",
                            "abbreviation": "CIN",
                            "is_away": false,
                            "is_home": true,
                            "ranking": "21",
                            "record": "10-3"
                        }
                    ],
                    "line_periods": {
                        "1": {
                            "period_full_game": {
                                "line_id": 8231599,
                                "moneyline": {
                                    "line_id": 8231599,
                                    "moneyline_away": 235,
                                    "moneyline_away_delta": 0,
                                    "moneyline_home": -255,
                                    "moneyline_home_delta": 0,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0,
                                    "date_updated": "2019-12-28T14:06:03.448899Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231599,
                                    "point_spread_away": 7,
                                    "point_spread_away_delta": 0,
                                    "point_spread_home": -7,
                                    "point_spread_home_delta": 0,
                                    "point_spread_away_money": 100,
                                    "point_spread_away_money_delta": -5,
                                    "point_spread_home_money": -110,
                                    "point_spread_home_money_delta": 5,
                                    "date_updated": "2019-12-28T14:06:06.888836Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231599,
                                    "total_over": 56,
                                    "total_over_delta": 0.5,
                                    "total_under": 56,
                                    "total_under_delta": 0.5,
                                    "total_over_money": -105,
                                    "total_over_money_delta": 3,
                                    "total_under_money": -105,
                                    "total_under_money_delta": -3,
                                    "date_updated": "2019-12-27T04:28:32.993069Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 1,
                                    "affiliate_name": "5Dimes",
                                    "affiliate_url": "https://www.5dimes.eu/"
                                }
                            },
                            "period_first_half": {
                                "line_id": 8231599,
                                "moneyline": {
                                    "line_id": 8231599,
                                    "moneyline_away": 190,
                                    "moneyline_away_delta": 0,
                                    "moneyline_home": -230,
                                    "moneyline_home_delta": 0,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0,
                                    "date_updated": "2019-12-23T16:20:30.372236Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231599,
                                    "point_spread_away": 4,
                                    "point_spread_away_delta": 0,
                                    "point_spread_home": -4,
                                    "point_spread_home_delta": 0,
                                    "point_spread_away_money": -105,
                                    "point_spread_away_money_delta": 0,
                                    "point_spread_home_money": -115,
                                    "point_spread_home_money_delta": 0,
                                    "date_updated": "2019-12-23T16:20:27.942398Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231599,
                                    "total_over": 27.5,
                                    "total_over_delta": 0,
                                    "total_under": 27.5,
                                    "total_under_delta": 0,
                                    "total_over_money": -115,
                                    "total_over_money_delta": 5,
                                    "total_under_money": -105,
                                    "total_under_money_delta": -205,
                                    "date_updated": "2019-12-28T16:16:09.812879Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 1,
                                    "affiliate_name": "5Dimes",
                                    "affiliate_url": "https://www.5dimes.eu/"
                                }
                            },
                            "period_second_half": {
                                "line_id": 8231599,
                                "moneyline": {
                                    "line_id": 8231599,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231599,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231599,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 1,
                                    "affiliate_name": "5Dimes",
                                    "affiliate_url": "https://www.5dimes.eu/"
                                }
                            },
                            "period_first_period": {
                                "line_id": 8231599,
                                "moneyline": {
                                    "line_id": 8231599,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231599,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231599,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 1,
                                    "affiliate_name": "5Dimes",
                                    "affiliate_url": "https://www.5dimes.eu/"
                                }
                            },
                            "period_second_period": {
                                "line_id": 8231599,
                                "moneyline": {
                                    "line_id": 8231599,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231599,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231599,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 1,
                                    "affiliate_name": "5Dimes",
                                    "affiliate_url": "https://www.5dimes.eu/"
                                }
                            },
                            "period_third_period": {
                                "line_id": 8231599,
                                "moneyline": {
                                    "line_id": 8231599,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231599,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231599,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 1,
                                    "affiliate_name": "5Dimes",
                                    "affiliate_url": "https://www.5dimes.eu/"
                                }
                            },
                            "period_fourth_period": {
                                "line_id": 8231599,
                                "moneyline": {
                                    "line_id": 8231599,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231599,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231599,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 1,
                                    "affiliate_name": "5Dimes",
                                    "affiliate_url": "https://www.5dimes.eu/"
                                }
                            }
                        },
                        "2": {
                            "period_full_game": {
                                "line_id": 8231304,
                                "moneyline": {
                                    "line_id": 8231304,
                                    "moneyline_away": 220,
                                    "moneyline_away_delta": 0,
                                    "moneyline_home": -270,
                                    "moneyline_home_delta": 0,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0,
                                    "date_updated": "2019-12-10T08:51:04.282579Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231304,
                                    "point_spread_away": 7,
                                    "point_spread_away_delta": 0,
                                    "point_spread_home": -7,
                                    "point_spread_home_delta": 0,
                                    "point_spread_away_money": -105,
                                    "point_spread_away_money_delta": 5,
                                    "point_spread_home_money": -115,
                                    "point_spread_home_money_delta": -5,
                                    "date_updated": "2019-12-19T23:21:34.749597Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231304,
                                    "total_over": 55.5,
                                    "total_over_delta": -0.5,
                                    "total_under": 55.5,
                                    "total_under_delta": -0.5,
                                    "total_over_money": -110,
                                    "total_over_money_delta": -5,
                                    "total_under_money": -110,
                                    "total_under_money_delta": 5,
                                    "date_updated": "2019-12-29T17:11:13.277026Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 2,
                                    "affiliate_name": "Bovada",
                                    "affiliate_url": "https://www.bovada.lv/"
                                }
                            },
                            "period_first_half": {
                                "line_id": 8231304,
                                "moneyline": {
                                    "line_id": 8231304,
                                    "moneyline_away": 175,
                                    "moneyline_away_delta": 0,
                                    "moneyline_home": -240,
                                    "moneyline_home_delta": 0,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0,
                                    "date_updated": "2019-12-28T07:11:39.860304Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231304,
                                    "point_spread_away": 4,
                                    "point_spread_away_delta": 0,
                                    "point_spread_home": -4,
                                    "point_spread_home_delta": 0,
                                    "point_spread_away_money": -105,
                                    "point_spread_away_money_delta": 0,
                                    "point_spread_home_money": -115,
                                    "point_spread_home_money_delta": 0,
                                    "date_updated": "2019-12-23T15:38:52.930386Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231304,
                                    "total_over": 27.5,
                                    "total_over_delta": 0,
                                    "total_under": 27.5,
                                    "total_under_delta": 0,
                                    "total_over_money": -115,
                                    "total_over_money_delta": 5,
                                    "total_under_money": -105,
                                    "total_under_money_delta": -205,
                                    "date_updated": "2019-12-28T07:06:15.934911Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 2,
                                    "affiliate_name": "Bovada",
                                    "affiliate_url": "https://www.bovada.lv/"
                                }
                            },
                            "period_second_half": {
                                "line_id": 8231304,
                                "moneyline": {
                                    "line_id": 8231304,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231304,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231304,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 2,
                                    "affiliate_name": "Bovada",
                                    "affiliate_url": "https://www.bovada.lv/"
                                }
                            },
                            "period_first_period": {
                                "line_id": 8231304,
                                "moneyline": {
                                    "line_id": 8231304,
                                    "moneyline_away": 155,
                                    "moneyline_away_delta": 0,
                                    "moneyline_home": -210,
                                    "moneyline_home_delta": 0,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0,
                                    "date_updated": "2019-12-25T13:23:39.373467Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231304,
                                    "point_spread_away": 3,
                                    "point_spread_away_delta": 0,
                                    "point_spread_home": -3,
                                    "point_spread_home_delta": 0,
                                    "point_spread_away_money": -115,
                                    "point_spread_away_money_delta": -5,
                                    "point_spread_home_money": -115,
                                    "point_spread_home_money_delta": 5,
                                    "date_updated": "2019-12-25T13:23:39.382873Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231304,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 2,
                                    "affiliate_name": "Bovada",
                                    "affiliate_url": "https://www.bovada.lv/"
                                }
                            },
                            "period_second_period": {
                                "line_id": 8231304,
                                "moneyline": {
                                    "line_id": 8231304,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231304,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231304,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 2,
                                    "affiliate_name": "Bovada",
                                    "affiliate_url": "https://www.bovada.lv/"
                                }
                            },
                            "period_third_period": {
                                "line_id": 8231304,
                                "moneyline": {
                                    "line_id": 8231304,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231304,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231304,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 2,
                                    "affiliate_name": "Bovada",
                                    "affiliate_url": "https://www.bovada.lv/"
                                }
                            },
                            "period_fourth_period": {
                                "line_id": 8231304,
                                "moneyline": {
                                    "line_id": 8231304,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231304,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231304,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 2,
                                    "affiliate_name": "Bovada",
                                    "affiliate_url": "https://www.bovada.lv/"
                                }
                            }
                        },
                        "3": {
                            "period_full_game": {
                                "line_id": 8231195,
                                "moneyline": {
                                    "line_id": 8231195,
                                    "moneyline_away": 223,
                                    "moneyline_away_delta": 0,
                                    "moneyline_home": -271,
                                    "moneyline_home_delta": 0,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0,
                                    "date_updated": "2019-12-29T07:16:03.866431Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231195,
                                    "point_spread_away": 7,
                                    "point_spread_away_delta": 0,
                                    "point_spread_home": -7,
                                    "point_spread_home_delta": 0,
                                    "point_spread_away_money": 100,
                                    "point_spread_away_money_delta": 200,
                                    "point_spread_home_money": -112,
                                    "point_spread_home_money_delta": 0,
                                    "date_updated": "2019-12-29T07:16:03.880488Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231195,
                                    "total_over": 55.5,
                                    "total_over_delta": 0,
                                    "total_under": 55.5,
                                    "total_under_delta": 0,
                                    "total_over_money": -111,
                                    "total_over_money_delta": 2,
                                    "total_under_money": -103,
                                    "total_under_money_delta": -1,
                                    "date_updated": "2019-12-29T17:02:18.203705Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 3,
                                    "affiliate_name": "Pinnacle",
                                    "affiliate_url": "https://www.pinnacle.com/en/rtn"
                                }
                            },
                            "period_first_half": {
                                "line_id": 8231195,
                                "moneyline": {
                                    "line_id": 8231195,
                                    "moneyline_away": 188,
                                    "moneyline_away_delta": 0,
                                    "moneyline_home": -229,
                                    "moneyline_home_delta": 0,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0,
                                    "date_updated": "2019-12-29T07:16:03.895559Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231195,
                                    "point_spread_away": 4,
                                    "point_spread_away_delta": 0,
                                    "point_spread_home": -4,
                                    "point_spread_home_delta": 0,
                                    "point_spread_away_money": -106,
                                    "point_spread_away_money_delta": 1,
                                    "point_spread_home_money": -110,
                                    "point_spread_home_money_delta": -1,
                                    "date_updated": "2019-12-29T07:16:03.910895Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231195,
                                    "total_over": 27.5,
                                    "total_over_delta": 0,
                                    "total_under": 27.5,
                                    "total_under_delta": 0,
                                    "total_over_money": -111,
                                    "total_over_money_delta": 1,
                                    "total_under_money": -109,
                                    "total_under_money_delta": -1,
                                    "date_updated": "2019-12-29T17:02:18.226803Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 3,
                                    "affiliate_name": "Pinnacle",
                                    "affiliate_url": "https://www.pinnacle.com/en/rtn"
                                }
                            },
                            "period_second_half": {
                                "line_id": 8231195,
                                "moneyline": {
                                    "line_id": 8231195,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231195,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231195,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 3,
                                    "affiliate_name": "Pinnacle",
                                    "affiliate_url": "https://www.pinnacle.com/en/rtn"
                                }
                            },
                            "period_first_period": {
                                "line_id": 8231195,
                                "moneyline": {
                                    "line_id": 8231195,
                                    "moneyline_away": 166,
                                    "moneyline_away_delta": 0,
                                    "moneyline_home": -205,
                                    "moneyline_home_delta": 0,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0,
                                    "date_updated": "2019-12-29T07:16:03.926207Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231195,
                                    "point_spread_away": 3,
                                    "point_spread_away_delta": 0,
                                    "point_spread_home": -3,
                                    "point_spread_home_delta": 0,
                                    "point_spread_away_money": -105,
                                    "point_spread_away_money_delta": -1,
                                    "point_spread_home_money": -114,
                                    "point_spread_home_money_delta": 0,
                                    "date_updated": "2019-12-29T17:02:18.244653Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231195,
                                    "total_over": 13,
                                    "total_over_delta": 0,
                                    "total_under": 13,
                                    "total_under_delta": 0,
                                    "total_over_money": -108,
                                    "total_over_money_delta": 1,
                                    "total_under_money": -112,
                                    "total_under_money_delta": -1,
                                    "date_updated": "2019-12-29T17:02:18.263592Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 3,
                                    "affiliate_name": "Pinnacle",
                                    "affiliate_url": "https://www.pinnacle.com/en/rtn"
                                }
                            },
                            "period_second_period": {
                                "line_id": 8231195,
                                "moneyline": {
                                    "line_id": 8231195,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231195,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231195,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 3,
                                    "affiliate_name": "Pinnacle",
                                    "affiliate_url": "https://www.pinnacle.com/en/rtn"
                                }
                            },
                            "period_third_period": {
                                "line_id": 8231195,
                                "moneyline": {
                                    "line_id": 8231195,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231195,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231195,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 3,
                                    "affiliate_name": "Pinnacle",
                                    "affiliate_url": "https://www.pinnacle.com/en/rtn"
                                }
                            },
                            "period_fourth_period": {
                                "line_id": 8231195,
                                "moneyline": {
                                    "line_id": 8231195,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231195,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231195,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 3,
                                    "affiliate_name": "Pinnacle",
                                    "affiliate_url": "https://www.pinnacle.com/en/rtn"
                                }
                            }
                        },
                        "4": {
                            "period_full_game": {
                                "line_id": 8231823,
                                "moneyline": {
                                    "line_id": 8231823,
                                    "moneyline_away": 220,
                                    "moneyline_away_delta": 0,
                                    "moneyline_home": -260,
                                    "moneyline_home_delta": 0,
                                    "moneyline_draw": -260,
                                    "moneyline_draw_delta": 0,
                                    "date_updated": "2019-12-19T23:07:10.353589Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231823,
                                    "point_spread_away": 7,
                                    "point_spread_away_delta": 0,
                                    "point_spread_home": -7,
                                    "point_spread_home_delta": 0,
                                    "point_spread_away_money": -104,
                                    "point_spread_away_money_delta": 4,
                                    "point_spread_home_money": -116,
                                    "point_spread_home_money_delta": -4,
                                    "date_updated": "2019-12-19T23:07:10.383839Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231823,
                                    "total_over": 55.5,
                                    "total_over_delta": 0,
                                    "total_under": 55.5,
                                    "total_under_delta": 0,
                                    "total_over_money": -110,
                                    "total_over_money_delta": 10,
                                    "total_under_money": -110,
                                    "total_under_money_delta": -210,
                                    "date_updated": "2019-12-29T17:00:46.465736Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 4,
                                    "affiliate_name": "SportsBetting",
                                    "affiliate_url": "https://www.sportsbetting.ag/"
                                }
                            },
                            "period_first_half": {
                                "line_id": 8231823,
                                "moneyline": {
                                    "line_id": 8231823,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231823,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231823,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 4,
                                    "affiliate_name": "SportsBetting",
                                    "affiliate_url": "https://www.sportsbetting.ag/"
                                }
                            },
                            "period_second_half": {
                                "line_id": 8231823,
                                "moneyline": {
                                    "line_id": 8231823,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231823,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231823,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 4,
                                    "affiliate_name": "SportsBetting",
                                    "affiliate_url": "https://www.sportsbetting.ag/"
                                }
                            },
                            "period_first_period": {
                                "line_id": 8231823,
                                "moneyline": {
                                    "line_id": 8231823,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231823,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231823,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 4,
                                    "affiliate_name": "SportsBetting",
                                    "affiliate_url": "https://www.sportsbetting.ag/"
                                }
                            },
                            "period_second_period": {
                                "line_id": 8231823,
                                "moneyline": {
                                    "line_id": 8231823,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231823,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231823,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 4,
                                    "affiliate_name": "SportsBetting",
                                    "affiliate_url": "https://www.sportsbetting.ag/"
                                }
                            },
                            "period_third_period": {
                                "line_id": 8231823,
                                "moneyline": {
                                    "line_id": 8231823,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231823,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231823,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 4,
                                    "affiliate_name": "SportsBetting",
                                    "affiliate_url": "https://www.sportsbetting.ag/"
                                }
                            },
                            "period_fourth_period": {
                                "line_id": 8231823,
                                "moneyline": {
                                    "line_id": 8231823,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231823,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231823,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 4,
                                    "affiliate_name": "SportsBetting",
                                    "affiliate_url": "https://www.sportsbetting.ag/"
                                }
                            }
                        },
                        "6": {
                            "period_full_game": {
                                "line_id": 8231825,
                                "moneyline": {
                                    "line_id": 8231825,
                                    "moneyline_away": 220,
                                    "moneyline_away_delta": 0,
                                    "moneyline_home": -260,
                                    "moneyline_home_delta": 0,
                                    "moneyline_draw": -260,
                                    "moneyline_draw_delta": 0,
                                    "date_updated": "2019-12-19T23:06:50.157244Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231825,
                                    "point_spread_away": 7,
                                    "point_spread_away_delta": 0,
                                    "point_spread_home": -7,
                                    "point_spread_home_delta": 0,
                                    "point_spread_away_money": -104,
                                    "point_spread_away_money_delta": 4,
                                    "point_spread_home_money": -116,
                                    "point_spread_home_money_delta": -4,
                                    "date_updated": "2019-12-19T23:06:50.172818Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231825,
                                    "total_over": 55.5,
                                    "total_over_delta": 0,
                                    "total_under": 55.5,
                                    "total_under_delta": 0,
                                    "total_over_money": -110,
                                    "total_over_money_delta": 10,
                                    "total_under_money": -110,
                                    "total_under_money_delta": -210,
                                    "date_updated": "2019-12-29T17:00:23.684058Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 6,
                                    "affiliate_name": "BetOnline",
                                    "affiliate_url": "https://betonline.ag/"
                                }
                            },
                            "period_first_half": {
                                "line_id": 8231825,
                                "moneyline": {
                                    "line_id": 8231825,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231825,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231825,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 6,
                                    "affiliate_name": "BetOnline",
                                    "affiliate_url": "https://betonline.ag/"
                                }
                            },
                            "period_second_half": {
                                "line_id": 8231825,
                                "moneyline": {
                                    "line_id": 8231825,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231825,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231825,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 6,
                                    "affiliate_name": "BetOnline",
                                    "affiliate_url": "https://betonline.ag/"
                                }
                            },
                            "period_first_period": {
                                "line_id": 8231825,
                                "moneyline": {
                                    "line_id": 8231825,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231825,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231825,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 6,
                                    "affiliate_name": "BetOnline",
                                    "affiliate_url": "https://betonline.ag/"
                                }
                            },
                            "period_second_period": {
                                "line_id": 8231825,
                                "moneyline": {
                                    "line_id": 8231825,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231825,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231825,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 6,
                                    "affiliate_name": "BetOnline",
                                    "affiliate_url": "https://betonline.ag/"
                                }
                            },
                            "period_third_period": {
                                "line_id": 8231825,
                                "moneyline": {
                                    "line_id": 8231825,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231825,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231825,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 6,
                                    "affiliate_name": "BetOnline",
                                    "affiliate_url": "https://betonline.ag/"
                                }
                            },
                            "period_fourth_period": {
                                "line_id": 8231825,
                                "moneyline": {
                                    "line_id": 8231825,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231825,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231825,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 6,
                                    "affiliate_name": "BetOnline",
                                    "affiliate_url": "https://betonline.ag/"
                                }
                            }
                        },
                        "7": {
                            "period_full_game": {
                                "line_id": 8242908,
                                "moneyline": {
                                    "line_id": 8242908,
                                    "moneyline_away": 222,
                                    "moneyline_away_delta": 0,
                                    "moneyline_home": -270,
                                    "moneyline_home_delta": 0,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0,
                                    "date_updated": "2019-12-27T06:00:02.16211Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8242908,
                                    "point_spread_away": 7,
                                    "point_spread_away_delta": 0,
                                    "point_spread_home": -7,
                                    "point_spread_home_delta": 0,
                                    "point_spread_away_money": -104,
                                    "point_spread_away_money_delta": 0,
                                    "point_spread_home_money": -116,
                                    "point_spread_home_money_delta": 0,
                                    "date_updated": "2019-12-27T06:00:02.177735Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8242908,
                                    "total_over": 56,
                                    "total_over_delta": 0,
                                    "total_under": 56,
                                    "total_under_delta": 0,
                                    "total_over_money": -102,
                                    "total_over_money_delta": 8,
                                    "total_under_money": -119,
                                    "total_under_money_delta": -9,
                                    "date_updated": "2019-12-29T17:12:19.795673Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 7,
                                    "affiliate_name": "Bookmaker",
                                    "affiliate_url": "https://www.bookmaker.eu/"
                                }
                            },
                            "period_first_half": {
                                "line_id": 8242908,
                                "moneyline": {
                                    "line_id": 8242908,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8242908,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8242908,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 7,
                                    "affiliate_name": "Bookmaker",
                                    "affiliate_url": "https://www.bookmaker.eu/"
                                }
                            },
                            "period_second_half": {
                                "line_id": 8242908,
                                "moneyline": {
                                    "line_id": 8242908,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8242908,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8242908,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 7,
                                    "affiliate_name": "Bookmaker",
                                    "affiliate_url": "https://www.bookmaker.eu/"
                                }
                            },
                            "period_first_period": {
                                "line_id": 8242908,
                                "moneyline": {
                                    "line_id": 8242908,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8242908,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8242908,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 7,
                                    "affiliate_name": "Bookmaker",
                                    "affiliate_url": "https://www.bookmaker.eu/"
                                }
                            },
                            "period_second_period": {
                                "line_id": 8242908,
                                "moneyline": {
                                    "line_id": 8242908,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8242908,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8242908,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 7,
                                    "affiliate_name": "Bookmaker",
                                    "affiliate_url": "https://www.bookmaker.eu/"
                                }
                            },
                            "period_third_period": {
                                "line_id": 8242908,
                                "moneyline": {
                                    "line_id": 8242908,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8242908,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8242908,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 7,
                                    "affiliate_name": "Bookmaker",
                                    "affiliate_url": "https://www.bookmaker.eu/"
                                }
                            },
                            "period_fourth_period": {
                                "line_id": 8242908,
                                "moneyline": {
                                    "line_id": 8242908,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8242908,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8242908,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 7,
                                    "affiliate_name": "Bookmaker",
                                    "affiliate_url": "https://www.bookmaker.eu/"
                                }
                            }
                        },
                        "9": {
                            "period_full_game": {
                                "line_id": 8242910,
                                "moneyline": {
                                    "line_id": 8242910,
                                    "moneyline_away": 222,
                                    "moneyline_away_delta": 0,
                                    "moneyline_home": -270,
                                    "moneyline_home_delta": 0,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0,
                                    "date_updated": "2019-12-27T06:00:02.646996Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8242910,
                                    "point_spread_away": 7,
                                    "point_spread_away_delta": 0,
                                    "point_spread_home": -7,
                                    "point_spread_home_delta": 0,
                                    "point_spread_away_money": -104,
                                    "point_spread_away_money_delta": 0,
                                    "point_spread_home_money": -116,
                                    "point_spread_home_money_delta": 0,
                                    "date_updated": "2019-12-27T06:00:02.662723Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8242910,
                                    "total_over": 56,
                                    "total_over_delta": 0,
                                    "total_under": 56,
                                    "total_under_delta": 0,
                                    "total_over_money": -102,
                                    "total_over_money_delta": 8,
                                    "total_under_money": -119,
                                    "total_under_money_delta": -9,
                                    "date_updated": "2019-12-29T17:07:03.946002Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 9,
                                    "affiliate_name": "betcris",
                                    "affiliate_url": "https://www.betcris.com/en/sportsbook"
                                }
                            },
                            "period_first_half": {
                                "line_id": 8242910,
                                "moneyline": {
                                    "line_id": 8242910,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8242910,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8242910,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 9,
                                    "affiliate_name": "betcris",
                                    "affiliate_url": "https://www.betcris.com/en/sportsbook"
                                }
                            },
                            "period_second_half": {
                                "line_id": 8242910,
                                "moneyline": {
                                    "line_id": 8242910,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8242910,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8242910,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 9,
                                    "affiliate_name": "betcris",
                                    "affiliate_url": "https://www.betcris.com/en/sportsbook"
                                }
                            },
                            "period_first_period": {
                                "line_id": 8242910,
                                "moneyline": {
                                    "line_id": 8242910,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8242910,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8242910,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 9,
                                    "affiliate_name": "betcris",
                                    "affiliate_url": "https://www.betcris.com/en/sportsbook"
                                }
                            },
                            "period_second_period": {
                                "line_id": 8242910,
                                "moneyline": {
                                    "line_id": 8242910,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8242910,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8242910,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 9,
                                    "affiliate_name": "betcris",
                                    "affiliate_url": "https://www.betcris.com/en/sportsbook"
                                }
                            },
                            "period_third_period": {
                                "line_id": 8242910,
                                "moneyline": {
                                    "line_id": 8242910,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8242910,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8242910,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 9,
                                    "affiliate_name": "betcris",
                                    "affiliate_url": "https://www.betcris.com/en/sportsbook"
                                }
                            },
                            "period_fourth_period": {
                                "line_id": 8242910,
                                "moneyline": {
                                    "line_id": 8242910,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8242910,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8242910,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 9,
                                    "affiliate_name": "betcris",
                                    "affiliate_url": "https://www.betcris.com/en/sportsbook"
                                }
                            }
                        },
                        "10": {
                            "period_full_game": {
                                "line_id": 8242915,
                                "moneyline": {
                                    "line_id": 8242915,
                                    "moneyline_away": 222,
                                    "moneyline_away_delta": 0,
                                    "moneyline_home": -270,
                                    "moneyline_home_delta": 0,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0,
                                    "date_updated": "2019-12-27T06:00:03.487829Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8242915,
                                    "point_spread_away": 7,
                                    "point_spread_away_delta": 0,
                                    "point_spread_home": -7,
                                    "point_spread_home_delta": 0,
                                    "point_spread_away_money": -104,
                                    "point_spread_away_money_delta": 0,
                                    "point_spread_home_money": -116,
                                    "point_spread_home_money_delta": 0,
                                    "date_updated": "2019-12-27T06:00:03.502538Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8242915,
                                    "total_over": 56,
                                    "total_over_delta": 0,
                                    "total_under": 56,
                                    "total_under_delta": 0,
                                    "total_over_money": -102,
                                    "total_over_money_delta": 8,
                                    "total_under_money": -119,
                                    "total_under_money_delta": -9,
                                    "date_updated": "2019-12-29T17:06:51.003366Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 10,
                                    "affiliate_name": "JustBet",
                                    "affiliate_url": "https://www.justbet.co/sportsbook-betting"
                                }
                            },
                            "period_first_half": {
                                "line_id": 8242915,
                                "moneyline": {
                                    "line_id": 8242915,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8242915,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8242915,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 10,
                                    "affiliate_name": "JustBet",
                                    "affiliate_url": "https://www.justbet.co/sportsbook-betting"
                                }
                            },
                            "period_second_half": {
                                "line_id": 8242915,
                                "moneyline": {
                                    "line_id": 8242915,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8242915,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8242915,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 10,
                                    "affiliate_name": "JustBet",
                                    "affiliate_url": "https://www.justbet.co/sportsbook-betting"
                                }
                            },
                            "period_first_period": {
                                "line_id": 8242915,
                                "moneyline": {
                                    "line_id": 8242915,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8242915,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8242915,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 10,
                                    "affiliate_name": "JustBet",
                                    "affiliate_url": "https://www.justbet.co/sportsbook-betting"
                                }
                            },
                            "period_second_period": {
                                "line_id": 8242915,
                                "moneyline": {
                                    "line_id": 8242915,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8242915,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8242915,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 10,
                                    "affiliate_name": "JustBet",
                                    "affiliate_url": "https://www.justbet.co/sportsbook-betting"
                                }
                            },
                            "period_third_period": {
                                "line_id": 8242915,
                                "moneyline": {
                                    "line_id": 8242915,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8242915,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8242915,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 10,
                                    "affiliate_name": "JustBet",
                                    "affiliate_url": "https://www.justbet.co/sportsbook-betting"
                                }
                            },
                            "period_fourth_period": {
                                "line_id": 8242915,
                                "moneyline": {
                                    "line_id": 8242915,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8242915,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8242915,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 10,
                                    "affiliate_name": "JustBet",
                                    "affiliate_url": "https://www.justbet.co/sportsbook-betting"
                                }
                            }
                        },
                        "12": {
                            "period_full_game": {
                                "line_id": 8231300,
                                "moneyline": {
                                    "line_id": 8231300,
                                    "moneyline_away": 220,
                                    "moneyline_away_delta": 0,
                                    "moneyline_home": -270,
                                    "moneyline_home_delta": 0,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0,
                                    "date_updated": "2019-12-10T08:50:15.504955Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231300,
                                    "point_spread_away": 7,
                                    "point_spread_away_delta": 0,
                                    "point_spread_home": -7,
                                    "point_spread_home_delta": 0,
                                    "point_spread_away_money": -105,
                                    "point_spread_away_money_delta": 5,
                                    "point_spread_home_money": -115,
                                    "point_spread_home_money_delta": -5,
                                    "date_updated": "2019-12-19T23:22:47.921738Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231300,
                                    "total_over": 55.5,
                                    "total_over_delta": -0.5,
                                    "total_under": 55.5,
                                    "total_under_delta": -0.5,
                                    "total_over_money": -110,
                                    "total_over_money_delta": -5,
                                    "total_under_money": -110,
                                    "total_under_money_delta": 5,
                                    "date_updated": "2019-12-29T17:10:21.219365Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 12,
                                    "affiliate_name": "Bodog",
                                    "affiliate_url": "https://www.bodog.eu/"
                                }
                            },
                            "period_first_half": {
                                "line_id": 8231300,
                                "moneyline": {
                                    "line_id": 8231300,
                                    "moneyline_away": 175,
                                    "moneyline_away_delta": 0,
                                    "moneyline_home": -240,
                                    "moneyline_home_delta": 0,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0,
                                    "date_updated": "2019-12-28T07:12:41.093008Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231300,
                                    "point_spread_away": 4,
                                    "point_spread_away_delta": 0,
                                    "point_spread_home": -4,
                                    "point_spread_home_delta": 0,
                                    "point_spread_away_money": -105,
                                    "point_spread_away_money_delta": 0,
                                    "point_spread_home_money": -115,
                                    "point_spread_home_money_delta": 0,
                                    "date_updated": "2019-12-23T15:40:57.232584Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231300,
                                    "total_over": 27.5,
                                    "total_over_delta": 0,
                                    "total_under": 27.5,
                                    "total_under_delta": 0,
                                    "total_over_money": -115,
                                    "total_over_money_delta": 5,
                                    "total_under_money": -105,
                                    "total_under_money_delta": -205,
                                    "date_updated": "2019-12-28T07:05:24.451822Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 12,
                                    "affiliate_name": "Bodog",
                                    "affiliate_url": "https://www.bodog.eu/"
                                }
                            },
                            "period_second_half": {
                                "line_id": 8231300,
                                "moneyline": {
                                    "line_id": 8231300,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231300,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231300,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 12,
                                    "affiliate_name": "Bodog",
                                    "affiliate_url": "https://www.bodog.eu/"
                                }
                            },
                            "period_first_period": {
                                "line_id": 8231300,
                                "moneyline": {
                                    "line_id": 8231300,
                                    "moneyline_away": 155,
                                    "moneyline_away_delta": 0,
                                    "moneyline_home": -210,
                                    "moneyline_home_delta": 0,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0,
                                    "date_updated": "2019-12-25T13:22:48.229764Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231300,
                                    "point_spread_away": 3,
                                    "point_spread_away_delta": 0,
                                    "point_spread_home": -3,
                                    "point_spread_home_delta": 0,
                                    "point_spread_away_money": -115,
                                    "point_spread_away_money_delta": -5,
                                    "point_spread_home_money": -115,
                                    "point_spread_home_money_delta": 5,
                                    "date_updated": "2019-12-25T13:22:48.238859Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231300,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 12,
                                    "affiliate_name": "Bodog",
                                    "affiliate_url": "https://www.bodog.eu/"
                                }
                            },
                            "period_second_period": {
                                "line_id": 8231300,
                                "moneyline": {
                                    "line_id": 8231300,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231300,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231300,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 12,
                                    "affiliate_name": "Bodog",
                                    "affiliate_url": "https://www.bodog.eu/"
                                }
                            },
                            "period_third_period": {
                                "line_id": 8231300,
                                "moneyline": {
                                    "line_id": 8231300,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231300,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231300,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 12,
                                    "affiliate_name": "Bodog",
                                    "affiliate_url": "https://www.bodog.eu/"
                                }
                            },
                            "period_fourth_period": {
                                "line_id": 8231300,
                                "moneyline": {
                                    "line_id": 8231300,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231300,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231300,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 12,
                                    "affiliate_name": "Bodog",
                                    "affiliate_url": "https://www.bodog.eu/"
                                }
                            }
                        },
                        "14": {
                            "period_full_game": {
                                "line_id": 8231735,
                                "moneyline": {
                                    "line_id": 8231735,
                                    "moneyline_away": 235,
                                    "moneyline_away_delta": 0,
                                    "moneyline_home": -275,
                                    "moneyline_home_delta": 0,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0,
                                    "date_updated": "2019-12-25T04:26:29.279496Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231735,
                                    "point_spread_away": 7,
                                    "point_spread_away_delta": 0,
                                    "point_spread_home": -7,
                                    "point_spread_home_delta": 0,
                                    "point_spread_away_money": -105,
                                    "point_spread_away_money_delta": 5,
                                    "point_spread_home_money": -115,
                                    "point_spread_home_money_delta": -5,
                                    "date_updated": "2019-12-21T04:19:19.51973Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231735,
                                    "total_over": 56,
                                    "total_over_delta": 0.5,
                                    "total_under": 56,
                                    "total_under_delta": 0.5,
                                    "total_over_money": -110,
                                    "total_over_money_delta": 0,
                                    "total_under_money": -110,
                                    "total_under_money_delta": 0,
                                    "date_updated": "2019-12-27T04:32:56.443881Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 14,
                                    "affiliate_name": "Intertops",
                                    "affiliate_url": "https://sports.intertops.eu/"
                                }
                            },
                            "period_first_half": {
                                "line_id": 8231735,
                                "moneyline": {
                                    "line_id": 8231735,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231735,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231735,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 14,
                                    "affiliate_name": "Intertops",
                                    "affiliate_url": "https://sports.intertops.eu/"
                                }
                            },
                            "period_second_half": {
                                "line_id": 8231735,
                                "moneyline": {
                                    "line_id": 8231735,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231735,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231735,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 14,
                                    "affiliate_name": "Intertops",
                                    "affiliate_url": "https://sports.intertops.eu/"
                                }
                            },
                            "period_first_period": {
                                "line_id": 8231735,
                                "moneyline": {
                                    "line_id": 8231735,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231735,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231735,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 14,
                                    "affiliate_name": "Intertops",
                                    "affiliate_url": "https://sports.intertops.eu/"
                                }
                            },
                            "period_second_period": {
                                "line_id": 8231735,
                                "moneyline": {
                                    "line_id": 8231735,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231735,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231735,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 14,
                                    "affiliate_name": "Intertops",
                                    "affiliate_url": "https://sports.intertops.eu/"
                                }
                            },
                            "period_third_period": {
                                "line_id": 8231735,
                                "moneyline": {
                                    "line_id": 8231735,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231735,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231735,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 14,
                                    "affiliate_name": "Intertops",
                                    "affiliate_url": "https://sports.intertops.eu/"
                                }
                            },
                            "period_fourth_period": {
                                "line_id": 8231735,
                                "moneyline": {
                                    "line_id": 8231735,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231735,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231735,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 14,
                                    "affiliate_name": "Intertops",
                                    "affiliate_url": "https://sports.intertops.eu/"
                                }
                            }
                        },
                        "16": {
                            "period_full_game": {
                                "line_id": 8231482,
                                "moneyline": {
                                    "line_id": 8231482,
                                    "moneyline_away": 224,
                                    "moneyline_away_delta": 0,
                                    "moneyline_home": -268,
                                    "moneyline_home_delta": 0,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0,
                                    "date_updated": "2019-12-29T16:34:30.628988Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231482,
                                    "point_spread_away": 7,
                                    "point_spread_away_delta": 0,
                                    "point_spread_home": -7,
                                    "point_spread_home_delta": 0,
                                    "point_spread_away_money": 101,
                                    "point_spread_away_money_delta": 209,
                                    "point_spread_home_money": -111,
                                    "point_spread_home_money_delta": 8,
                                    "date_updated": "2019-12-29T16:34:30.654212Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231482,
                                    "total_over": 55.5,
                                    "total_over_delta": 0,
                                    "total_under": 55.5,
                                    "total_under_delta": 0,
                                    "total_over_money": -110,
                                    "total_over_money_delta": 2,
                                    "total_under_money": -102,
                                    "total_under_money_delta": 5,
                                    "date_updated": "2019-12-29T17:02:23.562445Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 16,
                                    "affiliate_name": "Matchbook",
                                    "affiliate_url": "https://www.matchbook.com/"
                                }
                            },
                            "period_first_half": {
                                "line_id": 8231482,
                                "moneyline": {
                                    "line_id": 8231482,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231482,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231482,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 16,
                                    "affiliate_name": "Matchbook",
                                    "affiliate_url": "https://www.matchbook.com/"
                                }
                            },
                            "period_second_half": {
                                "line_id": 8231482,
                                "moneyline": {
                                    "line_id": 8231482,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231482,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231482,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 16,
                                    "affiliate_name": "Matchbook",
                                    "affiliate_url": "https://www.matchbook.com/"
                                }
                            },
                            "period_first_period": {
                                "line_id": 8231482,
                                "moneyline": {
                                    "line_id": 8231482,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231482,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231482,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 16,
                                    "affiliate_name": "Matchbook",
                                    "affiliate_url": "https://www.matchbook.com/"
                                }
                            },
                            "period_second_period": {
                                "line_id": 8231482,
                                "moneyline": {
                                    "line_id": 8231482,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231482,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231482,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 16,
                                    "affiliate_name": "Matchbook",
                                    "affiliate_url": "https://www.matchbook.com/"
                                }
                            },
                            "period_third_period": {
                                "line_id": 8231482,
                                "moneyline": {
                                    "line_id": 8231482,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231482,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231482,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 16,
                                    "affiliate_name": "Matchbook",
                                    "affiliate_url": "https://www.matchbook.com/"
                                }
                            },
                            "period_fourth_period": {
                                "line_id": 8231482,
                                "moneyline": {
                                    "line_id": 8231482,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231482,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231482,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 16,
                                    "affiliate_name": "Matchbook",
                                    "affiliate_url": "https://www.matchbook.com/"
                                }
                            }
                        },
                        "17": {
                            "period_full_game": {
                                "line_id": 8246126,
                                "moneyline": {
                                    "line_id": 8246126,
                                    "moneyline_away": 210,
                                    "moneyline_away_delta": 0,
                                    "moneyline_home": -300,
                                    "moneyline_home_delta": 0,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0,
                                    "date_updated": "2019-12-28T17:26:21.127965Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8246126,
                                    "point_spread_away": 7,
                                    "point_spread_away_delta": 0,
                                    "point_spread_home": -7,
                                    "point_spread_home_delta": 0,
                                    "point_spread_away_money": -102,
                                    "point_spread_away_money_delta": 2,
                                    "point_spread_home_money": -112,
                                    "point_spread_home_money_delta": -2,
                                    "date_updated": "2019-12-28T16:56:37.78887Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8246126,
                                    "total_over": 55.5,
                                    "total_over_delta": 0,
                                    "total_under": 55.5,
                                    "total_under_delta": 0,
                                    "total_over_money": -120,
                                    "total_over_money_delta": 1,
                                    "total_under_money": -115,
                                    "total_under_money_delta": -1,
                                    "date_updated": "2019-12-29T19:46:58.255412Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 17,
                                    "affiliate_name": "RedZone",
                                    "affiliate_url": "https://www.redzonesports.bet/en/sports/"
                                }
                            },
                            "period_first_half": {
                                "line_id": 8246126,
                                "moneyline": {
                                    "line_id": 8246126,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8246126,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8246126,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 17,
                                    "affiliate_name": "RedZone",
                                    "affiliate_url": "https://www.redzonesports.bet/en/sports/"
                                }
                            },
                            "period_second_half": {
                                "line_id": 8246126,
                                "moneyline": {
                                    "line_id": 8246126,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8246126,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8246126,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 17,
                                    "affiliate_name": "RedZone",
                                    "affiliate_url": "https://www.redzonesports.bet/en/sports/"
                                }
                            },
                            "period_first_period": {
                                "line_id": 8246126,
                                "moneyline": {
                                    "line_id": 8246126,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8246126,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8246126,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 17,
                                    "affiliate_name": "RedZone",
                                    "affiliate_url": "https://www.redzonesports.bet/en/sports/"
                                }
                            },
                            "period_second_period": {
                                "line_id": 8246126,
                                "moneyline": {
                                    "line_id": 8246126,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8246126,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8246126,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 17,
                                    "affiliate_name": "RedZone",
                                    "affiliate_url": "https://www.redzonesports.bet/en/sports/"
                                }
                            },
                            "period_third_period": {
                                "line_id": 8246126,
                                "moneyline": {
                                    "line_id": 8246126,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8246126,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8246126,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 17,
                                    "affiliate_name": "RedZone",
                                    "affiliate_url": "https://www.redzonesports.bet/en/sports/"
                                }
                            },
                            "period_fourth_period": {
                                "line_id": 8246126,
                                "moneyline": {
                                    "line_id": 8246126,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8246126,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8246126,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 17,
                                    "affiliate_name": "RedZone",
                                    "affiliate_url": "https://www.redzonesports.bet/en/sports/"
                                }
                            }
                        },
                        "18": {
                            "period_full_game": {
                                "line_id": 8231697,
                                "moneyline": {
                                    "line_id": 8231697,
                                    "moneyline_away": 230,
                                    "moneyline_away_delta": 0,
                                    "moneyline_home": -280,
                                    "moneyline_home_delta": 0,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0,
                                    "date_updated": "2019-12-27T04:07:57.846039Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231697,
                                    "point_spread_away": 7,
                                    "point_spread_away_delta": -0.5,
                                    "point_spread_home": -7,
                                    "point_spread_home_delta": 0.5,
                                    "point_spread_away_money": -105,
                                    "point_spread_away_money_delta": 10,
                                    "point_spread_home_money": -115,
                                    "point_spread_home_money_delta": -10,
                                    "date_updated": "2019-12-27T14:31:34.852944Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231697,
                                    "total_over": 56,
                                    "total_over_delta": 0.5,
                                    "total_under": 56,
                                    "total_under_delta": 0.5,
                                    "total_over_money": -110,
                                    "total_over_money_delta": 0,
                                    "total_under_money": -110,
                                    "total_under_money_delta": 0,
                                    "date_updated": "2019-12-27T04:22:41.841985Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 18,
                                    "affiliate_name": "YouWager",
                                    "affiliate_url": "https://www.youwager.eu/sportsbook"
                                }
                            },
                            "period_first_half": {
                                "line_id": 8231697,
                                "moneyline": {
                                    "line_id": 8231697,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231697,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231697,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 18,
                                    "affiliate_name": "YouWager",
                                    "affiliate_url": "https://www.youwager.eu/sportsbook"
                                }
                            },
                            "period_second_half": {
                                "line_id": 8231697,
                                "moneyline": {
                                    "line_id": 8231697,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231697,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231697,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 18,
                                    "affiliate_name": "YouWager",
                                    "affiliate_url": "https://www.youwager.eu/sportsbook"
                                }
                            },
                            "period_first_period": {
                                "line_id": 8231697,
                                "moneyline": {
                                    "line_id": 8231697,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231697,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231697,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 18,
                                    "affiliate_name": "YouWager",
                                    "affiliate_url": "https://www.youwager.eu/sportsbook"
                                }
                            },
                            "period_second_period": {
                                "line_id": 8231697,
                                "moneyline": {
                                    "line_id": 8231697,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231697,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231697,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 18,
                                    "affiliate_name": "YouWager",
                                    "affiliate_url": "https://www.youwager.eu/sportsbook"
                                }
                            },
                            "period_third_period": {
                                "line_id": 8231697,
                                "moneyline": {
                                    "line_id": 8231697,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231697,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231697,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 18,
                                    "affiliate_name": "YouWager",
                                    "affiliate_url": "https://www.youwager.eu/sportsbook"
                                }
                            },
                            "period_fourth_period": {
                                "line_id": 8231697,
                                "moneyline": {
                                    "line_id": 8231697,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231697,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231697,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 18,
                                    "affiliate_name": "YouWager",
                                    "affiliate_url": "https://www.youwager.eu/sportsbook"
                                }
                            }
                        }
                    }
                },
                {
                    "event_id": "1dflcopy341223e24c16",
                    "sport_id": 1,
                    "event_date": "2020-01-02T20:00:00Z",
                    "rotation_number_away": 271,
                    "rotation_number_home": 272,
                    "score": {
                        "event_id": "07ea277f7834a64e2e6f451223e24c16",
                        "event_status": "STATUS_SCHEDULED",
                        "score_away": 0,
                        "score_home": 0,
                        "winner_away": 0,
                        "winner_home": 0,
                        "score_away_by_period": null,
                        "score_home_by_period": null,
                        "venue_name": "Legion Field (AL)",
                        "venue_location": "Birmingham, AL",
                        "game_clock": 0,
                        "display_clock": "0.00",
                        "game_period": 0,
                        "broadcast": "ESPN",
                        "event_status_detail": "1/2 - 3:00 PM EST"
                    },
                    "teams": [
                        {
                            "team_id": 3571,
                            "team_normalized_id": 134,
                            "is_away": true,
                            "is_home": false,
                            "name": "Boston College"
                        },
                        {
                            "team_id": 5043,
                            "team_normalized_id": 140,
                            "is_away": false,
                            "is_home": true,
                            "name": "Cincinnati U"
                        }
                    ],
                    "teams_normalized": [
                        {
                            "team_id": 134,
                            "name": "Boston College",
                            "mascot": "Eagles",
                            "abbreviation": "BC",
                            "is_away": true,
                            "is_home": false,
                            "ranking": "",
                            "record": "6-6"
                        },
                        {
                            "team_id": 140,
                            "name": "Cincinnati",
                            "mascot": "Bearcats",
                            "abbreviation": "CIN",
                            "is_away": false,
                            "is_home": true,
                            "ranking": "21",
                            "record": "10-3"
                        }
                    ],
                    "line_periods": {
                        "1": {
                            "period_full_game": {
                                "line_id": 8231599,
                                "moneyline": {
                                    "line_id": 8231599,
                                    "moneyline_away": 235,
                                    "moneyline_away_delta": 0,
                                    "moneyline_home": -255,
                                    "moneyline_home_delta": 0,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0,
                                    "date_updated": "2019-12-28T14:06:03.448899Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231599,
                                    "point_spread_away": 7,
                                    "point_spread_away_delta": 0,
                                    "point_spread_home": -7,
                                    "point_spread_home_delta": 0,
                                    "point_spread_away_money": 100,
                                    "point_spread_away_money_delta": -5,
                                    "point_spread_home_money": -110,
                                    "point_spread_home_money_delta": 5,
                                    "date_updated": "2019-12-28T14:06:06.888836Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231599,
                                    "total_over": 56,
                                    "total_over_delta": 0.5,
                                    "total_under": 56,
                                    "total_under_delta": 0.5,
                                    "total_over_money": -105,
                                    "total_over_money_delta": 3,
                                    "total_under_money": -105,
                                    "total_under_money_delta": -3,
                                    "date_updated": "2019-12-27T04:28:32.993069Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 1,
                                    "affiliate_name": "5Dimes",
                                    "affiliate_url": "https://www.5dimes.eu/"
                                }
                            },
                            "period_first_half": {
                                "line_id": 8231599,
                                "moneyline": {
                                    "line_id": 8231599,
                                    "moneyline_away": 190,
                                    "moneyline_away_delta": 0,
                                    "moneyline_home": -230,
                                    "moneyline_home_delta": 0,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0,
                                    "date_updated": "2019-12-23T16:20:30.372236Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231599,
                                    "point_spread_away": 4,
                                    "point_spread_away_delta": 0,
                                    "point_spread_home": -4,
                                    "point_spread_home_delta": 0,
                                    "point_spread_away_money": -105,
                                    "point_spread_away_money_delta": 0,
                                    "point_spread_home_money": -115,
                                    "point_spread_home_money_delta": 0,
                                    "date_updated": "2019-12-23T16:20:27.942398Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231599,
                                    "total_over": 27.5,
                                    "total_over_delta": 0,
                                    "total_under": 27.5,
                                    "total_under_delta": 0,
                                    "total_over_money": -115,
                                    "total_over_money_delta": 5,
                                    "total_under_money": -105,
                                    "total_under_money_delta": -205,
                                    "date_updated": "2019-12-28T16:16:09.812879Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 1,
                                    "affiliate_name": "5Dimes",
                                    "affiliate_url": "https://www.5dimes.eu/"
                                }
                            },
                            "period_second_half": {
                                "line_id": 8231599,
                                "moneyline": {
                                    "line_id": 8231599,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231599,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231599,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 1,
                                    "affiliate_name": "5Dimes",
                                    "affiliate_url": "https://www.5dimes.eu/"
                                }
                            },
                            "period_first_period": {
                                "line_id": 8231599,
                                "moneyline": {
                                    "line_id": 8231599,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231599,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231599,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 1,
                                    "affiliate_name": "5Dimes",
                                    "affiliate_url": "https://www.5dimes.eu/"
                                }
                            },
                            "period_second_period": {
                                "line_id": 8231599,
                                "moneyline": {
                                    "line_id": 8231599,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231599,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231599,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 1,
                                    "affiliate_name": "5Dimes",
                                    "affiliate_url": "https://www.5dimes.eu/"
                                }
                            },
                            "period_third_period": {
                                "line_id": 8231599,
                                "moneyline": {
                                    "line_id": 8231599,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231599,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231599,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 1,
                                    "affiliate_name": "5Dimes",
                                    "affiliate_url": "https://www.5dimes.eu/"
                                }
                            },
                            "period_fourth_period": {
                                "line_id": 8231599,
                                "moneyline": {
                                    "line_id": 8231599,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231599,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231599,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 1,
                                    "affiliate_name": "5Dimes",
                                    "affiliate_url": "https://www.5dimes.eu/"
                                }
                            }
                        },
                        "2": {
                            "period_full_game": {
                                "line_id": 8231304,
                                "moneyline": {
                                    "line_id": 8231304,
                                    "moneyline_away": 220,
                                    "moneyline_away_delta": 0,
                                    "moneyline_home": -270,
                                    "moneyline_home_delta": 0,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0,
                                    "date_updated": "2019-12-10T08:51:04.282579Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231304,
                                    "point_spread_away": 7,
                                    "point_spread_away_delta": 0,
                                    "point_spread_home": -7,
                                    "point_spread_home_delta": 0,
                                    "point_spread_away_money": -105,
                                    "point_spread_away_money_delta": 5,
                                    "point_spread_home_money": -115,
                                    "point_spread_home_money_delta": -5,
                                    "date_updated": "2019-12-19T23:21:34.749597Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231304,
                                    "total_over": 55.5,
                                    "total_over_delta": -0.5,
                                    "total_under": 55.5,
                                    "total_under_delta": -0.5,
                                    "total_over_money": -110,
                                    "total_over_money_delta": -5,
                                    "total_under_money": -110,
                                    "total_under_money_delta": 5,
                                    "date_updated": "2019-12-29T17:11:13.277026Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 2,
                                    "affiliate_name": "Bovada",
                                    "affiliate_url": "https://www.bovada.lv/"
                                }
                            },
                            "period_first_half": {
                                "line_id": 8231304,
                                "moneyline": {
                                    "line_id": 8231304,
                                    "moneyline_away": 175,
                                    "moneyline_away_delta": 0,
                                    "moneyline_home": -240,
                                    "moneyline_home_delta": 0,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0,
                                    "date_updated": "2019-12-28T07:11:39.860304Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231304,
                                    "point_spread_away": 4,
                                    "point_spread_away_delta": 0,
                                    "point_spread_home": -4,
                                    "point_spread_home_delta": 0,
                                    "point_spread_away_money": -105,
                                    "point_spread_away_money_delta": 0,
                                    "point_spread_home_money": -115,
                                    "point_spread_home_money_delta": 0,
                                    "date_updated": "2019-12-23T15:38:52.930386Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231304,
                                    "total_over": 27.5,
                                    "total_over_delta": 0,
                                    "total_under": 27.5,
                                    "total_under_delta": 0,
                                    "total_over_money": -115,
                                    "total_over_money_delta": 5,
                                    "total_under_money": -105,
                                    "total_under_money_delta": -205,
                                    "date_updated": "2019-12-28T07:06:15.934911Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 2,
                                    "affiliate_name": "Bovada",
                                    "affiliate_url": "https://www.bovada.lv/"
                                }
                            },
                            "period_second_half": {
                                "line_id": 8231304,
                                "moneyline": {
                                    "line_id": 8231304,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231304,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231304,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 2,
                                    "affiliate_name": "Bovada",
                                    "affiliate_url": "https://www.bovada.lv/"
                                }
                            },
                            "period_first_period": {
                                "line_id": 8231304,
                                "moneyline": {
                                    "line_id": 8231304,
                                    "moneyline_away": 155,
                                    "moneyline_away_delta": 0,
                                    "moneyline_home": -210,
                                    "moneyline_home_delta": 0,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0,
                                    "date_updated": "2019-12-25T13:23:39.373467Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231304,
                                    "point_spread_away": 3,
                                    "point_spread_away_delta": 0,
                                    "point_spread_home": -3,
                                    "point_spread_home_delta": 0,
                                    "point_spread_away_money": -115,
                                    "point_spread_away_money_delta": -5,
                                    "point_spread_home_money": -115,
                                    "point_spread_home_money_delta": 5,
                                    "date_updated": "2019-12-25T13:23:39.382873Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231304,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 2,
                                    "affiliate_name": "Bovada",
                                    "affiliate_url": "https://www.bovada.lv/"
                                }
                            },
                            "period_second_period": {
                                "line_id": 8231304,
                                "moneyline": {
                                    "line_id": 8231304,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231304,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231304,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 2,
                                    "affiliate_name": "Bovada",
                                    "affiliate_url": "https://www.bovada.lv/"
                                }
                            },
                            "period_third_period": {
                                "line_id": 8231304,
                                "moneyline": {
                                    "line_id": 8231304,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231304,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231304,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 2,
                                    "affiliate_name": "Bovada",
                                    "affiliate_url": "https://www.bovada.lv/"
                                }
                            },
                            "period_fourth_period": {
                                "line_id": 8231304,
                                "moneyline": {
                                    "line_id": 8231304,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231304,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231304,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 2,
                                    "affiliate_name": "Bovada",
                                    "affiliate_url": "https://www.bovada.lv/"
                                }
                            }
                        },
                        "3": {
                            "period_full_game": {
                                "line_id": 8231195,
                                "moneyline": {
                                    "line_id": 8231195,
                                    "moneyline_away": 223,
                                    "moneyline_away_delta": 0,
                                    "moneyline_home": -271,
                                    "moneyline_home_delta": 0,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0,
                                    "date_updated": "2019-12-29T07:16:03.866431Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231195,
                                    "point_spread_away": 7,
                                    "point_spread_away_delta": 0,
                                    "point_spread_home": -7,
                                    "point_spread_home_delta": 0,
                                    "point_spread_away_money": 100,
                                    "point_spread_away_money_delta": 200,
                                    "point_spread_home_money": -112,
                                    "point_spread_home_money_delta": 0,
                                    "date_updated": "2019-12-29T07:16:03.880488Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231195,
                                    "total_over": 55.5,
                                    "total_over_delta": 0,
                                    "total_under": 55.5,
                                    "total_under_delta": 0,
                                    "total_over_money": -111,
                                    "total_over_money_delta": 2,
                                    "total_under_money": -103,
                                    "total_under_money_delta": -1,
                                    "date_updated": "2019-12-29T17:02:18.203705Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 3,
                                    "affiliate_name": "Pinnacle",
                                    "affiliate_url": "https://www.pinnacle.com/en/rtn"
                                }
                            },
                            "period_first_half": {
                                "line_id": 8231195,
                                "moneyline": {
                                    "line_id": 8231195,
                                    "moneyline_away": 188,
                                    "moneyline_away_delta": 0,
                                    "moneyline_home": -229,
                                    "moneyline_home_delta": 0,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0,
                                    "date_updated": "2019-12-29T07:16:03.895559Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231195,
                                    "point_spread_away": 4,
                                    "point_spread_away_delta": 0,
                                    "point_spread_home": -4,
                                    "point_spread_home_delta": 0,
                                    "point_spread_away_money": -106,
                                    "point_spread_away_money_delta": 1,
                                    "point_spread_home_money": -110,
                                    "point_spread_home_money_delta": -1,
                                    "date_updated": "2019-12-29T07:16:03.910895Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231195,
                                    "total_over": 27.5,
                                    "total_over_delta": 0,
                                    "total_under": 27.5,
                                    "total_under_delta": 0,
                                    "total_over_money": -111,
                                    "total_over_money_delta": 1,
                                    "total_under_money": -109,
                                    "total_under_money_delta": -1,
                                    "date_updated": "2019-12-29T17:02:18.226803Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 3,
                                    "affiliate_name": "Pinnacle",
                                    "affiliate_url": "https://www.pinnacle.com/en/rtn"
                                }
                            },
                            "period_second_half": {
                                "line_id": 8231195,
                                "moneyline": {
                                    "line_id": 8231195,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231195,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231195,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 3,
                                    "affiliate_name": "Pinnacle",
                                    "affiliate_url": "https://www.pinnacle.com/en/rtn"
                                }
                            },
                            "period_first_period": {
                                "line_id": 8231195,
                                "moneyline": {
                                    "line_id": 8231195,
                                    "moneyline_away": 166,
                                    "moneyline_away_delta": 0,
                                    "moneyline_home": -205,
                                    "moneyline_home_delta": 0,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0,
                                    "date_updated": "2019-12-29T07:16:03.926207Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231195,
                                    "point_spread_away": 3,
                                    "point_spread_away_delta": 0,
                                    "point_spread_home": -3,
                                    "point_spread_home_delta": 0,
                                    "point_spread_away_money": -105,
                                    "point_spread_away_money_delta": -1,
                                    "point_spread_home_money": -114,
                                    "point_spread_home_money_delta": 0,
                                    "date_updated": "2019-12-29T17:02:18.244653Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231195,
                                    "total_over": 13,
                                    "total_over_delta": 0,
                                    "total_under": 13,
                                    "total_under_delta": 0,
                                    "total_over_money": -108,
                                    "total_over_money_delta": 1,
                                    "total_under_money": -112,
                                    "total_under_money_delta": -1,
                                    "date_updated": "2019-12-29T17:02:18.263592Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 3,
                                    "affiliate_name": "Pinnacle",
                                    "affiliate_url": "https://www.pinnacle.com/en/rtn"
                                }
                            },
                            "period_second_period": {
                                "line_id": 8231195,
                                "moneyline": {
                                    "line_id": 8231195,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231195,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231195,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 3,
                                    "affiliate_name": "Pinnacle",
                                    "affiliate_url": "https://www.pinnacle.com/en/rtn"
                                }
                            },
                            "period_third_period": {
                                "line_id": 8231195,
                                "moneyline": {
                                    "line_id": 8231195,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231195,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231195,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 3,
                                    "affiliate_name": "Pinnacle",
                                    "affiliate_url": "https://www.pinnacle.com/en/rtn"
                                }
                            },
                            "period_fourth_period": {
                                "line_id": 8231195,
                                "moneyline": {
                                    "line_id": 8231195,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231195,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231195,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 3,
                                    "affiliate_name": "Pinnacle",
                                    "affiliate_url": "https://www.pinnacle.com/en/rtn"
                                }
                            }
                        },
                        "4": {
                            "period_full_game": {
                                "line_id": 8231823,
                                "moneyline": {
                                    "line_id": 8231823,
                                    "moneyline_away": 220,
                                    "moneyline_away_delta": 0,
                                    "moneyline_home": -260,
                                    "moneyline_home_delta": 0,
                                    "moneyline_draw": -260,
                                    "moneyline_draw_delta": 0,
                                    "date_updated": "2019-12-19T23:07:10.353589Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231823,
                                    "point_spread_away": 7,
                                    "point_spread_away_delta": 0,
                                    "point_spread_home": -7,
                                    "point_spread_home_delta": 0,
                                    "point_spread_away_money": -104,
                                    "point_spread_away_money_delta": 4,
                                    "point_spread_home_money": -116,
                                    "point_spread_home_money_delta": -4,
                                    "date_updated": "2019-12-19T23:07:10.383839Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231823,
                                    "total_over": 55.5,
                                    "total_over_delta": 0,
                                    "total_under": 55.5,
                                    "total_under_delta": 0,
                                    "total_over_money": -110,
                                    "total_over_money_delta": 10,
                                    "total_under_money": -110,
                                    "total_under_money_delta": -210,
                                    "date_updated": "2019-12-29T17:00:46.465736Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 4,
                                    "affiliate_name": "SportsBetting",
                                    "affiliate_url": "https://www.sportsbetting.ag/"
                                }
                            },
                            "period_first_half": {
                                "line_id": 8231823,
                                "moneyline": {
                                    "line_id": 8231823,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231823,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231823,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 4,
                                    "affiliate_name": "SportsBetting",
                                    "affiliate_url": "https://www.sportsbetting.ag/"
                                }
                            },
                            "period_second_half": {
                                "line_id": 8231823,
                                "moneyline": {
                                    "line_id": 8231823,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231823,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231823,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 4,
                                    "affiliate_name": "SportsBetting",
                                    "affiliate_url": "https://www.sportsbetting.ag/"
                                }
                            },
                            "period_first_period": {
                                "line_id": 8231823,
                                "moneyline": {
                                    "line_id": 8231823,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231823,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231823,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 4,
                                    "affiliate_name": "SportsBetting",
                                    "affiliate_url": "https://www.sportsbetting.ag/"
                                }
                            },
                            "period_second_period": {
                                "line_id": 8231823,
                                "moneyline": {
                                    "line_id": 8231823,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231823,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231823,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 4,
                                    "affiliate_name": "SportsBetting",
                                    "affiliate_url": "https://www.sportsbetting.ag/"
                                }
                            },
                            "period_third_period": {
                                "line_id": 8231823,
                                "moneyline": {
                                    "line_id": 8231823,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231823,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231823,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 4,
                                    "affiliate_name": "SportsBetting",
                                    "affiliate_url": "https://www.sportsbetting.ag/"
                                }
                            },
                            "period_fourth_period": {
                                "line_id": 8231823,
                                "moneyline": {
                                    "line_id": 8231823,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231823,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231823,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 4,
                                    "affiliate_name": "SportsBetting",
                                    "affiliate_url": "https://www.sportsbetting.ag/"
                                }
                            }
                        },
                        "6": {
                            "period_full_game": {
                                "line_id": 8231825,
                                "moneyline": {
                                    "line_id": 8231825,
                                    "moneyline_away": 220,
                                    "moneyline_away_delta": 0,
                                    "moneyline_home": -260,
                                    "moneyline_home_delta": 0,
                                    "moneyline_draw": -260,
                                    "moneyline_draw_delta": 0,
                                    "date_updated": "2019-12-19T23:06:50.157244Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231825,
                                    "point_spread_away": 7,
                                    "point_spread_away_delta": 0,
                                    "point_spread_home": -7,
                                    "point_spread_home_delta": 0,
                                    "point_spread_away_money": -104,
                                    "point_spread_away_money_delta": 4,
                                    "point_spread_home_money": -116,
                                    "point_spread_home_money_delta": -4,
                                    "date_updated": "2019-12-19T23:06:50.172818Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231825,
                                    "total_over": 55.5,
                                    "total_over_delta": 0,
                                    "total_under": 55.5,
                                    "total_under_delta": 0,
                                    "total_over_money": -110,
                                    "total_over_money_delta": 10,
                                    "total_under_money": -110,
                                    "total_under_money_delta": -210,
                                    "date_updated": "2019-12-29T17:00:23.684058Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 6,
                                    "affiliate_name": "BetOnline",
                                    "affiliate_url": "https://betonline.ag/"
                                }
                            },
                            "period_first_half": {
                                "line_id": 8231825,
                                "moneyline": {
                                    "line_id": 8231825,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231825,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231825,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 6,
                                    "affiliate_name": "BetOnline",
                                    "affiliate_url": "https://betonline.ag/"
                                }
                            },
                            "period_second_half": {
                                "line_id": 8231825,
                                "moneyline": {
                                    "line_id": 8231825,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231825,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231825,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 6,
                                    "affiliate_name": "BetOnline",
                                    "affiliate_url": "https://betonline.ag/"
                                }
                            },
                            "period_first_period": {
                                "line_id": 8231825,
                                "moneyline": {
                                    "line_id": 8231825,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231825,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231825,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 6,
                                    "affiliate_name": "BetOnline",
                                    "affiliate_url": "https://betonline.ag/"
                                }
                            },
                            "period_second_period": {
                                "line_id": 8231825,
                                "moneyline": {
                                    "line_id": 8231825,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231825,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231825,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 6,
                                    "affiliate_name": "BetOnline",
                                    "affiliate_url": "https://betonline.ag/"
                                }
                            },
                            "period_third_period": {
                                "line_id": 8231825,
                                "moneyline": {
                                    "line_id": 8231825,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231825,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231825,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 6,
                                    "affiliate_name": "BetOnline",
                                    "affiliate_url": "https://betonline.ag/"
                                }
                            },
                            "period_fourth_period": {
                                "line_id": 8231825,
                                "moneyline": {
                                    "line_id": 8231825,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231825,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231825,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 6,
                                    "affiliate_name": "BetOnline",
                                    "affiliate_url": "https://betonline.ag/"
                                }
                            }
                        },
                        "7": {
                            "period_full_game": {
                                "line_id": 8242908,
                                "moneyline": {
                                    "line_id": 8242908,
                                    "moneyline_away": 222,
                                    "moneyline_away_delta": 0,
                                    "moneyline_home": -270,
                                    "moneyline_home_delta": 0,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0,
                                    "date_updated": "2019-12-27T06:00:02.16211Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8242908,
                                    "point_spread_away": 7,
                                    "point_spread_away_delta": 0,
                                    "point_spread_home": -7,
                                    "point_spread_home_delta": 0,
                                    "point_spread_away_money": -104,
                                    "point_spread_away_money_delta": 0,
                                    "point_spread_home_money": -116,
                                    "point_spread_home_money_delta": 0,
                                    "date_updated": "2019-12-27T06:00:02.177735Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8242908,
                                    "total_over": 56,
                                    "total_over_delta": 0,
                                    "total_under": 56,
                                    "total_under_delta": 0,
                                    "total_over_money": -102,
                                    "total_over_money_delta": 8,
                                    "total_under_money": -119,
                                    "total_under_money_delta": -9,
                                    "date_updated": "2019-12-29T17:12:19.795673Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 7,
                                    "affiliate_name": "Bookmaker",
                                    "affiliate_url": "https://www.bookmaker.eu/"
                                }
                            },
                            "period_first_half": {
                                "line_id": 8242908,
                                "moneyline": {
                                    "line_id": 8242908,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8242908,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8242908,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 7,
                                    "affiliate_name": "Bookmaker",
                                    "affiliate_url": "https://www.bookmaker.eu/"
                                }
                            },
                            "period_second_half": {
                                "line_id": 8242908,
                                "moneyline": {
                                    "line_id": 8242908,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8242908,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8242908,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 7,
                                    "affiliate_name": "Bookmaker",
                                    "affiliate_url": "https://www.bookmaker.eu/"
                                }
                            },
                            "period_first_period": {
                                "line_id": 8242908,
                                "moneyline": {
                                    "line_id": 8242908,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8242908,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8242908,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 7,
                                    "affiliate_name": "Bookmaker",
                                    "affiliate_url": "https://www.bookmaker.eu/"
                                }
                            },
                            "period_second_period": {
                                "line_id": 8242908,
                                "moneyline": {
                                    "line_id": 8242908,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8242908,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8242908,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 7,
                                    "affiliate_name": "Bookmaker",
                                    "affiliate_url": "https://www.bookmaker.eu/"
                                }
                            },
                            "period_third_period": {
                                "line_id": 8242908,
                                "moneyline": {
                                    "line_id": 8242908,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8242908,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8242908,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 7,
                                    "affiliate_name": "Bookmaker",
                                    "affiliate_url": "https://www.bookmaker.eu/"
                                }
                            },
                            "period_fourth_period": {
                                "line_id": 8242908,
                                "moneyline": {
                                    "line_id": 8242908,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8242908,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8242908,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 7,
                                    "affiliate_name": "Bookmaker",
                                    "affiliate_url": "https://www.bookmaker.eu/"
                                }
                            }
                        },
                        "9": {
                            "period_full_game": {
                                "line_id": 8242910,
                                "moneyline": {
                                    "line_id": 8242910,
                                    "moneyline_away": 222,
                                    "moneyline_away_delta": 0,
                                    "moneyline_home": -270,
                                    "moneyline_home_delta": 0,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0,
                                    "date_updated": "2019-12-27T06:00:02.646996Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8242910,
                                    "point_spread_away": 7,
                                    "point_spread_away_delta": 0,
                                    "point_spread_home": -7,
                                    "point_spread_home_delta": 0,
                                    "point_spread_away_money": -104,
                                    "point_spread_away_money_delta": 0,
                                    "point_spread_home_money": -116,
                                    "point_spread_home_money_delta": 0,
                                    "date_updated": "2019-12-27T06:00:02.662723Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8242910,
                                    "total_over": 56,
                                    "total_over_delta": 0,
                                    "total_under": 56,
                                    "total_under_delta": 0,
                                    "total_over_money": -102,
                                    "total_over_money_delta": 8,
                                    "total_under_money": -119,
                                    "total_under_money_delta": -9,
                                    "date_updated": "2019-12-29T17:07:03.946002Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 9,
                                    "affiliate_name": "betcris",
                                    "affiliate_url": "https://www.betcris.com/en/sportsbook"
                                }
                            },
                            "period_first_half": {
                                "line_id": 8242910,
                                "moneyline": {
                                    "line_id": 8242910,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8242910,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8242910,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 9,
                                    "affiliate_name": "betcris",
                                    "affiliate_url": "https://www.betcris.com/en/sportsbook"
                                }
                            },
                            "period_second_half": {
                                "line_id": 8242910,
                                "moneyline": {
                                    "line_id": 8242910,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8242910,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8242910,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 9,
                                    "affiliate_name": "betcris",
                                    "affiliate_url": "https://www.betcris.com/en/sportsbook"
                                }
                            },
                            "period_first_period": {
                                "line_id": 8242910,
                                "moneyline": {
                                    "line_id": 8242910,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8242910,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8242910,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 9,
                                    "affiliate_name": "betcris",
                                    "affiliate_url": "https://www.betcris.com/en/sportsbook"
                                }
                            },
                            "period_second_period": {
                                "line_id": 8242910,
                                "moneyline": {
                                    "line_id": 8242910,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8242910,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8242910,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 9,
                                    "affiliate_name": "betcris",
                                    "affiliate_url": "https://www.betcris.com/en/sportsbook"
                                }
                            },
                            "period_third_period": {
                                "line_id": 8242910,
                                "moneyline": {
                                    "line_id": 8242910,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8242910,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8242910,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 9,
                                    "affiliate_name": "betcris",
                                    "affiliate_url": "https://www.betcris.com/en/sportsbook"
                                }
                            },
                            "period_fourth_period": {
                                "line_id": 8242910,
                                "moneyline": {
                                    "line_id": 8242910,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8242910,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8242910,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 9,
                                    "affiliate_name": "betcris",
                                    "affiliate_url": "https://www.betcris.com/en/sportsbook"
                                }
                            }
                        },
                        "10": {
                            "period_full_game": {
                                "line_id": 8242915,
                                "moneyline": {
                                    "line_id": 8242915,
                                    "moneyline_away": 222,
                                    "moneyline_away_delta": 0,
                                    "moneyline_home": -270,
                                    "moneyline_home_delta": 0,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0,
                                    "date_updated": "2019-12-27T06:00:03.487829Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8242915,
                                    "point_spread_away": 7,
                                    "point_spread_away_delta": 0,
                                    "point_spread_home": -7,
                                    "point_spread_home_delta": 0,
                                    "point_spread_away_money": -104,
                                    "point_spread_away_money_delta": 0,
                                    "point_spread_home_money": -116,
                                    "point_spread_home_money_delta": 0,
                                    "date_updated": "2019-12-27T06:00:03.502538Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8242915,
                                    "total_over": 56,
                                    "total_over_delta": 0,
                                    "total_under": 56,
                                    "total_under_delta": 0,
                                    "total_over_money": -102,
                                    "total_over_money_delta": 8,
                                    "total_under_money": -119,
                                    "total_under_money_delta": -9,
                                    "date_updated": "2019-12-29T17:06:51.003366Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 10,
                                    "affiliate_name": "JustBet",
                                    "affiliate_url": "https://www.justbet.co/sportsbook-betting"
                                }
                            },
                            "period_first_half": {
                                "line_id": 8242915,
                                "moneyline": {
                                    "line_id": 8242915,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8242915,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8242915,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 10,
                                    "affiliate_name": "JustBet",
                                    "affiliate_url": "https://www.justbet.co/sportsbook-betting"
                                }
                            },
                            "period_second_half": {
                                "line_id": 8242915,
                                "moneyline": {
                                    "line_id": 8242915,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8242915,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8242915,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 10,
                                    "affiliate_name": "JustBet",
                                    "affiliate_url": "https://www.justbet.co/sportsbook-betting"
                                }
                            },
                            "period_first_period": {
                                "line_id": 8242915,
                                "moneyline": {
                                    "line_id": 8242915,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8242915,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8242915,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 10,
                                    "affiliate_name": "JustBet",
                                    "affiliate_url": "https://www.justbet.co/sportsbook-betting"
                                }
                            },
                            "period_second_period": {
                                "line_id": 8242915,
                                "moneyline": {
                                    "line_id": 8242915,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8242915,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8242915,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 10,
                                    "affiliate_name": "JustBet",
                                    "affiliate_url": "https://www.justbet.co/sportsbook-betting"
                                }
                            },
                            "period_third_period": {
                                "line_id": 8242915,
                                "moneyline": {
                                    "line_id": 8242915,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8242915,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8242915,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 10,
                                    "affiliate_name": "JustBet",
                                    "affiliate_url": "https://www.justbet.co/sportsbook-betting"
                                }
                            },
                            "period_fourth_period": {
                                "line_id": 8242915,
                                "moneyline": {
                                    "line_id": 8242915,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8242915,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8242915,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 10,
                                    "affiliate_name": "JustBet",
                                    "affiliate_url": "https://www.justbet.co/sportsbook-betting"
                                }
                            }
                        },
                        "12": {
                            "period_full_game": {
                                "line_id": 8231300,
                                "moneyline": {
                                    "line_id": 8231300,
                                    "moneyline_away": 220,
                                    "moneyline_away_delta": 0,
                                    "moneyline_home": -270,
                                    "moneyline_home_delta": 0,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0,
                                    "date_updated": "2019-12-10T08:50:15.504955Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231300,
                                    "point_spread_away": 7,
                                    "point_spread_away_delta": 0,
                                    "point_spread_home": -7,
                                    "point_spread_home_delta": 0,
                                    "point_spread_away_money": -105,
                                    "point_spread_away_money_delta": 5,
                                    "point_spread_home_money": -115,
                                    "point_spread_home_money_delta": -5,
                                    "date_updated": "2019-12-19T23:22:47.921738Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231300,
                                    "total_over": 55.5,
                                    "total_over_delta": -0.5,
                                    "total_under": 55.5,
                                    "total_under_delta": -0.5,
                                    "total_over_money": -110,
                                    "total_over_money_delta": -5,
                                    "total_under_money": -110,
                                    "total_under_money_delta": 5,
                                    "date_updated": "2019-12-29T17:10:21.219365Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 12,
                                    "affiliate_name": "Bodog",
                                    "affiliate_url": "https://www.bodog.eu/"
                                }
                            },
                            "period_first_half": {
                                "line_id": 8231300,
                                "moneyline": {
                                    "line_id": 8231300,
                                    "moneyline_away": 175,
                                    "moneyline_away_delta": 0,
                                    "moneyline_home": -240,
                                    "moneyline_home_delta": 0,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0,
                                    "date_updated": "2019-12-28T07:12:41.093008Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231300,
                                    "point_spread_away": 4,
                                    "point_spread_away_delta": 0,
                                    "point_spread_home": -4,
                                    "point_spread_home_delta": 0,
                                    "point_spread_away_money": -105,
                                    "point_spread_away_money_delta": 0,
                                    "point_spread_home_money": -115,
                                    "point_spread_home_money_delta": 0,
                                    "date_updated": "2019-12-23T15:40:57.232584Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231300,
                                    "total_over": 27.5,
                                    "total_over_delta": 0,
                                    "total_under": 27.5,
                                    "total_under_delta": 0,
                                    "total_over_money": -115,
                                    "total_over_money_delta": 5,
                                    "total_under_money": -105,
                                    "total_under_money_delta": -205,
                                    "date_updated": "2019-12-28T07:05:24.451822Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 12,
                                    "affiliate_name": "Bodog",
                                    "affiliate_url": "https://www.bodog.eu/"
                                }
                            },
                            "period_second_half": {
                                "line_id": 8231300,
                                "moneyline": {
                                    "line_id": 8231300,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231300,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231300,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 12,
                                    "affiliate_name": "Bodog",
                                    "affiliate_url": "https://www.bodog.eu/"
                                }
                            },
                            "period_first_period": {
                                "line_id": 8231300,
                                "moneyline": {
                                    "line_id": 8231300,
                                    "moneyline_away": 155,
                                    "moneyline_away_delta": 0,
                                    "moneyline_home": -210,
                                    "moneyline_home_delta": 0,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0,
                                    "date_updated": "2019-12-25T13:22:48.229764Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231300,
                                    "point_spread_away": 3,
                                    "point_spread_away_delta": 0,
                                    "point_spread_home": -3,
                                    "point_spread_home_delta": 0,
                                    "point_spread_away_money": -115,
                                    "point_spread_away_money_delta": -5,
                                    "point_spread_home_money": -115,
                                    "point_spread_home_money_delta": 5,
                                    "date_updated": "2019-12-25T13:22:48.238859Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231300,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 12,
                                    "affiliate_name": "Bodog",
                                    "affiliate_url": "https://www.bodog.eu/"
                                }
                            },
                            "period_second_period": {
                                "line_id": 8231300,
                                "moneyline": {
                                    "line_id": 8231300,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231300,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231300,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 12,
                                    "affiliate_name": "Bodog",
                                    "affiliate_url": "https://www.bodog.eu/"
                                }
                            },
                            "period_third_period": {
                                "line_id": 8231300,
                                "moneyline": {
                                    "line_id": 8231300,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231300,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231300,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 12,
                                    "affiliate_name": "Bodog",
                                    "affiliate_url": "https://www.bodog.eu/"
                                }
                            },
                            "period_fourth_period": {
                                "line_id": 8231300,
                                "moneyline": {
                                    "line_id": 8231300,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231300,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231300,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 12,
                                    "affiliate_name": "Bodog",
                                    "affiliate_url": "https://www.bodog.eu/"
                                }
                            }
                        },
                        "14": {
                            "period_full_game": {
                                "line_id": 8231735,
                                "moneyline": {
                                    "line_id": 8231735,
                                    "moneyline_away": 235,
                                    "moneyline_away_delta": 0,
                                    "moneyline_home": -275,
                                    "moneyline_home_delta": 0,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0,
                                    "date_updated": "2019-12-25T04:26:29.279496Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231735,
                                    "point_spread_away": 7,
                                    "point_spread_away_delta": 0,
                                    "point_spread_home": -7,
                                    "point_spread_home_delta": 0,
                                    "point_spread_away_money": -105,
                                    "point_spread_away_money_delta": 5,
                                    "point_spread_home_money": -115,
                                    "point_spread_home_money_delta": -5,
                                    "date_updated": "2019-12-21T04:19:19.51973Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231735,
                                    "total_over": 56,
                                    "total_over_delta": 0.5,
                                    "total_under": 56,
                                    "total_under_delta": 0.5,
                                    "total_over_money": -110,
                                    "total_over_money_delta": 0,
                                    "total_under_money": -110,
                                    "total_under_money_delta": 0,
                                    "date_updated": "2019-12-27T04:32:56.443881Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 14,
                                    "affiliate_name": "Intertops",
                                    "affiliate_url": "https://sports.intertops.eu/"
                                }
                            },
                            "period_first_half": {
                                "line_id": 8231735,
                                "moneyline": {
                                    "line_id": 8231735,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231735,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231735,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 14,
                                    "affiliate_name": "Intertops",
                                    "affiliate_url": "https://sports.intertops.eu/"
                                }
                            },
                            "period_second_half": {
                                "line_id": 8231735,
                                "moneyline": {
                                    "line_id": 8231735,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231735,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231735,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 14,
                                    "affiliate_name": "Intertops",
                                    "affiliate_url": "https://sports.intertops.eu/"
                                }
                            },
                            "period_first_period": {
                                "line_id": 8231735,
                                "moneyline": {
                                    "line_id": 8231735,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231735,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231735,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 14,
                                    "affiliate_name": "Intertops",
                                    "affiliate_url": "https://sports.intertops.eu/"
                                }
                            },
                            "period_second_period": {
                                "line_id": 8231735,
                                "moneyline": {
                                    "line_id": 8231735,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231735,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231735,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 14,
                                    "affiliate_name": "Intertops",
                                    "affiliate_url": "https://sports.intertops.eu/"
                                }
                            },
                            "period_third_period": {
                                "line_id": 8231735,
                                "moneyline": {
                                    "line_id": 8231735,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231735,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231735,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 14,
                                    "affiliate_name": "Intertops",
                                    "affiliate_url": "https://sports.intertops.eu/"
                                }
                            },
                            "period_fourth_period": {
                                "line_id": 8231735,
                                "moneyline": {
                                    "line_id": 8231735,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231735,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231735,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 14,
                                    "affiliate_name": "Intertops",
                                    "affiliate_url": "https://sports.intertops.eu/"
                                }
                            }
                        },
                        "16": {
                            "period_full_game": {
                                "line_id": 8231482,
                                "moneyline": {
                                    "line_id": 8231482,
                                    "moneyline_away": 224,
                                    "moneyline_away_delta": 0,
                                    "moneyline_home": -268,
                                    "moneyline_home_delta": 0,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0,
                                    "date_updated": "2019-12-29T16:34:30.628988Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231482,
                                    "point_spread_away": 7,
                                    "point_spread_away_delta": 0,
                                    "point_spread_home": -7,
                                    "point_spread_home_delta": 0,
                                    "point_spread_away_money": 101,
                                    "point_spread_away_money_delta": 209,
                                    "point_spread_home_money": -111,
                                    "point_spread_home_money_delta": 8,
                                    "date_updated": "2019-12-29T16:34:30.654212Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231482,
                                    "total_over": 55.5,
                                    "total_over_delta": 0,
                                    "total_under": 55.5,
                                    "total_under_delta": 0,
                                    "total_over_money": -110,
                                    "total_over_money_delta": 2,
                                    "total_under_money": -102,
                                    "total_under_money_delta": 5,
                                    "date_updated": "2019-12-29T17:02:23.562445Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 16,
                                    "affiliate_name": "Matchbook",
                                    "affiliate_url": "https://www.matchbook.com/"
                                }
                            },
                            "period_first_half": {
                                "line_id": 8231482,
                                "moneyline": {
                                    "line_id": 8231482,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231482,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231482,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 16,
                                    "affiliate_name": "Matchbook",
                                    "affiliate_url": "https://www.matchbook.com/"
                                }
                            },
                            "period_second_half": {
                                "line_id": 8231482,
                                "moneyline": {
                                    "line_id": 8231482,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231482,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231482,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 16,
                                    "affiliate_name": "Matchbook",
                                    "affiliate_url": "https://www.matchbook.com/"
                                }
                            },
                            "period_first_period": {
                                "line_id": 8231482,
                                "moneyline": {
                                    "line_id": 8231482,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231482,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231482,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 16,
                                    "affiliate_name": "Matchbook",
                                    "affiliate_url": "https://www.matchbook.com/"
                                }
                            },
                            "period_second_period": {
                                "line_id": 8231482,
                                "moneyline": {
                                    "line_id": 8231482,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231482,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231482,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 16,
                                    "affiliate_name": "Matchbook",
                                    "affiliate_url": "https://www.matchbook.com/"
                                }
                            },
                            "period_third_period": {
                                "line_id": 8231482,
                                "moneyline": {
                                    "line_id": 8231482,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231482,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231482,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 16,
                                    "affiliate_name": "Matchbook",
                                    "affiliate_url": "https://www.matchbook.com/"
                                }
                            },
                            "period_fourth_period": {
                                "line_id": 8231482,
                                "moneyline": {
                                    "line_id": 8231482,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231482,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231482,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 16,
                                    "affiliate_name": "Matchbook",
                                    "affiliate_url": "https://www.matchbook.com/"
                                }
                            }
                        },
                        "17": {
                            "period_full_game": {
                                "line_id": 8246126,
                                "moneyline": {
                                    "line_id": 8246126,
                                    "moneyline_away": 210,
                                    "moneyline_away_delta": 0,
                                    "moneyline_home": -300,
                                    "moneyline_home_delta": 0,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0,
                                    "date_updated": "2019-12-28T17:26:21.127965Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8246126,
                                    "point_spread_away": 7,
                                    "point_spread_away_delta": 0,
                                    "point_spread_home": -7,
                                    "point_spread_home_delta": 0,
                                    "point_spread_away_money": -102,
                                    "point_spread_away_money_delta": 2,
                                    "point_spread_home_money": -112,
                                    "point_spread_home_money_delta": -2,
                                    "date_updated": "2019-12-28T16:56:37.78887Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8246126,
                                    "total_over": 55.5,
                                    "total_over_delta": 0,
                                    "total_under": 55.5,
                                    "total_under_delta": 0,
                                    "total_over_money": -120,
                                    "total_over_money_delta": 1,
                                    "total_under_money": -115,
                                    "total_under_money_delta": -1,
                                    "date_updated": "2019-12-29T19:46:58.255412Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 17,
                                    "affiliate_name": "RedZone",
                                    "affiliate_url": "https://www.redzonesports.bet/en/sports/"
                                }
                            },
                            "period_first_half": {
                                "line_id": 8246126,
                                "moneyline": {
                                    "line_id": 8246126,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8246126,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8246126,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 17,
                                    "affiliate_name": "RedZone",
                                    "affiliate_url": "https://www.redzonesports.bet/en/sports/"
                                }
                            },
                            "period_second_half": {
                                "line_id": 8246126,
                                "moneyline": {
                                    "line_id": 8246126,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8246126,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8246126,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 17,
                                    "affiliate_name": "RedZone",
                                    "affiliate_url": "https://www.redzonesports.bet/en/sports/"
                                }
                            },
                            "period_first_period": {
                                "line_id": 8246126,
                                "moneyline": {
                                    "line_id": 8246126,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8246126,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8246126,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 17,
                                    "affiliate_name": "RedZone",
                                    "affiliate_url": "https://www.redzonesports.bet/en/sports/"
                                }
                            },
                            "period_second_period": {
                                "line_id": 8246126,
                                "moneyline": {
                                    "line_id": 8246126,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8246126,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8246126,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 17,
                                    "affiliate_name": "RedZone",
                                    "affiliate_url": "https://www.redzonesports.bet/en/sports/"
                                }
                            },
                            "period_third_period": {
                                "line_id": 8246126,
                                "moneyline": {
                                    "line_id": 8246126,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8246126,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8246126,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 17,
                                    "affiliate_name": "RedZone",
                                    "affiliate_url": "https://www.redzonesports.bet/en/sports/"
                                }
                            },
                            "period_fourth_period": {
                                "line_id": 8246126,
                                "moneyline": {
                                    "line_id": 8246126,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8246126,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8246126,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 17,
                                    "affiliate_name": "RedZone",
                                    "affiliate_url": "https://www.redzonesports.bet/en/sports/"
                                }
                            }
                        },
                        "18": {
                            "period_full_game": {
                                "line_id": 8231697,
                                "moneyline": {
                                    "line_id": 8231697,
                                    "moneyline_away": 230,
                                    "moneyline_away_delta": 0,
                                    "moneyline_home": -280,
                                    "moneyline_home_delta": 0,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0,
                                    "date_updated": "2019-12-27T04:07:57.846039Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231697,
                                    "point_spread_away": 7,
                                    "point_spread_away_delta": -0.5,
                                    "point_spread_home": -7,
                                    "point_spread_home_delta": 0.5,
                                    "point_spread_away_money": -105,
                                    "point_spread_away_money_delta": 10,
                                    "point_spread_home_money": -115,
                                    "point_spread_home_money_delta": -10,
                                    "date_updated": "2019-12-27T14:31:34.852944Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231697,
                                    "total_over": 56,
                                    "total_over_delta": 0.5,
                                    "total_under": 56,
                                    "total_under_delta": 0.5,
                                    "total_over_money": -110,
                                    "total_over_money_delta": 0,
                                    "total_under_money": -110,
                                    "total_under_money_delta": 0,
                                    "date_updated": "2019-12-27T04:22:41.841985Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 18,
                                    "affiliate_name": "YouWager",
                                    "affiliate_url": "https://www.youwager.eu/sportsbook"
                                }
                            },
                            "period_first_half": {
                                "line_id": 8231697,
                                "moneyline": {
                                    "line_id": 8231697,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231697,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231697,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 18,
                                    "affiliate_name": "YouWager",
                                    "affiliate_url": "https://www.youwager.eu/sportsbook"
                                }
                            },
                            "period_second_half": {
                                "line_id": 8231697,
                                "moneyline": {
                                    "line_id": 8231697,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231697,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231697,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 18,
                                    "affiliate_name": "YouWager",
                                    "affiliate_url": "https://www.youwager.eu/sportsbook"
                                }
                            },
                            "period_first_period": {
                                "line_id": 8231697,
                                "moneyline": {
                                    "line_id": 8231697,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231697,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231697,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 18,
                                    "affiliate_name": "YouWager",
                                    "affiliate_url": "https://www.youwager.eu/sportsbook"
                                }
                            },
                            "period_second_period": {
                                "line_id": 8231697,
                                "moneyline": {
                                    "line_id": 8231697,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231697,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231697,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 18,
                                    "affiliate_name": "YouWager",
                                    "affiliate_url": "https://www.youwager.eu/sportsbook"
                                }
                            },
                            "period_third_period": {
                                "line_id": 8231697,
                                "moneyline": {
                                    "line_id": 8231697,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231697,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231697,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 18,
                                    "affiliate_name": "YouWager",
                                    "affiliate_url": "https://www.youwager.eu/sportsbook"
                                }
                            },
                            "period_fourth_period": {
                                "line_id": 8231697,
                                "moneyline": {
                                    "line_id": 8231697,
                                    "moneyline_away": 0.0001,
                                    "moneyline_away_delta": 0.0001,
                                    "moneyline_home": 0.0001,
                                    "moneyline_home_delta": 0.0001,
                                    "moneyline_draw": 0.0001,
                                    "moneyline_draw_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "spread": {
                                    "line_id": 8231697,
                                    "point_spread_away": 0.0001,
                                    "point_spread_away_delta": 0.0001,
                                    "point_spread_home": 0.0001,
                                    "point_spread_home_delta": 0.0001,
                                    "point_spread_away_money": 0.0001,
                                    "point_spread_away_money_delta": 0.0001,
                                    "point_spread_home_money": 0.0001,
                                    "point_spread_home_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "total": {
                                    "line_id": 8231697,
                                    "total_over": 0.0001,
                                    "total_over_delta": 0.0001,
                                    "total_under": 0.0001,
                                    "total_under_delta": 0.0001,
                                    "total_over_money": 0.0001,
                                    "total_over_money_delta": 0.0001,
                                    "total_under_money": 0.0001,
                                    "total_under_money_delta": 0.0001,
                                    "date_updated": "2019-12-29T20:51:05Z",
                                    "format": "American"
                                },
                                "affiliate": {
                                    "affiliate_id": 18,
                                    "affiliate_name": "YouWager",
                                    "affiliate_url": "https://www.youwager.eu/sportsbook"
                                }
                            }
                        }
                    }
                }
            ],
        };

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
            "url": "https://therundown-therundown-v1.p.rapidapi.com/sports/4/events?include=all_periods&include=scores&offset=0",
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
                    // console.log(value);

                    data = {
                        teams: value.teams,
                        odds: value.sites[0].odds.h2h
                    };
                    // console.log(data);

                    html = "<div class=\"col-12 col-md-4 col-lg-3\"><a href='/game/?gameID=1'>\n" +
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
                        "        </a></div>";

                    gamesNFL.append(html);

                });

            }
        });
    }


});