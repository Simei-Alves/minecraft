const div = document.createElement("div");
div.className = "minecraft-embed";
div.style.maxWidth = "960px";
div.style.margin = "0 auto";

div.innerHTML = `
  <iframe
    src="https://classic.minecraft.net/"
    width="100%"
    height="600"
    frameborder="0"
    allowfullscreen
    loading="lazy"
  ></iframe>
`;

document.body.appendChild(div);
