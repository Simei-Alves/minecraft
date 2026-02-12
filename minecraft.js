(function() {
  // Cria o container centralizado
  var container = document.createElement("div");
  container.style.maxWidth = "960px";
  container.style.margin = "40px auto";
  container.style.textAlign = "center";
  container.style.fontFamily = "Arial, sans-serif";

  // Mensagem explicativa
  var message = document.createElement("p");
  message.textContent = "Clique no botão abaixo e, dentro do jogo, clique novamente para ativar o rato.";
  message.style.fontSize = "14px";
  message.style.color = "#333";
  message.style.marginBottom = "12px";
  container.appendChild(message);

  // Cria botão de clique
  var button = document.createElement("button");
  button.textContent = "Carregar Minecraft Classic";
  button.style.padding = "12px 24px";
  button.style.fontSize = "16px";
  button.style.cursor = "pointer";
  button.style.borderRadius = "6px";
  button.style.border = "none";
  button.style.backgroundColor = "#1E90FF";
  button.style.color = "#fff";
  button.style.marginBottom = "12px";

  container.appendChild(button);
  document.currentScript.parentNode.insertBefore(container, document.currentScript);

  // Evento do botão
  button.addEventListener("click", function() {
    // Remove botão e mensagem
    button.remove();
    message.remove();

    // Cria o iframe do Minecraft
    var iframe = document.createElement("iframe");
    iframe.src = "https://classic.minecraft.net/";
    iframe.width = "100%";
    iframe.height = "600";
    iframe.frameBorder = "0";
    iframe.allowFullscreen = true;
    iframe.loading = "lazy";

    container.appendChild(iframe);

    // Attribution
    var attribution = document.createElement("p");
    attribution.style.margin = "8px 0 0";
    attribution.style.fontSize = "13px";
    attribution.style.lineHeight = "1.4";
    attribution.style.textAlign = "center";
    attribution.innerHTML = '<a href="https://classic.minecraft.net/" target="_blank" rel="noopener noreferrer">Play Minecraft Classic</a>';

    container.appendChild(attribution);
  });
})();
