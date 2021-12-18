/******************WELCOME PAGE****************/

function renderWelcomePage() {
  const welcomePage = document.querySelector('.welcome-page')
  const mainTitle = document.createElement("h1");
  mainTitle.setAttribute("class", "main-title");
  mainTitle.textContent = "Feeling Hungry?";

  const mainSubtitle = document.createElement("h2");
  mainSubtitle.setAttribute("class", "main-subtitle");
  mainSubtitle.textContent = "Choose what foods you want";

  const mainSection = document.createElement("section");
  mainSection.setAttribute("class", "main-section");

  const filterByCategoryDiv = document.createElement("div");
  filterByCategoryDiv.setAttribute("class", "filter-by-category-div");

  const filterByCategoryForm = document.createElement("form");
  filterByCategoryForm.setAttribute("class", "filter-by-category-form");
  filterByCategoryForm.setAttribute("autocomplete", "off");

  const filterByCategoryLabel = document.createElement("label");
  filterByCategoryLabel.setAttribute("for", "filter-by-category");

  const categoryH3 = document.createElement("h3");
  categoryH3.textContent = "Category:";

  filterByCategoryLabel.append(categoryH3);

  const filterByCategorySelect = document.createElement("select");
  filterByCategorySelect.setAttribute("name", "filter-by-category");
  filterByCategorySelect.setAttribute("id", "filter-by-category");

  const selectTypeOptionCategory = document.createElement("option");
  selectTypeOptionCategory.setAttribute("value", "");
  selectTypeOptionCategory.textContent = "Select a type...";

  filterByCategorySelect.append(selectTypeOptionCategory);
  filterByCategoryForm.append(filterByCategoryLabel, filterByCategorySelect);

  filterByCategoryDiv.append(filterByCategoryForm);


  const filterByIngredientsDiv = document.createElement("div");
  filterByIngredientsDiv.setAttribute("class", "filter-by-ingredients-div");

  const filterByIngredientsForm = document.createElement("form");
  filterByIngredientsForm.setAttribute("class", "filter-by-ingredients-form");
  filterByIngredientsForm.setAttribute("autocomplete", "off");

  const filterByIngredientsLabel = document.createElement("label");
  filterByIngredientsLabel.setAttribute("for", "filter-by-ingredients");

  const ingredientsH3 = document.createElement("h3");
  ingredientsH3.textContent = "Ingredients";

  filterByIngredientsLabel.append(ingredientsH3);

  const filterByIngredientsSelect = document.createElement("select");
  filterByIngredientsSelect.setAttribute("name", "filter-by-ingredients");
  filterByIngredientsSelect.setAttribute("id", "filter-by-ingredients");

  const selectTypeOptionIngredients = document.createElement("option");
  selectTypeOptionIngredients.setAttribute("value", "");
  selectTypeOptionIngredients.textContent = "Select a type...";

  filterByIngredientsSelect.append(selectTypeOptionIngredients);
  filterByIngredientsForm.append(
    filterByIngredientsLabel,
    filterByIngredientsSelect
  );

  filterByIngredientsDiv.append(filterByIngredientsForm);


  const filterByAreaDiv = document.createElement("div");
  filterByAreaDiv.setAttribute("class", "filter-by-area-div");

  const filterByAreaForm = document.createElement("form");
  filterByAreaForm.setAttribute("class", "filter-by-area-form");
  filterByAreaForm.setAttribute("autocomplete", "off");

  const filterByAreaLabel = document.createElement("label");
  filterByAreaLabel.setAttribute("for", "filter-by-area");

  const AreaH3 = document.createElement("h3");
  AreaH3.textContent = "Area";

  filterByAreaLabel.append(AreaH3);

  const filterByAreaSelect = document.createElement("select");
  filterByAreaSelect.setAttribute("name", "filter-by-area");
  filterByAreaSelect.setAttribute("id", "filter-by-area");

  const selectTypeOptionArea = document.createElement("option");
  selectTypeOptionArea.setAttribute("value", "");
  selectTypeOptionArea.textContent = "Select an area...";

  filterByAreaSelect.append(selectTypeOptionArea);
  filterByAreaForm.append(filterByAreaLabel, filterByAreaSelect);

  filterByAreaDiv.append(filterByAreaForm);

  const buttonDiv = document.createElement('div')
  buttonDiv.setAttribute('class', 'button')
  const submitButton = document.createElement('button')
  submitButton.textContent = 'Click me for food'
  submitButton.setAttribute('class', 'submit-btn')
  buttonDiv.append(submitButton)
  mainSection.append(filterByAreaDiv, filterByCategoryDiv, filterByIngredientsDiv);
  welcomePage.append(mainTitle, mainSubtitle, mainSection, buttonDiv)

  document.body.append(welcomePage);
}

