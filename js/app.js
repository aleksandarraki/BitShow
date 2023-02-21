(function (data, ui) {
    const textSearch = $('#textsearch');
    const home = $('#home-button');
    const mainCOntentEl = $("#main-content");
    let searchText = '';
    // let isDetail = false;
    const getData = () => {
        data.getShows().then((shows) => {
            ui.renderHomePage(shows);
        });
    }



    getData();


    textSearch.keyup(function () {
        searchText = this.value;
    })

    home.on('click', function (event) {
        getData();
        textSearch.val('')

    });

    mainCOntentEl.on("click", function (event) {
        // console.log("cao");
        const targetEl = event.target.parentElement;
        console.log(event.target.parentElement);
        if (!targetEl.classList.contains("show-item")) {
            return;
        }
        const id = targetEl.getAttribute("id");
        // console.log(id);
        data.getShowDetail(id).then(show => {
            ui.renderDetailPage(show);
            isDetail = true;
        })
    })


    textSearch.autocomplete({
        source: function (request, response) {
            data.searchShow(searchText).then((shows) => {
                response($.map(shows, function (item) {
                    return {
                        value: item.id,
                        label: item.name
                    }
                }))
            });
        },
        select: function (event, uiElement) {
            data.getShowDetail(uiElement.item.value).then(show => {
                ui.renderDetailPage(show);
                // isDetail = true;
            })

            uiElement.item.value = uiElement.item.label;
            return uiElement.item.label;
        }
    });










})(dataModule, uiModule);