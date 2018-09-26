export default class SearchComponent {
    constructor(onClick) {
        const searchContainer = document.getElementById('search-component');

        searchContainer.innerHTML += `
                <input id="input-search" type="text"/>
                <button id="btn-search">Search</button></br>
            `;
        this.onClick = onClick;
        this.button = document.getElementById('btn-search');
        this.criterionSearch = document.getElementById('input-search');

        this.button.onclick = () => {
            const criterionSearch = this.criterionSearch.value;

            this.onClick(criterionSearch);
        };
    }
}
