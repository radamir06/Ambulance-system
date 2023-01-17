// _____JOB_____SPOILER
document.querySelector("#spoiler-button").addEventListener("click", (e) => {
    const spoilerContent = document.querySelector("#spoiler-content");
    spoilerContent.classList.contains("hidden")
      ? spoilerContent.classList.replace("hidden", "fadein")
      : spoilerContent.classList.replace("fadein", "hidden");
  });
  
  document.querySelector("#spoiler-button2").addEventListener("click", (e) => {
    const spoilerContent = document.querySelector("#spoiler-content2");
    spoilerContent.classList.contains("hidden")
      ? spoilerContent.classList.replace("hidden", "fadein")
      : spoilerContent.classList.replace("fadein", "hidden");
  });
  document.querySelector("#spoiler-button3").addEventListener("click", (e) => {
    const spoilerContent = document.querySelector("#spoiler-content3");
    spoilerContent.classList.contains("hidden")
      ? spoilerContent.classList.replace("hidden", "fadein")
      : spoilerContent.classList.replace("fadein", "hidden");
  });
  document.querySelector("#spoiler-button4").addEventListener("click", (e) => {
    const spoilerContent = document.querySelector("#spoiler-content4");
    spoilerContent.classList.contains("hidden")
      ? spoilerContent.classList.replace("hidden", "fadein")
      : spoilerContent.classList.replace("fadein", "hidden");
  });

  
