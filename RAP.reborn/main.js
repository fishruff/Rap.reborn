const Photo = document.querySelector(".photo");
const CreateForm = document.getElementById("createForm");

const createTamplate = (psi, seed) => {
  const fUrl =
    "https://thisanimedoesnotexist.ai/results/psi-" +
    psi +
    "/seed" +
    seed +
    ".png";
  return `
    <div class="getPhoto">
        <img class="animePhoto"
          src="${fUrl}"
          alt=""
        />

      </div>
    `;
};
const addPhoto = (psi, seed) => {
  Photo.innerHTML = "";
  Photo.innerHTML = createTamplate(psi, seed);
};
CreateForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const psi = document.getElementById("psi").value;
  const seed = document.getElementById("seed").value;
  if (seed <= 99999 && seed >= 10000) {
    if (psi <= 2.0 && psi >= 0.3) {
      console.log(psi, seed);
      addPhoto(psi, seed);
      psi && seed == "";
    } else alert("Please enter corect psi");
  } else alert("Please enter corect seed");
});
