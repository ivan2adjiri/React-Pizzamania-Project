import React from 'react'

function AboutPizza({title}) {
  return (
    <div className="container my-5">
        <h2 className="text-center mb-3">About Us</h2>
        <div className="row">
            <div className="col-md-6">
                <img src={require('../assets/images/4.jpg')} alt="" className="img-fluid" />
            </div>
            <div className="col-md-6">
               <div>
                <h3>{title}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla officia iusto repellat maxime eum incidunt dolorum nisi culpa delectus soluta, alias illum similique vitae numquam quod labore facere libero optio maiores tempora praesentium fugiat quo quidem nostrum? Nisi amet in commodi ut debitis, fugit velit optio rem assumenda molestias, voluptates cupiditate asperiores provident recusandae eveniet ab sint praesentium error consequuntur neque, eligendi ipsum libero! A quos cupiditate assumenda ipsam accusamus, tenetur, officia inventore praesentium quasi magni in sint. Nam dicta unde sit consequuntur culpa commodi id at ipsum nobis dolore adipisci modi dolorum vero totam, veritatis nulla qui accusantium, ullam molestias odio, doloribus corrupti! Iure sapiente eaque ratione est consequatur alias quis, quisquam ex! Minus quidem cupiditate culpa molestiae cum!
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla officia iusto repellat maxime eum incidunt dolorum nisi culpa delectus soluta, alias illum similique vitae numquam quod labore facere libero optio maiores tempora praesentium fugiat quo quidem nostrum? Nisi amet in commodi ut debitis, fugit velit optio rem assumenda molestias, voluptates cupiditate asperiores provident recusandae eveniet ab sint praesentium error consequuntur neque, eligendi ipsum libero! A quos cupiditate assumenda ipsam accusamus, tenetur, officia inventore praesentium quasi magni in sint. Nam dicta unde sit consequuntur culpa commodi id at ipsum nobis dolore adipisci modi dolorum vero totam, veritatis nulla qui accusantium, ullam molestias odio, doloribus corrupti! Iure sapiente eaque ratione est consequatur alias quis, quisquam ex! Minus quidem cupiditate 
                    
                </p>
               </div>
            </div>
        </div>
    </div>
  )
}

export default AboutPizza