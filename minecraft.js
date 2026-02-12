(function() {

  var container = document.createElement("div");
  container.style.maxWidth = "960px";
  container.style.margin = "40px auto";

  container.innerHTML = `
    <iframe 
      src="https://classic.minecraft.net/" 
      width="100%" 
      height="600" 
      frameborder="0" 
      allowfullscreen>
    </iframe>

    <p style="text-align:center;margin-top:10px;">
      <a href="https://classic.minecraft.net/" target="_blank">
        Play Minecraft Classic
      </a>
    </p>
  `;

  document.currentScript.parentNode.insertBefore(container, document.currentScript);

})();
