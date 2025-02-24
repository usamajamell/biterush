const testimonialsContainer = document.querySelector(".testimonials-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const username = document.querySelector(".username");
const role = document.querySelector(".role");

const testimonials = [
  {
    name: "Miyah Myles",
    position: "3mo ago",
    photo:
      "https://randomuser.me/api/portraits/women/32.jpg",
    text:
      "I’m so impressed with the quality and taste! Every dish was cooked to perfection, and you can tell they use fresh ingredients. The desserts were a delightful surprise! Can’t wait to try more from the menu.",
  },
  {
    name: "June Cha",
    position: "11mo ago",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    text:
      "This is my favorite place to order from! The food is always delicious, and the presentation is beautiful. Plus, the customer service is top-notch—they truly care about their customers. Highly recommended!",
  },
  {
    name: "Iida Niskanen",
    position: "5days ago",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    text:
      "Tried their food for the first time today, and I’m blown away! The flavors are rich, and the portion sizes are generous. It felt like a homemade meal but with a gourmet touch. Will be a regular customer from now on!",
  },
  {
    name: "Renee Sims",
    position: "1y ago",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    text:
      "The food not only tastes amazing but is also packaged so well! I love how fresh everything is, and their sauces are a game-changer. It’s rare to find an online food service that gets everything right—this one does!",
  },
  {
    name: "Jonathan Nunfiez",
    position: "1w ago",
    photo: "https://randomuser.me/api/portraits/men/43.jpg",
    text:
      "I was skeptical about ordering food online, but this restaurant changed my mind! The delivery was super quick, and the food was fresh and flavorful. The portion sizes were perfect, and I loved the attention to detail in the packaging. Definitely ordering again!",
  },
  {
    name: "Sasha H.",
    position: "2days ago",
    photo:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
    text:
      "Ordering from here was the best decision! The food arrived on time, steaming hot, and full of flavor. It felt like dining at a top-notch restaurant from the comfort of my home. Highly recommended!",
  },
  {
    name: "Mark T.",
    position: "2w ago",
    photo: "https://randomuser.me/api/portraits/men/97.jpg",
    text:
      "One of the best online food experiences I've had! The spices were just right, and the meat was perfectly cooked. The delivery was on time, and everything was still hot when it arrived. This place knows how to keep customers happy!",
  },
];

let index = 1;

const updateTestimonial = () => {
  const { name, position, photo, text } = testimonials[index];
  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;
  index++;
  if (index > testimonials.length - 1) index = 0;
};

setInterval(updateTestimonial, 7000);

document.getElementById("bookButton").addEventListener("click", function () {
  // Check if an alert already exists and remove it before adding a new one
  let existingAlert = document.querySelector("#alertContainer .alert");
  if (existingAlert) {
    existingAlert.remove();
  }

  // Create the alert div
  let alertDiv = document.createElement("div");
  alertDiv.className = "alert alert-warning alert-dismissible fade show";
  alertDiv.setAttribute("role", "alert");
  alertDiv.innerHTML = `
      Reservation successful! We look forward to seeing you soon.
  `;

  // Add the alert to the container
  document.getElementById("alertContainer").appendChild(alertDiv);

  // Automatically remove alert after 3 seconds
  setTimeout(() => {
    alertDiv.classList.remove("show"); // Remove the "show" class for fade effect
    setTimeout(() => alertDiv.remove(), 1000); // Wait for fade-out animation before removing
  }, 5000);
});
