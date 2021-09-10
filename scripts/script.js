const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const newButton = document.querySelector(".new-button");
const imageGallery = document.querySelector(".image-gallery");

const createNewImageElement = () => {
  const dogUrlResponse = fetch(DOG_URL);
  dogUrlResponse
    .then((response) => {
      const processingResponse = response.json();
      return processingResponse;
    })
    .then((processedResponse) => {
      const newImage = document.createElement("img");
      newImage.src = processedResponse.message;
      newImage.classList.add("image");
      imageGallery.insertBefore(newImage, imageGallery.firstChild);
    });
};

newButton.addEventListener("click", createNewImageElement);
