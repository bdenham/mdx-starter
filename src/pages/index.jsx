import React from "react";
import {Link} from "gatsby";

const IndexPage = () => (
    <>
        <h1>MDX Example</h1>
        <p>Links</p>
        <ul>
            <li>
                <Link to="/mermaid/">
                    Mermaid MDX test page.
                </Link>
            </li>
        </ul>
    </>
);

export default IndexPage;

export const Head = () => <title>Index Page</title>;