/*
<!-- ***************MAIN PAGE******************* -->
    <h1 class="main-title">Mmm... Don't they look delicious!!</h1>

    <section class="food-list-section">
      <ul>
        <li>
          <img
            src="https://media.istockphoto.com/photos/food-backgrounds-table-filled-with-large-variety-of-food-picture-id1155240408?k=20&m=1155240408&s=612x612&w=0&h=Zvr3TwVQ-wlfBnvGrgJCtv-_P_LUcIK301rCygnirbk="
            alt="food title"
          />
          <p class="food-name">Pilaf me Groshe</p>
        </li>
      </ul>
    </section> */
// const mainTitleMainPage = document.createElement("h1");
// mainTitleMainPage.setAttribute("class", "main-title");
// mainTitleMainPage.textContent = `Mmm... Don't they look delicious!!`;

// const foodListSection = document.createElement("section");
// foodListSection.setAttribute("class", "food-list-section");

// const foodListUl = document.createElement("ul");

// const foodListLi = document.createElement("li");

// const foodListImg = document.createElement("img");
// foodListImg.setAttribute("src", "");
// foodListImg.setAttribute("alt", "food title");

// const foodName = document.createElement("p");
// foodName.setAttribute("class", "food-name");
// foodName.textContent = "Pilaf me Groshe";
// foodListLi.append(foodListImg, foodName);
// foodListUl.append(foodListLi);
// foodListSection.append(foodListUl);

/*
<h1 class="main-title">Let's cook!</h1>

<div class="food-img-and-ingredients">
  <img
    src="https://media.istockphoto.com/photos/food-backgrounds-table-filled-with-large-variety-of-food-picture-id1155240408?k=20&m=1155240408&s=612x612&w=0&h=Zvr3TwVQ-wlfBnvGrgJCtv-_P_LUcIK301rCygnirbk="
    alt=""
  />
  <ul>
    <li>ingredients</li>
  </ul>
</div>

<div class="written-and-video-instructions">
  <p class="written-instructions"></p>
  <iframe class="video-instructions" src="" frameborder="0"></iframe>
</div>  */
// const mainTitleFoodPage = document.createElement("h1");
// mainTitleFoodPage.setAttribute("class", "main-title");
// mainTitleFoodPage.textContent = `Lets Cook!!`;

// const foodImgAndIngredients = document.createElement("div");
// foodImgAndIngredients.setAttribute("class", "food-img-and-ingredients");

// const imageOfFood = document.createElement("img");
// imageOfFood.setAttribute("src", "");
// imageOfFood.setAttribute("alt", "");

// const foodPageUl = document.createElement("ul");
// const foodPageLi = document.createElement("li");
// foodPageLi.textContent = "Ingredients";

// foodPageUl.append(foodPageLi);
// foodImgAndIngredients.append(imageOfFood, foodPageUl);

// const writtenAndVideoInstructon = document.createElement("div");
// writtenAndVideoInstructon.setAttribute(
//   "class",
//   "written-and-video-instructions"
// );
// const writtenInstructions = document.createElement("p");
// writtenInstructions.setAttribute("class", "written-instructions");

// const videoInstructions = document.createElement("iframe");
// videoInstructions.setAttribute("class", "video-instructions");
// videoInstructions.setAttribute("frameborder", "0");

// writtenAndVideoInstructon.append(writtenInstructions, videoInstructions);
