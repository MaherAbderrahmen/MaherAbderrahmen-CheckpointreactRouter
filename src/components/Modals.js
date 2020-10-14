import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import './button.css';


function ModalAdd({movies,setMovies}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [posterUrl, setPosterUrl] = useState("");
    const [rate, setRate] = useState("");


   const handleChangeTitle=(e)=>{
     setTitle(e.target.value);
   };


   const handleChangeDescription=(e)=>{
    setDescription(e.target.value);
   };
   const handleChangePosterUrl=(e)=>{
    setPosterUrl(e.target.value);

   };
   const handleChangeRate=(e)=>{
    setRate(e.target.value);

   };

   const handleAdd=(title, description,posterUrl,rate) => {
       console.log(movies)
       console.log(title,description,posterUrl,rate)
    return setMovies([...movies, {title, description,posterUrl,rate }]);

    
   };
   
   

    return (
        <>
            <Button className="Button" variant="primary" onClick={handleShow} >
                Add Movie
        </Button>

            <Modal className="Modal"  show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Movie title : <input type="text" onChange={handleChangeTitle} value={title}/>
                    <br></br>
                    Movie description : <input type="text" onChange={handleChangeDescription} value={description}></input>
                    <br></br>
                    Movie posterUrl : <input type="text" onChange={handleChangePosterUrl} value={posterUrl}></input>
                    <br></br>
                    Movie rate : <input type="text" onChange={handleChangeRate} value={rate}></input>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
            </Button>
                    <Button variant="primary" onClick={()=>handleAdd(title, description,posterUrl, rate)}>
                        add movie
            </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalAdd