import dva from "dva";
import App from "./App";
import {BrowserRouter} from "react-router-dom"
import { createBrowserHistory as createHistory } from 'history';

const app = dva({
  history: createHistory()
});
app.model(require('./models/user').default)

app.router(() =>
  <BrowserRouter>
    <App />
</BrowserRouter>
)

app.start('#root')
