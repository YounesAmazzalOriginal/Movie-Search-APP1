var filmData = [
  "after",
  "assasin",
  "avatar",
  "inconnu",
  "invaded",
  "orphan",
  "rememory",
  "rise",
  "smile",
  "the-creator",
  "tin",
  "titanic",
  "unfortunate-events",
  "uprising",
];
var filmDescriptions = [
  "A romantic drama that explores love and its complications.",
  "A high-octane thriller about a skilled assassin on a dangerous mission.",
  "A science fiction epic set in the alien world of Pandora.",
  "A mystery that uncovers hidden truths about a missing person.",
  "A gripping story of survival after an alien invasion.",
  "A psychological horror film about a family and their adopted child.",
  "A sci-fi film that delves into the mind and the power of memories.",
  "A drama about overcoming personal struggles and achieving greatness.",
  "A horror film where a smile hides terrifying secrets.",
  "A futuristic tale about AI and the battle for human survival.",
  "A thriller that unfolds around an enigmatic object made of tin.",
  "A timeless romance set against the backdrop of the tragic Titanic disaster.",
  "A dark comedy about three unlucky orphans and their battle with a cruel villain.",
  "A story of revolution and the fight against oppressive forces.",
];

let filmShown = [];

for (let i = 0; i < filmData.length; i++) {
  var main = document.querySelector("main");
  let title = filmData[i].replaceAll("-", " ");
  var filmModel = `<div
            class="single-film w-[220px] h-[300px] rounded-md overflow-hidden relative group"
          >
            <div
              class="cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-500 w-full h-full absolute top-0 left-0 text-white"
            >
              <div
                class="w-full h-full bg-gradient-to-t from-[var(--light)] to-transparent"
              ></div>
              <div class="absolute bottom-0 w-full p-4">
                <h1 class="font-semibold text-[17px] capitalize">
                 ${title}
                </h1>
                <p class="title text-[11px]">
                  ${filmDescriptions[i]}
                </p>
              </div>
            </div>
            <div
              class="text-white w-full flex justify-between px-2 py-2 absolute top-0 left-0"
            >
              <button class="w-7 h-7 rounded-full text-sm">
                <i class="fa-solid fa-ellipsis"></i>
              </button>
              <button
                onclick="likeFilm(this)"
                class="bg-[hsl(0,0%,100%,0.3)] w-7 h-7 rounded-full text-sm"
              >
                <i class="fa-regular fa-heart"></i>
              </button>
            </div>
            <img
              src="assets/images/${filmData[i]}.jpg"
              alt=""
              class="w-full h-full object-cover"
            />
          </div>`;

  main.innerHTML += filmModel;

  filmShown.push(filmModel);
}

var resultFound = document.querySelector("#result-found span");
resultFound.textContent = filmShown.length;

function searchMovie() {
  var input = document.getElementById("input").value.toLowerCase();

  document.querySelectorAll(".single-film").forEach((singleFilm) => {
    var filmTitle = singleFilm.querySelector("h1").textContent.toLowerCase();

    if (filmTitle.includes(input)) {
      singleFilm.style.display = "block";
    } else {
      singleFilm.style.display = "none";
    }
  });

  var resultFound = document.querySelector("#result-found span");
  var visibleFilms = document.querySelectorAll(
    ".single-film[style*='display: block']"
  );
  resultFound.textContent = visibleFilms.length;
}

// Like Film
function likeFilm(target) {
  var heartIcon = target.querySelector("i");

  if (heartIcon.classList.contains("fa-regular")) {
    heartIcon.classList.remove("fa-regular");
    heartIcon.classList.add("fa-solid");
    target.style.setProperty("background-color", "hsl(0, 100%, 50%,0.5)");
    heartIcon.style.setProperty("color", "white");
  } else {
    heartIcon.classList.add("fa-regular");
    heartIcon.classList.remove("fa-solid");
    target.style.removeProperty("background-color");
    heartIcon.style.removeProperty("color");
  }
}
