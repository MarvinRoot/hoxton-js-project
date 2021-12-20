const state = {
  foodCategories: [],
  foodAreas: [],
  selectedArea: null,
  selectedCategory: null
}
// get the full list of categories the user can choose
function getCategories() {
  return fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
  .then(resp => resp.json()).then(category =>{
    for(let i=0;i<13;i++){
      state.foodCategories.push(category['meals'][i].strCategory)
    }
    renderWelcomePage()
  })
}
// get the full list of areas the user can choose
function getAreas() {
  return fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
  .then(resp => resp.json()).then(area => {
    for(let i=0;i<27;i++){
      state.foodAreas.push(area['meals'][i].strArea)
    }
    renderWelcomePage()
  })
}
function listenToFilterByArea(filterByAreaSelect) {
  filterByAreaSelect.addEventListener('change', function() {
  state.selectedArea = ''
  state.selectedArea = filterByAreaSelect.value
  })
}
function listenToFilterByCategory(filterByCategorySelect) {
  filterByCategorySelect.addEventListener('change', function() {
  state.selectedCategory = ''
  state.selectedCategory = filterByCategorySelect.value
  })
}
// renders the category form list
function renderCategoryList() {
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
  listenToFilterByCategory(filterByCategorySelect)
  const selectCategoryOption = document.createElement('option')
  selectCategoryOption.setAttribute("value", null);
  selectCategoryOption.textContent = 'Select Category';
  filterByCategorySelect.prepend(selectCategoryOption)
  for(const category of state.foodCategories){
    const selectTypeOptionCategory = document.createElement("option");
    selectTypeOptionCategory.setAttribute("value", category);
    selectTypeOptionCategory.textContent = category;
    filterByCategorySelect.append(selectTypeOptionCategory);
  }
  filterByCategoryForm.append(filterByCategoryLabel, filterByCategorySelect);
  filterByCategoryDiv.append(filterByCategoryForm);
  return filterByCategoryDiv
}
// renders the area form list
function renderAreaList() {
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
  listenToFilterByArea(filterByAreaSelect)
  const selectAreaOption = document.createElement('option')
  selectAreaOption.setAttribute("value", null);
  selectAreaOption.textContent = 'Select Area';
  filterByAreaSelect.prepend(selectAreaOption)
  for(const area of state.foodAreas){
    const selectTypeOptionArea = document.createElement("option");
    selectTypeOptionArea.setAttribute("value", area);
    selectTypeOptionArea.textContent = area;
    filterByAreaSelect.append(selectTypeOptionArea);
  }
  filterByAreaForm.append(filterByAreaLabel, filterByAreaSelect);

  filterByAreaDiv.append(filterByAreaForm);
  return filterByAreaDiv
}
/******************WELCOME PAGE****************/
function renderWelcomePage() {
  document.body.innerHTML=''
  const welcomePage = document.createElement('section')
  welcomePage.setAttribute('class', 'welcome-page')
  const mainTitle = document.createElement("h1");
  mainTitle.setAttribute("class", "main-title");
  mainTitle.textContent = "Feeling Hungry?";

  const mainSubtitle = document.createElement("h2");
  mainSubtitle.setAttribute("class", "main-subtitle");
  mainSubtitle.textContent = "Choose what foods you want";

  const mainSection = document.createElement("section");
  mainSection.setAttribute("class", "main-section");

  renderCategoryList()

  renderAreaList()

  const buttonDiv = document.createElement('div')
  buttonDiv.setAttribute('class', 'button')
  const submitButton = document.createElement('button')
  submitButton.textContent = 'Click me for food'
  submitButton.setAttribute('class', 'submit-btn')
  buttonDiv.append(submitButton)
  mainSection.append(renderAreaList(), renderCategoryList());
  welcomePage.append(mainTitle, mainSubtitle, mainSection, buttonDiv)

  document.body.append(renderTheHeader(), welcomePage);
}
/****************MAIN PAGE********************/
function renderMainPage() {
  const mainPage = document.createElement('section')
  mainPage.setAttribute('class', 'main-page')
  const mainTitleMainPage = document.createElement("h1");
  mainTitleMainPage.setAttribute("class", "main-title");
  mainTitleMainPage.textContent = `Mmm... Don't they look delicious!!`;

  const foodListSection = document.createElement("section");
  foodListSection.setAttribute("class", "food-list-section");

  const foodListUl = document.createElement("ul");
  foodListUl.setAttribute('class', 'food-list')

  const foodListLi = document.createElement("li");
  foodListLi.setAttribute('class', 'food-list-item')

  const foodListImg = document.createElement("img");
  foodListImg.setAttribute("src", "https://media.istockphoto.com/photos/food-backgrounds-table-filled-with-large-variety-of-food-picture-id1155240408?k=20&m=1155240408&s=612x612&w=0&h=Zvr3TwVQ-wlfBnvGrgJCtv-_P_LUcIK301rCygnirbk=");
  foodListImg.setAttribute("alt", "food title");

  const foodName = document.createElement("p");
  foodName.setAttribute("class", "food-name");
  foodName.textContent = "Pilaf me Groshe";
  foodListLi.append(foodListImg, foodName);
  foodListUl.append(foodListLi);
  foodListSection.append(foodListUl);
  mainPage.append(mainTitleMainPage, foodListSection)
  document.body.append(mainPage)
}
// ****************FOOD DETAILS PAGE*****************
function renderFoodDetails() {
  const foodDetailsPage = document.createElement('section')
  foodDetailsPage.setAttribute('class', 'food-details-page')
  const mainTitleFoodPage = document.createElement("h1");
  mainTitleFoodPage.setAttribute("class", "main-title");
  mainTitleFoodPage.textContent = `Lets Cook!!`;

  const foodImgAndIngredients = document.createElement("div");
  foodImgAndIngredients.setAttribute("class", "food-img-and-ingredients");

  const imageOfFood = document.createElement("img");
  imageOfFood.setAttribute("src", "");
  imageOfFood.setAttribute("alt", "food image");

  const foodPageUl = document.createElement("ul");
  const foodPageLi = document.createElement("li");
  foodPageLi.textContent = "Ingredients";

  foodPageUl.append(foodPageLi);
  foodImgAndIngredients.append(imageOfFood, foodPageUl);

  const writtenAndVideoInstructon = document.createElement("div");
  writtenAndVideoInstructon.setAttribute("class", "written-and-video-instructions");
  const writtenInstructions = document.createElement("p");
  writtenInstructions.setAttribute("class", "written-instructions");

  const videoInstructions = document.createElement("iframe");
  videoInstructions.setAttribute("class", "video-instructions");
  videoInstructions.setAttribute("frameborder", "0");
  videoInstructions.setAttribute('src', '')

  writtenAndVideoInstructon.append(writtenInstructions, videoInstructions);
  foodDetailsPage.append(mainTitleFoodPage,
    foodImgAndIngredients,
    writtenAndVideoInstructon)
  document.body.append(foodDetailsPage)
}

function renderTheHeader() {
  const headerOfPage = document.createElement("header");

  const titleOfPage = document.createElement("h1");
  titleOfPage.textContent = "HOLLIXTON";

  const rightElementsOfHeader = document.createElement("div");
  rightElementsOfHeader.setAttribute("class", "right-elements");

  const magnifyingGlass = document.createElement("img");
  magnifyingGlass.setAttribute("class", "magnifying-glass");
  magnifyingGlass.setAttribute("src", "images/foto.svg");
  magnifyingGlass.setAttribute("alt", "maginfyi");

  const signIn = document.createElement("img");
  signIn.setAttribute("class", "signin");
  signIn.setAttribute("src", "images/foto.svg");
  signIn.setAttribute("alt", "maginfyi");

  const bagImage = document.createElement("img");
  bagImage.setAttribute("class", "bag-image");
  bagImage.setAttribute("src", "images/foto.svg");
  bagImage.setAttribute("alt", "maginfyi");

  rightElementsOfHeader.append(magnifyingGlass, signIn, bagImage);

  headerOfPage.append(titleOfPage, rightElementsOfHeader);
  return headerOfPage;
}

getCategories()
getAreas()