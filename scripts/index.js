const toEncrypt = document.getElementById("to-encrypt");
const messageDecrypt = document.getElementById("message-decrypt");
const btnEncrypt = document.getElementById("btn-encrypt");
const btnDecrypt = document.getElementById("btn-decrypt");
const btnCopy = document.getElementById("btn-copy");
const imgPerson = document.getElementById("img-person");
const messageInfo = document.getElementById("message-info");
const decrypt = document.getElementById("decrypt");
let conditions = [
  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"],
];

btnEncrypt.addEventListener("click", () => {
  const textEncrypt = toEncrypt.value.toLowerCase();

  function encrypt(textEncryptedTemp) {
    for (let i = 0; i < conditions.length; i++) {
      if (textEncryptedTemp.includes(conditions[i][0])) {
        textEncryptedTemp = textEncryptedTemp.replaceAll(
          conditions[i][0],
          conditions[i][1]
        );
      }
    }
    return textEncryptedTemp;
  }
  const textEncrypted = encrypt(textEncrypt);
  messageDecrypt.innerHTML = textEncrypted;

  imgPerson.style.display = "none";
  messageInfo.style.display = "none";
  btnCopy.style.display = "block";
  decrypt.classList.add("final");
  messageDecrypt.classList.add("final");
});

btnDecrypt.addEventListener("click", () => {
  const textDecrypt = toEncrypt.value.toLowerCase();

  function decrypt(textDecryptedTemp) {
    for (let i = 0; i < conditions.length; i++) {
      if (textDecryptedTemp.includes(conditions[i][1])) {
        textDecryptedTemp = textDecryptedTemp.replaceAll(
          conditions[i][1],
          conditions[i][0]
        );
      }
    }
    return textDecryptedTemp;
  }

  const textDecrypted = decrypt(textDecrypt);
  messageDecrypt.innerHTML = textDecrypted;
});

btnCopy.addEventListener("click", () => {
  let textCopy = messageDecrypt.value;
  navigator.clipboard.writeText(textCopy);
  window.confirm("Texto Copiado");
  toEncrypt.focus();
});
