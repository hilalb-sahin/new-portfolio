import  projects  from './data.js';

let projectsContainer = document.getElementById("projects-container");

let projectDetailDiv = document.createElement("div");
projectDetailDiv.classList.add("projectDetail");

for (let idx = 0; idx < projects.length; idx++) {


  //creating the necessary elements
  let div = document.createElement("div");
  div.id = "div";
  let nameP = document.createElement("p");
  nameP.id = "projectName";
  nameP.innerHTML = projects[idx].name;
  
  let projectDiv = document.createElement("div");
  projectDiv.id = "project";
  
  let img = document.createElement("img");
  img.id = "project-img";
  img.src = projects[idx]['img-path'];
  
  let buttonsDiv = document.createElement("div");
  buttonsDiv.id = "buttons";
  
  
  let websiteBtn = document.createElement("a");
  websiteBtn.classList.add("bubbly-button");
  websiteBtn.id = "website-anchor";
  websiteBtn.target = "_blank";
  websiteBtn.innerHTML= "Website";
  websiteBtn.href = projects[idx]['website-link'];
  
  let projectDetailDiv = document.createElement("div");
  projectDetailDiv.classList.add("projectDetail");
 
  let descriptionP = document.createElement("p");
  descriptionP.id = "description";
  descriptionP.innerHTML = projects[idx].description;


  //appending the elements
  
  div.appendChild(nameP);
  div.appendChild(projectDiv);
  projectDiv.appendChild(img);
  projectDiv.appendChild(buttonsDiv);
  buttonsDiv.appendChild(websiteBtn);
  projectDiv.appendChild(projectDetailDiv);
  projectDetailDiv.appendChild(descriptionP);
  projectsContainer.appendChild(div);


}





        
//for each project




/* 
<div id="container">
  <div id="div">
      <p id="projectName">Movie Data Sorter</p>
      <div id="project">
          <img id="project-img" src="images/movie_data.gif">

          <div id="buttons">
              <button class="info bubbly-button">Info</button>
              <a class="bubbly-button" id="website-anchor" target="_blank"
                  href="https://hilalb-sahin.github.io/movie-sorter/">Website</a>
          </div>

          <div class="projectDetail">
              <p id="description"> </p>

          </div>
      </div>
  </div>

</div> */
