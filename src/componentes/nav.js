const Nav =() =>{

    return (  
<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark mb-5" style={{ padingBottom:100}}>
    <div class="container-fluid">
      <h1 class="navbar-brand" href="#">EligeTuCompañia</h1>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse ma-auto" id="navbarCollapse">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <a class="nav-link active " aria-current="page" href="https://ww2.movistar.cl/">Movistar</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active  " aria-current="page" href="https://www.clarochile.cl/">Claro</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active " aria-current="page" href="https://www.wom.cl/">Wom</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="https://www.entel.cl/">Entel</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Busca tu compañia" aria-label="Search"/>
          <button class="btn btn-outline-success" type="submit">Busca</button>
        </form>
      </div>
    </div>
  </nav>
  
    )
    }
    export default Nav;
