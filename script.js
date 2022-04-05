const copyText = () => {
    navigator.clipboard.writeText(document.getElementById("code").textContent);
    
}

document.getElementById("copy-code").onclick = copyText;