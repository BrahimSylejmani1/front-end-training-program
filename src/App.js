/**
 * Created by LeutrimNeziri on 30/03/2019.
 */
import React, { Suspense } from 'react'
import 'assets/app.css'
import ThemeProvider from 'utils/ThemeProvider'
import {Route, Router, Switch} from 'react-router-dom'
import Factory from 'pages/Factory'
import store, { history } from 'Store'
import { Provider } from 'react-redux'

const App = ({children}) => {
  return (
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        <Router basename={BASE_URL} history={history}>
          <ThemeProvider>
            <Switch>
                <Route path="/lecture/:id/" component={Factory}/>
                <Route path="/" component={Factory}/>
            </Switch>
          </ThemeProvider>
        </Router>
      </Suspense>
    </Provider>
  )
}

export default App
