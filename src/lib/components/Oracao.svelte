<script>
    let {title, text, botao } = $props();
</script>
   <div class="card zoom" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">{title}</h5>
      <p class="card-text">{text}</p>
      <a href={botao} aria-label="descreção" class="stretched-link"></a>
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
    