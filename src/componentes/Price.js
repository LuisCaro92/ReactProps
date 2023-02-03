
const Precio =(props) => {
return (
  
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">{props.title}</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">{props.precio}<small class="text-muted fw-light">{props.muted}</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>{props.li1}</li>
              <li>{props.li2}</li>
              <li>{props.li3}</li>
              <li>{props.li4}</li>
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-outline-primary">Contrata</button>
          </div>
       
      </div>

    
)}

const card =() =>{
return (
    <div class= "row row-cols-1 row-cols-md-3 mb-3 text-center">
         <div class="">
        <Precio  title="Wom" precio="$9990" muted="/mo" li1="35 users included" li2="300 GB of storage" li3="Email support" li4="Help center access"/>
        </div>
        
      
        <div class="">
        <Precio  title="Movistar" precio="$9980" muted="/mo" li1="30 users included" li2= "150 GB of storage" li3="Priority email support" li4="Help center access"/>
        </div>

        <div class="">
        <Precio  title="Entel" precio="$9690" muted="/mo" li1=" Infinity users " li2="200 GB of storage" li3="Phone and email support" li4="Help center access"/>
        </div>
     </div>
      
       


)

}

export default card;