import React from 'react'

function Modal(props) {
  return (
    <div><div>
    <h3>Məhsul {props.id+1}</h3>
      <label>
        <p>
          Məhsul adı :
        </p>
        <input
          // onChange={props.func}
          // id='image'
          type='text'
          name='itemname'
        />
      </label>
      {/* <label>
        <p>
          Məhsul linki :
        </p>
        <input
          onChange={props.func}
          // id='image'
          type='text'
          // name='image'
        />
      </label>
      <label>
        <p>
          Ölçüləri :
        </p>
        <input
          onChange={props.func}
          // id='image'
          type='text'
          // name='image'
        />
      </label> */}
    </div>
</div>
  )
}

export default Modal