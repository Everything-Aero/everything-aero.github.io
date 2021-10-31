import React from 'react';
import {Route, Switch} from 'react-router-dom';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import BlogPage from './pages/BlogPage';
import ContactUsPage from './pages/ContactUsPage';
import NewsArticlePage from './pages/NewsArticlePage';
import BlogArticlePage from './pages/BlogArticlePage';
import AcademicsPage from './pages/AcademicsPage';
import NewsPage from './pages/NewsPage';
import EditorPage from './pages/EditorPage';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header/>

      <Route exact path='/'>
        <HomePage/>
      </Route>
      
      <Switch>
        <Route path='/blog/:blogid'>
          <BlogArticlePage/>
        </Route>
        <Route path='/blog' component={BlogPage}/>
      </Switch>

      <Switch>
        <Route path='/news/:newsid'>
          <NewsArticlePage/>
        </Route>
        <Route path='/news' component={NewsPage}/>
      </Switch>

      <Route path='/editor'>
        <EditorPage/>
      </Route>

      <Route path='/academics'>
        <AcademicsPage/>
      </Route>
      <Route path='/about'>
        <AboutUsPage/>
      </Route>
      <Route path='/contact'>
        <ContactUsPage/>
      </Route>

      <Footer/>
    </>
  );
}