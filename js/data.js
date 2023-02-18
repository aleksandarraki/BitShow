const dataModule = (function () {
    class TvShow {
        constructor(name, id, coverUrl) {
            this.id = id;
            this.name = name;
            this.coverUrl = coverUrl;
        }
    }

    class ShowDetail extends TvShow {
        constructor(name, id, coverUrl, summary, seasons, cast) {
            super(name, id, coverUrl);
            this.summary = summary;
            this.seasons = seasons;
            this.cast = cast;
        }
    }

    const getShows = () => {
        return fetch('http://api.tvmaze.com/shows')
            .then(function (res) {
                return res.json();
            })
            .then(function (showsRawObjects) {
                return showsRawObjects.slice(0, 51).map(({ name, id, image }) => new TvShow(name, id, image.original));
            });
    };

    const searchShow = (term) => {
        return fetch(`https://api.tvmaze.com/search/shows?q=${term}`)
            .then(function (res) {
                return res.json();
            })
            .then(function (showsRawObjects) {
                return showsRawObjects.map(({ show }) => {
                    const { name, id, image } = show;
                    const imageToUse = image ? image.original : '';
                    return new TvShow(name, id, imageToUse);
                });
            });
    };

    const getShowDetail = (id) => {
        return fetch(`http://api.tvmaze.com/shows/${id}?embed[]=seasons&embed[]=cast`).then(function (res) {
            return res.json();
        }).then(function (show) {
            const summary = show.summary;
            const imageToUse = show.image ? show.image.original : '';
            const seasons = [];
            const cast = [];
            show._embedded.seasons.forEach(({ premiereDate, endDate }) => {
                const seasonString = (premiereDate && endDate)
                    ? `${premiereDate} - ${endDate}`
                    : "Data Not Available";
                seasons.push(seasonString);
            });
            show._embedded.cast.forEach(({ person }) => {
                cast.push(person.name);
            });

            return new ShowDetail(show.name, show.id, imageToUse, summary, seasons, cast.slice(0, 7))
        })
    }

    return { getShows, searchShow, getShowDetail };
})();