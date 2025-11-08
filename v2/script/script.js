const buttonSubmit = async (e) => {
   let nameValue = document.getElementById("name");
   let emailValue = document.getElementById("email");
   let messageValue = document.getElementById("pesan");
   const responseText = document.getElementById("response");

   e.preventDefault();
   if (!nameValue.value || !emailValue.value || !messageValue.value) {
      responseText.textContent = "Periksa kembali input yang anda masukan.";
      setTimeout(() => {
         responseText.textContent = "";
      }, 1500);
      return;
   }
   alert(`Pesan Berhasil Dikirim dengan email : ${emailValue.value}.\nTerima Kasih!.`);
   nameValue.value = "";
   emailValue.value = "";
   messageValue.value = "";
   responseText.textContent = "Pesan terkirim.";
   setTimeout(() => {
      responseText.textContent = "";
   }, 1500);
   return;
};

const Theme = document.getElementById("theme");
const lightIcon = document.getElementById("light");
const darkIcon = document.getElementById("dark");
const DataTheme = document.querySelector("html");
if (!localStorage.getItem("data-theme")) {
   localStorage.setItem("data-theme", "light");
}
DataTheme.setAttribute("data-theme", localStorage.getItem("data-theme"));
if (DataTheme.getAttribute("data-theme") == "light") {
   lightIcon.style = "display: block";
   darkIcon.style = "display: none";
} else {
   lightIcon.style = "display: none";
   darkIcon.style = "display: block";
}
Theme.addEventListener("click", () => {
   const getDefaultTheme = localStorage.getItem("data-theme");
   if (getDefaultTheme == "light") {
      darkIcon.style = "display: block";
      lightIcon.style = "display:none";
      localStorage.setItem("data-theme", "dark");
      DataTheme.setAttribute("data-theme", "dark");
   } else {
      lightIcon.style = "display: block;";
      darkIcon.style = "display: none";
      localStorage.setItem("data-theme", "light");
      DataTheme.setAttribute("data-theme", "light");
   }
});
