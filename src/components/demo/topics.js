import React from 'react';
import './topics.css';


export default class TopicsPage extends React.Component {
    render() {
        return (
            <section className="topic-page card">
                <h3 className="topic-header">Topics to Learn</h3>
                <ul className="topics-todo">
                    <li>Introduction</li>
                    <li>Rules of Programming language</li>
                    <li>Working With Data</li>
                    <li>Managing Program Flow</li>
                    <li>Making things Modular</li>
                    <li>Programming in the Real world</li>
                </ul>





            </section>
        )
    }
} 