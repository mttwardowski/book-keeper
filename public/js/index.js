$(function() {


    $('#get-all-games').on('click', function() {

        var data = {

        };

        $.ajax({
            type: 'GET',
            url: 'https://api.the-odds-api.com/v3/sports/?all=1&apiKey=8df2d0eaf77440d3f9f8ff28e6b35208',
            data: data,
            error: function(e) {
                console.log(e);
            },
            success: function(response) {
                console.log(response);



                let statusBadge = "";
                let team = "";
                let html = "";
                $.each(response.data, function( index, value ) {
                    console.log(value);

                    statusBadge = "<a class=\"badge badge-success-inverted\" href=\"\">Active</a>\n";

                    team = "<div class=\"game-table-teams\">" +
                        "    <h3>Buffalo Bills <span>(10-3)</span></h3>\n" +
                        "   <h3>Chicago Bears <span>(8-7)</span></h3>\n" +
                        "</div>\n";

                    if (!value.active) {
                        statusBadge = "<a class=\"badge badge-danger-inverted\" href=\"\">Not Active</a>\n"
                    }
                    html = "<tr>\n" +
                        "<td>\n" +
                        value.key +
                    "</td>\n" +
                    "\n" +
                    "<td>\n" +
                    "<span>Today</span><span class=\"smaller lighter\">1:52am</span>\n" +
                    "</td>\n" +
                    "<td class=\"text-center\">\n" +
                    statusBadge +
                    "</td>\n" +
                    "<td class=\"nowrap\">\n <div class='game-table-details'>" +
                        "<h3>" + value.details + "</h3>" +
                    " <p>" + value.title + "</p>" +
                    "</div> </td>\n" +
                    " <td class=\"row-actions\">\n" +
                    "  <a href=\"#\"><i class=\"os-icon os-icon-grid-10\"></i></a><a href=\"#\"><i class=\"os-icon os-icon-ui-44\"></i></a><a class=\"danger\" href=\"#\"><i class=\"os-icon os-icon-ui-15\"></i></a>\n" +
                    "</td>\n" +
                    "</tr>";

                    $('#my-games-table-body').append(html);
                });

            }
        });
    });

});