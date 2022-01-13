import View from './view';
import icons from 'url:../../img/icons.svg';

class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = `No bookmarks yet.`;

  _generateMarkup() {
    //console.log(this._data);
    return this._data.map(this._generateMarkupPreview).join('');
  }

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkupPreview(result) {
    return `
    <li class="preview">
    <a class="preview__link preview__link--active" href="#${result.id}">
      <figure class="preview__fig">
        <img src="${result.image}" alt="Test" />
      </figure>
      <div class="preview__data">
        <h4 class="preview__title">${result.title}</h4>
        <p class="preview__publisher">${result.publisher}</p>
        <div class="preview__user-generated">
          <svg>
            <use href="src/img/${icons}#icon-user"></use>
          </svg>
        </div>
      </div>
    </a>
  </li>`;
  }
}

export default new BookmarksView();
