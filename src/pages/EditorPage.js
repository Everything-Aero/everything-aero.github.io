import React, { useEffect, useState } from 'react';
import parse from 'html-react-parser';
import NewWindow from 'react-new-window';
import { useParams, useLocation, useHistory } from 'react-router';
import BreadCrumbs from '../components/BreadCrumbs';
import { breadcrumbs, server_url } from '../links';
import NewsSidebar from '../components/NewsSidebar';
import axios from 'axios';

export default function EditorPage() {
    const [window, setWindow] = useState(false);
    const [article, setArticle] = useState({
        _id: '',
        title: '',
        subtitle: '',
        author: '',
        description: '',
        article: '',
        posterSrc: '',
        url: ''
    });
    const {articletype} = useParams();
    const query = new URLSearchParams(useLocation().search);
    const url = query.get('url');
    const history = useHistory();

    useEffect(() => {
        if(url === null) {
            axios.get('/' + articletype + '-article.html')
            .then(res => {
                setArticle({article: res.data})
            })
            .catch(err => {
                console.error(err)
            })
        }
        else {
            axios.get(server_url + '/' + articletype + '/url/' + url)
            .then(res => {
                if(res.status === 200 && res.data['article'] !== undefined)
                    setArticle(res.data)
            })
            .catch(err => {
                console.error(err)
            })
        }
    }, [articletype, url])

    const handleChange = (prop) => (event) => {
        setArticle({...article, [prop]: event.target.value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(url === null) {
            axios.post(server_url + '/' + articletype, article)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.error(err)
            })
        }
        else {
            axios.put(server_url + '/' + articletype + '/' + article._id, article)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.error(err)
            })
        }
        history.push('/' + articletype);
        history.go(0);
    }
    return (
        <main id='main'>
            <BreadCrumbs crumbs={[breadcrumbs.home, breadcrumbs.news, {label: 'Editor'}]}/>
            {
                articletype === "news" && (
                <section id="news" class="news">
                    <div class="container" data-aos="fade-up">
                        <div class="row">
                            <div class="col-lg-4">
                                <label class="label">Title</label><br/>
                                <input type='text' value={article.title} onChange={handleChange('title')}/>
                            </div>
                            <div class="col-lg-4">
                                <label class="label">Author</label><br/>
                                <input type='text' value={article.author} onChange={handleChange('author')}/>
                            </div>
                            <div class="col-lg-4">
                                <label class="label">Description</label><br/>
                                <input type='text' value={article.description} onChange={handleChange('description')}/>
                            </div>
                        </div>
                        <br/>
                        <div class="row">
                            <div class="col-lg-6">
                                <label class="label">Link to poster image</label><br/>
                                <input type='text' value={article.posterSrc} onChange={handleChange('posterSrc')}/>
                            </div>
                            <div class="col-lg-6">
                                <label class="label">Preferred slug/URL ender (must be unique)</label><br/>
                                <input type='text' value={article.url} onChange={handleChange('url')}/>
                            </div>
                        </div>
                        <br/>
                        <button onClick={() => setWindow(true)}>Edit this</button>
                        <button onClick={handleSubmit}>Submit</button>
                        <div class="row">
                            <div class="col-lg-8 entries">
                                {parse(article.article)}
                            </div>
                            <NewsSidebar/>
                        </div>
                    </div>
                </section>
                )
            }
            {
                articletype === "blog" && (
                <section id="blog" class="blog">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-3">
                                <label class="label">Title</label><br/>
                                <input type='text' value={article.title} onChange={handleChange('title')}/>
                            </div>
                            <div class="col-lg-3">
                                    <label class="label">Subtitle</label><br/>
                                    <input type='text' value={article.subtitle} onChange={handleChange('subtitle')}/>
                                </div>
                            <div class="col-lg-3">
                                <label class="label">Author</label><br/>
                                <input type='text' value={article.author} onChange={handleChange('author')}/>
                            </div>
                            <div class="col-lg-3">
                                <label class="label">Description</label><br/>
                                <input type='text' value={article.description} onChange={handleChange('description')}/>
                            </div>
                        </div>
                        <br/>
                        <div class="row">
                            <div class="col-lg-4">
                                <label class="label">Link to poster image</label><br/>
                                <input type='text' value={article.posterSrc} onChange={handleChange('posterSrc')}/>
                            </div>
                            <div class="col-lg-4">
                                <label class="label">Preferred slug/URL ender (must be unique)</label><br/>
                                <input type='text' value={article.url} onChange={handleChange('url')}/>
                            </div>
                            <div class="col-lg-4">
                                <button onClick={() => setWindow(true)}>Edit this</button>
                                <button onClick={handleSubmit}>Submit</button>
                            </div>
                        </div>
                    </div>
                    <div class="blogpage-inner">
                        {parse(article.article)}
                    </div>
                </section>
                )
            }
            {
                window && (<NewWindow
                    onBlock={() => alert('Please allow popups for this website')}
                    onUnload={() => setWindow(false)}
                    title="Preview"
                    features={{
                        width: 1000,
                        height: 600
                    }}
                >   
                    <div class="container">
                        <div class="col-lg-12">
                            <h1 style={{textAlign: 'center'}}>Editor</h1>
                            <div style={{textAlign: 'center', height: '500px', overflowY: 'scroll', overflowX: 'clip'}}>
                                <textarea id="editor" class="editor-box" value={article.article} rows="10" onChange={handleChange('article')}></textarea>
                            </div>  
                        </div>
                    </div>
                </NewWindow>)
            }
            <br/>
            <br/>
        </main>
    )
}