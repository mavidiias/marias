<script>
    let { img, title, type, text, botao } = $props();
</script>
  <div class="card h-100 zoom" style="width: 18rem;">
    <img src={img} class="card-img-top" alt="invisibility" width="200px" />
    <div class="card-body">
      <h5 style="color: #4682B4;" class="card-title">{title}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">{type}</h6>
      <p class="card-text">{text}</p>
      <a href={botao} aria-label="descrição" class="stretched-link"></a>
    </div>
  </div>

  <style>
    .zoom {
      padding: 0px;
      transition: transform .3s; /* Animation */
      margin: 0 auto;
    }
    
    .zoom:hover {
      transform: scale(1.05); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
    }
    </style>
    
