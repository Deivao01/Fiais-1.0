function gerar() {
  const link = document.getElementById('linkAfiliado').value;
  if (!link.includes("https://")) {
    document.getElementById('resultado').innerText = "Link inválido!";
    return;
  }
  const url = new URL(link);
  const presselLink = "https://fiais.pressel.live?ref=" + encodeURIComponent(url.href);
  document.getElementById('resultado').innerText = "Seu link pressel: " + presselLink;
}