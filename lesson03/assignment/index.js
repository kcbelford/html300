$(document).ready(function() {
// original json data
  const data = [
    {
      "name": "Steve Smith",
      "jobTitle": "Project Manager",
      "company": "Front End Dev Co",
      "experience": "3 years",
      "school": "UW",
      "major": "Marketing",
      "email": "steve@fedc.com",
      "linkedInUrl": "steve.linkedinprofile.com",
      "codeLanguages": [
          "HTML", "CSS", "JavaScript", ".NET", "C#"
      ]
    },
    {
      "name": "Aaron Katz",
      "jobTitle": "Full Stack Developer",
      "company": "Web Sites and More",
      "experience": "5 years",
      "school": "SU",
      "major": "Computer Science",
      "email": "aaronNotMyemail@uw.com",
      "linkedInUrl": "aaron.linkedinprofile.com",
      "codeLanguages": [
          "HTML", "CSS", "JavaScript", "PHP", "Twig"
      ]
    },
    {
      "name": "Kyle Hendricks",
      "jobTitle": "Starting Pitcher",
      "company": "Chicago Cubs",
      "experience": "12 years",
      "school": "USC",
      "major": "Pitching",
      "email": "kyleH@cubs.com",
      "linkedInUrl": "kyle.linkedinprofile.com",
      "codeLanguages": [
          "HTML", "CSS", "JavaScript", "Ruby", "Rails"
      ]
    },
    {
      "name": "Michael Jordan",
      "jobTitle": "Point Guard",
      "company": "Chicago Bulls",
      "experience": "20 years",
      "school": "UNC",
      "major": "Trash Talking",
      "email": "mJordan@bulls.com",
      "linkedInUrl": "mJordas.linkedinprofile.com",
      "codeLanguages": [
         "HTML", "CSS", "JavaScript", "Java", "Spring"
      ]
    }
  ];

// added profile picture and alt text keys/values to original object
  data[0].profilePicture = "img/unsplash-headshot.jpg"
  data[1].profilePicture = "img/aaron-katz.jpeg";
  data[2].profilePicture = "img/kyle-hendricks.png";
  data[3].profilePicture = "img/michael-jordan.jpg";
  data[0].altText = "'Steve Smith'"
  data[1].altText = "'Aaron Katz'"
  data[2].altText = "'Kyle Hendricks'"
  data[3].altText = "'Michael Jordan'"

// set variable to html mapped using .map function
  let cardHtml = data.map(function(el) {
    return `<article class="card">

          <div class="card__content-wrapper">

            <section class="card__image-name">
              <img class="card__image-name__image" src=${el.profilePicture} alt=${el.altText}>
              <h1>${el.name}</h1>
              <h2 class="card__image-name__name__h2">${el.jobTitle}</h2>
            </section>

            <section class="card__bio">
              <div class="card__bio__content">
                <p><span class="card__bio__content__span">Company: </span>${el.company}</p>
                <p><span class="card__bio__content__span">Experience: </span>${el.experience}</p>
                <p><span class="card__bio__content__span">School: </span>${el.school}</p>
                <p><span class="card__bio__content__span">Major: </span>${el.major}</p>
                <p><span class="card__bio__content__span">Email: </span>${el.email}</p>
                <p class="card__bio__content__p-flex"><img class="card__bio__content__logo" src="img/linkedin.svg" alt="linkedin logo">${el.linkedInUrl}</p>
              </div>
            </section>
          </div>
        </article>
    `;
  });
// append html to template-hook class
  $(".template-hook").append(cardHtml);
});
