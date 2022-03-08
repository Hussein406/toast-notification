const button = document.querySelector(".btn");
const toasts = document.querySelector("#toasts");

const messages = [
  "Message One",
  "Message Two",
  "Message Three",
  "Message Four",
];
const types = ["info", "success", "error"];

button.addEventListener("click", () =>
  createNotificaiton()
);

const createNotificaiton = (message = null, type = null) => {
  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.classList.add(type ? type : getRandomType());
  toast.innerHTML = message ? message : getRandomMessag();
  toasts.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 900);
};

const getRandomMessag = () => {
  return messages[Math.floor(Math.random() * messages.length)];
};
const getRandomType = () => {
  return types[Math.floor(Math.random() * types.length)];
};


