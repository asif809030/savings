import React, { useState } from 'react'
import Comments from './comments'
import Basic from './basic'

const Form = () => {

const [allData, setAllData] = useState([]);

console.log(allData,"Data");

const [formData, setFormData] = useState({
  name:"",
  comment:"",
});

const handleChange = (e) => {
  const{name,value} = e.target;
  setFormData((prevData) => ({
    ...prevData,
    [name]:value,
  }));
};

const handleSubmit = (e) => {
  e.preventDefault();
  setAllData([...allData, formData]);
};

  return (
  <>

      <div className='container'>
        
        <form onSubmit={handleSubmit}>
        <fieldset className='border border-dark px-4 py-2 rounded-3'>
        <legend className='float-none w-auto px-2'>Comment Box</legend>

          <input  className='form-control mb-2' 
                  placeholder='Enter Your Name' 
                  value={formData.name}
                  onChange={handleChange} 
                  type='text'
                  name='name'
                  required/>

          <textarea className='form-control mb-3' 
                    rows="4" 
                    cols="50" 
                    placeholder='Enter Your Comments Here'
                    value={formData.comment} 
                    onChange={handleChange} 
                    type='text'
                    name='comment'
                    required/>

          <button className='btn btn-primary mb-4'>Submit</button>
        
        
        </fieldset>
        </form>
      </div>

      <Comments data={allData} />
      
  
  
  </>
  )
}

export default Form


