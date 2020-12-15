import React from 'react'
import './Blog.scss';

export default function BlogsWrapper() {
    return (
        <div className="blog-wrapper">
            <div className="blog">
                <a href="/blog"><h2>Blog Title</h2></a>
                <span>December 1, 2020</span>
                <div className="tag">
                    <a href="/blog">Frontend</a>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita commodi provident reiciendis tempore et odio deserunt, sint laborum temporibus, a, cupiditate molestiae animi delectus veritatis rem? Quam non adipisci nisi!</p>
            </div>
            <div className="blog">
                <a href="/blog"><h2>Another Blog Title</h2></a>
                <span>December 10, 2020</span>
                <div className="tag">
                    <a href="/blog">Backend</a>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita commodi provident reiciendis tempore et odio deserunt, sint laborum temporibus, a, cupiditate molestiae animi delectus veritatis rem? Quam non adipisci nisi!</p>
            </div>
        </div>
    )
}
