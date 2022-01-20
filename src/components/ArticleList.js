import React from "react";

function ArticleList(){
return (
    <main>
<Article h3="HIIIII" small="January 1, 2021" p="preview"/>
    </main>
)
}

function Article(props){
    return(
        <React.Fragment>
        <h3>{props.h3}</h3>
        <small>{props.small}</small>
        <p>{props.p}</p>
        </React.Fragment>
    )
}
export default ArticleList;