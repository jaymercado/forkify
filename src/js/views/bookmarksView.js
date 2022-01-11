import View from './View';
import PreviewView from './previewView';
import icons from 'url:../../img/icons.svg';
import previewView from './previewView';

class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet.';
  _message = '';

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup() {
    return this._data.map(bookmark => PreviewView.render(bookmark, false)).join('');
  }
}

export default new BookmarksView();