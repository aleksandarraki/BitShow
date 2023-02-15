const dataModule = (function () {
    class TvShow {
        constructor(name, id, coverUrl) {
            this.name = name;
            this.id = id;
            this.coverUrl = coverUrl;
        }
    }

    const getShows = () => {
        return fetch('http://api.tvmaze.com/shows')
            .then(function (res) {
                return res.json();
            })
            .then(function (showsRawObjects) {
                return showsRawObjects.map(({ name, id, image }) => new TvShow(name, id, image.original));
            });
    };




    return { getShows }
})();