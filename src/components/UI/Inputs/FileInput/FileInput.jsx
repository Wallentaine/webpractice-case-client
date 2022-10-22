import React, {useRef} from 'react';
import classes from './FileInput.module.css'
import img from '../../../../assets/skrepka.svg'
const FileInput = ({file, setFile, title, ...props}) => {


    const fileUploadRef = useRef()

    const onFileUpload = (e) => {
        if (e.target.files[0]){
            setFile(e.target.files[0])
        }
    }
    return (
        <div
            className={classes.fileInput} {...props}
            onClick={() => fileUploadRef.current.click()}
        >
            <div className={classes.title}>{title}</div>

            <input
                ref={fileUploadRef}
                className={classes.fileUpload}
                type="file"
                onChange={onFileUpload}
                {...props}
            />

            <span className={classes.fileName}>{file.name}</span>
            <img src={img} />

        </div>
    );
};

export default FileInput;