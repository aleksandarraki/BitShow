const uiModule = (function () {
    const mainContentWrapperEl = document.getElementById("main-content");


    const renderHomePage = (shows) => {
        let html = `
        <h1>All TV Shows</h1>
        <div id="show-list">
        `;
        shows.forEach((show) => {
            html += `
                <div class="show-item" id="${show.id}">
                <img src="${show.coverUrl}" alt="cover-img"/>
                <p>${show.name}</p>
                </div>
            `;

        });

        html += `</div>`;
        mainContentWrapperEl.innerHTML = html;
    };


    return { renderHomePage };
})();