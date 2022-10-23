import React from 'react';
import classes from './TextArea.module.css'

const TextArea = ({props, title, text, setText, style}) => {
    return (
        <div className={classes.textAreaBlock} style={style}>
            <textarea
                className={classes.textArea}
                {...props}
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <div className={classes.title}>
                {title}
            </div>
        </div>
    );
};

export default TextArea;