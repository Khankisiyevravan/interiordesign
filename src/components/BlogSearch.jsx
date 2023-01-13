import React from 'react'
import { useParams } from 'react-router-dom'
function BlogSearch() {
  const {q} = useParams();
  return (
    <div>
        <p>Axtaris edilen Bloglar burda olacaq filterle</p>
        <br/>
        Axtaris edilen soz :{q}
    </div>
  )
}

export default BlogSearch