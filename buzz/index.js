const MIN = 0;
const MAX = 1000;

let prevValue = -1;
let interval;

const getRotation = (normalisedValue) => {
  const t = 300 * normalisedValue;
  const v = -Math.abs(t - 360) - 150;
  return `rotate(${v}deg)`;
};

const loadAudio = async (audioName) =>
  new Promise((res) => {
    const audio = document.querySelector("#audio");
    const volume = document.querySelector("#volume");

    audio.src = `/sounds/${audioName}.mp3`;
    audio.volume = (+volume.getAttribute("data-value") ?? 80) / 1000;
    console.log(+volume.getAttribute("data-value"));
    audio.addEventListener("loadedmetadata", () => res(null));
  });

const startLoop = () => {
  if (interval) clearInterval(interval);

  const audio = document.querySelector("#audio");
  audio.play();

  interval = setInterval(
    () => {
      const bias = Math.random() * MAX;
      const level = document.querySelector("#level");
      const value = +level.getAttribute("data-value");

      if (bias <= value && audio.paused) {
        audio.play();
      }
    },
    Math.trunc(audio.duration * 1000) + 500,
  );
};

const updateLevel = () => {
  const level = document.querySelector("#level");

  const updateRotation = (event) => {
    let value = +level.getAttribute("data-value");
    const inc = event.clientY - prevValue;
    value += inc * 2;

    if (value >= MAX) {
      value = MAX;
    } else if (value <= MIN) {
      value = MIN;
    }

    level.style.transform = getRotation(value / MAX);
    level.setAttribute("data-value", value);
    const levelPercentage = document.querySelector("#level-percentage");
    levelPercentage.innerText = `${((value / MAX) * 100).toFixed(1)}%`;
    prevValue = event.clientY;
  };

  level.addEventListener("mousedown", (event) => {
    prevValue = event.clientY;
    document.addEventListener("mousemove", updateRotation);
  });

  document.addEventListener("mouseup", () => {
    document.removeEventListener("mousemove", updateRotation);
  });
};

const updateVolume = () => {
  const volume = document.querySelector("#volume");

  const updateVolumeRotation = (event) => {
    let value = +volume.getAttribute("data-value");
    const inc = event.clientY - prevValue;
    value += inc * 2;

    if (value >= 1000) {
      value = 1000;
    } else if (value <= 0) {
      value = 0;
    }

    volume.style.transform = getRotation(value / 1000);
    volume.setAttribute("data-value", value);
    const volumePercentage = document.querySelector("#volume-percentage");
    volumePercentage.innerText = `${(value / 10).toFixed(1)}%`;
    const audio = document.querySelector("#audio");
    audio.volume = value / 1000;
    prevValue = event.clientY;
  };

  volume.addEventListener("mousedown", (event) => {
    prevValue = event.clientY;
    document.addEventListener("mousemove", updateVolumeRotation);
  });

  document.addEventListener("mouseup", () => {
    document.removeEventListener("mousemove", updateVolumeRotation);
  });
};

const run = () => {
  const select = document.querySelector("#select");
  updateLevel();
  updateVolume();

  select.addEventListener("change", async () => {
    if (select.value === "none") return;

    await loadAudio(select.value);
    startLoop();
  });
};

htmx.onLoad(() => {
  run();
});
