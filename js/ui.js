const uiModule = (function () {


    const renderHomePage = (shows) => {
        const mainContentWrapperEl = document.querySelector('#main-content');

        let html = `<h1>All Tv Shows</h1>

            <div id="show-list">
          `;

        shows.forEach((show) => {
            html += `
               <div class="show-item card pt-3” style=“width: 18rem;“>" id="${show.id}">
                   <img src="${show.coverUrl}" alt="show cover image" class=“card-img-top img-thumbnail/>
                  <p>${show.name}</p>
               </div>
              `;
        });

        html += `</div>`;
        mainContentWrapperEl.innerHTML = html;

    };
    const renderDetailPage = (showDetail) => {



        const detail = document.getElementById("main-content");

        const seasonList = showDetail.seasons.map(item => {
            return `<li>${item}</li>`
        });
        const castList = showDetail.cast.map(item => `<li>${item}</li>`)

        const seasonCastDiv = `<div class="ms-sm-1 ms-md-3">
        <h3>Seasons</h3>
         <ul>${seasonList.join("")}</ul>
         <h3>Cast</h3>
         <ul>${castList.join("")}</ul>
        </div>`
        const pageImg = `<div class="cover"><img src="${showDetail.coverUrl}" alt="show cover image"/></div>`;

        const mainDiv = `<div class"container"><h1>${showDetail.name}</h1>
        <div class="d-flex flex-column flex-md-row ">
        ${pageImg}
        ${seasonCastDiv}
        </div>
        <h3>Show Details</h3>
        <div clas="show-detail"><p>${showDetail.summary}</p></div>
        </div>`
        detail.innerHTML = mainDiv;


    }


    return { renderHomePage, renderDetailPage, };
})();