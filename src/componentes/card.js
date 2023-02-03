


const Card =(props) =>{
    return(
<div class="row bg-white  ">

<div class="col-3" style={{width:400,margin:10, textAlign:"center"}}>

  <img src={props.img} class="card-img-top" style={{width:400}}/>
  <div class="card-body">
    <h5 class="card-title  text-primary">{props.title}</h5>
    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional
      content. This content is a little bit longer.</p>
  </div>

</div>
</div>

    )
}


const Cards =() =>{
    return (
<div class="row bg-white  ">

 <div className="col-12 col-md-3 danger-rgb">
            <Card img="https://comparaiso.cl/sites/comparaiso.cl/files/telefonos-claro-825x293.png" title="Claro" text="Primer contenido" />
            </div>
            <div className="col-12 col-md-3" >
            <Card img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm6jQx3VRj1cQ5mb_qqJfW0drBHnQ796VvOA&usqp=CAU" title="Movistar" text="Primer contenido" />
            </div>
            <div className="col-12 col-md-3" >
            <Card img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_j4E2kP8pL4qtsmtfP5ceb_aVxmQbLB3xxg&usqp=CAU" title="Entel" text="Primer contenido" />
            </div>
            <div className="col-12 col-md-3" >
            <Card img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxVBQaIDZ9aPNe2aDoOUa6kUWHOyQHY5vVKg&usqp=CAU" title="Wom" text="Primer contenido" />
            </div>
      
        </div>
)}


export default Cards;