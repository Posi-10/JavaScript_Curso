import './style.css';
import javascriptLogo from './javascript.svg';
import {
  asyncAwait2Component,
  asyncAwaitComponent,
  asyncComponent,
  callbacksComponent,
  callbacksHellComponent,
  environmentsComponent,
  forAwaitComponent,
  generatiorFunctionsAsyncComponent,
  generatiorFunctionsComponent,
  promiseAllComponent,
  promiseComponent,
  promiseHellComponent,
  promiseRaceComponent
} from './src/concepts';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      
    </div>
  </div>
`;

const element = document.querySelector( '.card' );

// 1 -------> environmentsComponent( element );
// 2 -------> callbacksComponent( element );
// 2.1 -----> callbacksHellComponent( element );
// 3 -------> promiseComponent( element );
// 3.1 -----> promiseHellComponent( element );
// 3.2 -----> promiseAllComponent( element );
// 3.3 -----> promiseRaceComponent( element );
// 4 -------> asyncComponent( element );
// 5 -------> asyncAwaitComponent( element );
// 5.1 -----> asyncAwait2Component( element );
// 5.2 -----> forAwaitComponent( element );
// 6 -------> generatiorFunctionsComponent( element );
generatiorFunctionsAsyncComponent( element );