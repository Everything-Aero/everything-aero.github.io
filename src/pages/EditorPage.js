import React, { useEffect, useState } from 'react';
import parse from 'html-react-parser';
import NewWindow from 'react-new-window';
import { useParams } from 'react-router';
import BreadCrumbs from '../components/BreadCrumbs';
import { breadcrumbs } from '../links';
import NewsSidebar from '../components/NewsSidebar';
import axios from 'axios';

export default function EditorPage() {
    // const [html, setHTML] = useState('');
    const [article, setArticle] = useState({
        title: '',
        author: '',
        description: '',
        article: '',
        posterSrc: '',
        url: ''
    })
    const {articletype} = useParams();
    useEffect(() => {
        axios.get('/' + articletype + '-article.html')
            .then(res => {
                setArticle({...article, article: res.data})
            })
            .catch(err => {
                console.error(err)
            })
    }, [articletype, article])
    const handleChange = (prop) => (event) => {
        console.log(event.target.value)
        setArticle({...article, [prop]: event.target.value});
        console.log(article);
    }
    return (
        <main id='main'>
            <BreadCrumbs crumbs={[breadcrumbs.home, breadcrumbs.news, {label: 'Editor'}]}/>
            {
                articletype === "news" && (
                <section id="news" class="news">
                    <div class="container" data-aos="fade-up">
                        <div class="row">
                            <div class="col-lg-3">
                                <label class="label">Title</label>&nbsp;
                                <input type='text' value={article.title} onChange={handleChange('title')}/>
                            </div>
                            <div class="col-lg-3">
                                <label class="label">Author</label>&nbsp;
                                <input type='text' value={article.author} onChange={handleChange('author')}/>
                            </div>
                            <div class="col-lg-3">
                                <label class="label">Description</label>&nbsp;
                                <input type='text' value={article.description} onChange={handleChange('description')}/>
                            </div>
                        </div>
                        <br/>
                        <div class="row">
                            <div class="col-lg-6">
                                <label class="label">Link to poster image</label>&nbsp;
                                <input type='text' value={article.posterSrc} onChange={handleChange('posterSrc')}/>
                            </div>
                            <div class="col-lg-6">
                                <label class="label">Preferred slug/URL ender (must be unique)</label>&nbsp;
                                <input type='text' value={article.url} onChange={handleChange('url')}/>
                            </div>
                        </div>
                        <br/>
                        <div class="row">
                            <div class="col-lg-8 entries">
                                {parse(article.article)}
                            </div>
                            <NewsSidebar/>
                            <NewWindow
                                onBlock={() => alert('Please allow popups for this website')}
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
                            </NewWindow>
                        </div>
                    </div>
                </section>
                )
            }
            {
                articletype === "blog" && (
                <section id="blog" class="blog">
                    <div class="blogpage-inner">
                        {parse(article.article)}
                    </div>
                    <NewWindow
                        onBlock={() => alert('Please allow popups for this website')}
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
                    </NewWindow>
                </section>
                )
            }
            {/* <div class="container" data-aos="fade-up">
                <div class="row">
                    <div class="col-lg-12">
                        <h1 style={{textAlign: 'center'}}>Preview</h1>
                        <div style={{border: '1px solid black', height: '500px', overflowY: 'scroll', overflowX: 'clip'}}>
                            {parse(html)}
                        </div>
                        <button onClick={() => setWindow(true)}>Edit this</button>
                    </div>
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
                                        <textarea id="editor" class="editor-box" value={html} rows="10" onChange={(e) => setHTML(e.target.value)}></textarea>
                                    </div>  
                                </div>
                            </div>
                        </NewWindow>)
                    }
                </div>
            </div> */}
            <br/>
            <br/>
        </main>
    )
}