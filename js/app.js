(function (data, ui) {
    data.getShows().then((shows) => {
        ui.renderHomePage(shows);
    })
})(dataModule, uiModule);