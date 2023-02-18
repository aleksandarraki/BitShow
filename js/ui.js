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
        let html = `<h1>${showDetail.name}</h1>`;
        let seasonList = `<h3>Seasons</h3><ul>`;
        showDetail.seasons.forEach(item => {
            seasonList += `<li>${item}</li>`
        })

        seasonList = `${seasonList}</ul>`
        html += seasonList;

        let castList = `<h3>Cast</h3><ul>`;

        showDetail.cast.forEach(item => {
            castList += `<li>${item}</li>`;
        })

        html += castList;
        html += `<img src="${showDetail.coverUrl}" alt="show cover image"/>`
        html += `<h3>Show details</h3>`;
        html += `<p>${showDetail.summary}</p>`;
        detail.innerHTML = html;
    }


    return { renderHomePage, renderDetailPage, };
})();