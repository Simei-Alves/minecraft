(function(){
  // Cria o container
  var container = document.createElement("div");
  container.style.maxWidth = "960px";
  container.style.margin = "0 auto";

  // Injeta o iframe
  container.innerHTML = `
    <iframe
      src="https://classic.minecraft.net/"
      width="100%"
      height="600"
      frameborder="0"
      allowfullscreen
      loading="lazy">
    </iframe>
    <p style="margin:8px 0 0;font-size:13px;line-height:1.4;text-align:center;">
      <a href="https://classic.minecraft.net/" target="_blank" rel="noopener noreferrer">
        Play Minecraft Classic
      </a>
    </p>
  `;

  // Insere antes do script
  document.currentScript.parentNode.insertBefore(container, document.currentScript);
})();
