const Carrusel =() =>{
    return(
        <div id="carouselExampleAutoplaying" class="carousel slide mt-5" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZek88yWrTNqNYhwTCMo9vcglayNxH2w23lw&usqp=CAU"
                    class=" img-fluid  d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
                <img src="https://ww2.movistar.cl/home_files/slider/2023/01/bh_renovacion_equipos_enero_desktop.webp"
                    class=" img-fluid  d-block w-100 " alt="..."/>
            </div>
            <div class="carousel-item">
                <img src="https://www.pincenter.cl/img/vigentes/Campana-Entel-Preunic-Feb2016.jpg"
                    class=" img-fluid  w-100" />
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>

    )
}
export default Carrusel;