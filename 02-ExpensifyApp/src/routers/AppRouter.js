import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Header, HelpPage, NotFoundPage, ExpenseDashboardPage, AddExpensePage, EditExpensePage } from '../components/index'

const AppRouter = () => (
  <Router>
      <div>
        <Header/>
        <Switch>
          <Route path="/" component={ExpenseDashboardPage} exact={true} />
          <Route path="/create" component={AddExpensePage} />
          <Route path="/edit/:id?" component={EditExpensePage} />
          <Route path="/help" component={HelpPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
);

export default AppRouter;