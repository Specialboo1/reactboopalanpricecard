import React from "react";
export default function Pricecard(props)
{
return ( 
 <div class="col-12 col-md-4 col-lg-4 columns">
          <div class="card h-100 shadow-lg">
            <div class="card-body">
              <div class="text-center p-3">
                <h5 class="card-title">{props.data.packagename}</h5>
                <span class="h2">{props.data.currency}{props.data.price}</span>{props.data.period}
                <br></br>
              </div>    
            </div>
            <ul class="fa-ul">
                {
                    props.data.features.map((plan)=>{
                        return <li className={plan.isenabled ? '' : "text-muted"}><span class="fa-li"><i class={`fas ${plan.isenabled ? 'fa-check' : 'fa-times'}`}></i></span>
                        {plan.isbold ? <strong>{plan.name}</strong> : <span>{plan.name}</span>}
                        </li>
                    })
                }              
            </ul>
            <div class="card-body text-center">
              <button class="btn btn-outline-primary btn-lg" onClick={()=>props.handleselect(props.data.packagename)}>Select</button>
            </div>
          </div>
        </div>)
}