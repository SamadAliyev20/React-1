import React from 'react'

const UserItem = (props) => {
   const { id,image,title,price} = props.pr
  return (

                <div className="col-lg-4 cards my-3">
                <div className="card mycard">
                <img className="card-img-top" src={image} alt="Card image cap"/>
                 <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{price} AZN</p>
                  </div>
                </div>
                </div>
  )
}

export default UserItem