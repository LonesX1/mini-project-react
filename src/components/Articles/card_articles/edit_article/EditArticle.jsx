import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { updateArticle } from '../../../../api/modules/articles/updateArticle';

const EditArticle = ({article, getArticles}) => {
    const [titleArticle, setTitle] = useState(article.title);
    const [bodyArticle, setBody] = useState(article.body);
    const [descriptionArticle, setDescription] = useState(article.description);
    const [tagListArticle, setTagList] = useState(article.tagList);

    const handleClickEditArticle = async() => {
        const editedPost = {
            "title": titleArticle,
            "body": bodyArticle,
            "description": descriptionArticle,
            "tagList": tagListArticle,
        };

        const res = await updateArticle(editedPost, article.slug);

        if (res !== "error") {
            getArticles();
        };
    };

    return ( 
        <div className="edit-article">
            <TextField
                sx={{mb: 1}}
                id="outlined-basic" 
                label="Title" 
                variant="outlined"
                defaultValue={article.title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
                sx={{mb: 1}}
                id="outlined-basic" 
                label="Description" 
                variant="outlined"
                defaultValue={article.description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <TextField
                sx={{mb: 1}}
                id="outlined-multiline-flexible"
                label="Body" 
                variant="outlined"
                multiline
                maxRows={4}
                defaultValue={article.body}
                onChange={(e) => setBody(e.target.value)}
            />
            <TextField
                sx={{mb: 1}}
                id="outlined-basic" 
                label="Tags" 
                variant="outlined"
                defaultValue={article.tagList}
                onChange={(e) => setTagList(e.target.value)}
            />
            <Button onClick={handleClickEditArticle}>Edit</Button>
        </div>
     );
}
 
export default EditArticle;