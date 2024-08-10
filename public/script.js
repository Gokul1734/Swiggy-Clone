function handleClick() {
  fetch("/handleClick")
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}
