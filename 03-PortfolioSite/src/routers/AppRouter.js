import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Contact, Header, HomePage, NotFoundPage, PortfolioPage, PortfolioItemPage } from '../components/index'

const AppRouter = () => (
  <Router>
      <div>
        <Header/>
        <Switch>
          <Route path="/" component={HomePage} exact={true} />
          <Route path="/contact" component={Contact} />
          <Route path="/portfolio" component={PortfolioPage} exact={true} />
          <Route path="/portfolio/:id?" component={PortfolioItemPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
);

export default AppRouter;