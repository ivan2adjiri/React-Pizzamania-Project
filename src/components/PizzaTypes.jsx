import React from 'react'

function PizzaTypes({title}) {
  return (
    <div className="container my-5">
        <h2 className="text-center">{title}</h2>
        <div className="row">
            <div className="col-md-3">
                <div className="">
                    <div className="card" style={{width: '18rem'}}>
                        <img src={require('../assets/images/1.jpg')} className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nemo quod dicta, voluptatem cumque iure, totam maxime itaque fugiat eaque, culpa asperiores quae dignissimos!</p>
                        </div>
                      </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="mx-2">
                    <div className="card" style={{width: '18rem'}}>
                        <img src={require('../assets/images/2.jpg')} className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nemo quod dicta, voluptatem cumque iure, totam maxime itaque fugiat eaque, culpa asperiores quae dignissimos!</p>
                        </div>
                      </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="mx-3">
                    <div className="card" style={{width: '18rem'}}>
                        <img src={require('../assets/images/3.jpg')} className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nemo quod dicta, voluptatem cumque iure, totam maxime itaque fugiat eaque, culpa asperiores quae dignissimos!</p>
                        </div>
                      </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="mx-4">
                    <div className="card" style={{width: '18rem'}}>
                        <img src={require('../assets/images/1.jpg')} className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nemo quod dicta, voluptatem cumque iure, totam maxime itaque fugiat eaque, culpa asperiores quae dignissimos!</p>
                        </div>
                      </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default PizzaTypes