import React, { useState } from 'react';
import parse from 'html-react-parser';

export default function EditorPage() {
    const [html, setHTML] = useState('');
    return (
        <main id='main'>
            <div class="container" data-aos="fade-up">
                <div class="row">
                    <div class="col-lg-6">
                        <h1 style={{textAlign: 'center'}}>Editor</h1>
                        <div style={{textAlign: 'center'}}>
                            <textarea id="editor" class="editor-box" value={html} rows="20" onChange={(e) => setHTML(e.target.value)}></textarea>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <h1 style={{textAlign: 'center'}}>Preview</h1>
                        <div style={{border: '1px solid black', height: '500px', overflowY: 'scroll', overflowX: 'clip'}}>
                            {parse(html)}
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
        </main>
    )
}