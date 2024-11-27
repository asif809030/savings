import React, { useState } from 'react';
import EditBox from './editbox';

const Comments = ({data}) => {

  const [show, setShow] = useState(false);
  const [editData, setEditData] =useState(null);

  const toggle = (comment,index) => {
    setEditData({comment,index});
    setShow(!show);
    };

    const formatTime = (date) => {
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();
      const ampm = hours >= 12 ? 'pm' : 'am';
      
      const formattedHours = hours % 12 || 12;
      const formattedMinutes = String(minutes).padStart(2, '0');
      const formattedSeconds = String(seconds).padStart(2, '0');
    
      const finalOutput = `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${ampm}`;

      return finalOutput;
    }
    const currentTime = new Date();
    
  return (
    <div>
    {data && data.length > 0 && data?.map((item, index) => {
      return(
        <div className='container' key={index}>
        <div className='bg-light border border-info rounded-4  mt-3 p-3' >
          
          <div className='d-flex justify-content-between'>
          <span><span className='fw-semibold'>Name: </span>{item.name}</span>
          <span className='badge bg-secondary p-2'>{formatTime(currentTime)}</span>
          </div>

          <div className='d-flex justify-content-between mt-2'>
          <span><span className='fw-semibold'>Comment: </span>{item.comment}</span>
            <div>
            <button className='btn btn-warning' onClick={()=>toggle(item.comment,index)}>Edit</button>
            <button className='btn btn-danger ms-2'>Delete</button>
            </div>
          </div>
        </div>

        </div>


      )

      })
      }
      <EditBox data={editData?.comment} index={editData?.index} show={show} toggle={toggle} />
      
    
    </div>
  )
}

export default Comments;