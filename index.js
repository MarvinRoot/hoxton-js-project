const state = {
  foodCategories: [],
  foodAreas: [],
  selectedPage: 'welcomePage',
  selectedArea: null,
  selectedCategory: null,
  foodIdsOfSelectedArea: [],
  foodListByArea: []
}
// gets the ids of every food in selected area and pushes to state
function getIdsOfSelectedArea() {
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${state.selectedArea}`)
  .then(resp => resp.json()).then(meal => {
    state.foodIdsOfSelectedArea = []
    for(let i=0;i<meal['meals'].length;i++){
      state.foodIdsOfSelectedArea.push(meal['meals'][i].idMeal)
    }
    getFoodsOfSelectedArea()
  })
}
// gets every food of the selected area and pushes to state
function getFoodsOfSelectedArea() {
  state.foodListByArea = []
  for(const id of state.foodIdsOfSelectedArea){
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(resp => resp.json())
    .then(meal => {
      state.foodListByArea.push(meal['meals'])
    })
  }
}
// displays the food list items on the main page
function getFoodsToDisplay() {
  let foodsToDisplay = state.foodListByArea
  foodsToDisplay = foodsToDisplay.filter(food => 
    state.selectedCategory === food.strCategory
  )
  return foodsToDisplay
}
// get the full list of categories the user can choose
function getCategories() {
  return fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
  .then(resp => resp.json()).then(category =>{
    for(let i=0;i<13;i++){
      state.foodCategories.push(category['meals'][i].strCategory)
    }
    render()
  })
}
// get the full list of areas the user can choose
function getAreas() {
  return fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
  .then(resp => resp.json()).then(area => {
    for(let i=0;i<27;i++){
      state.foodAreas.push(area['meals'][i].strArea)
    }
    render()
  })
}
// listens to the area select
function listenToFilterByArea(filterByAreaSelect) {
  filterByAreaSelect.addEventListener('change', function() {
  state.selectedArea = ''
  state.selectedArea = filterByAreaSelect.value
  getIdsOfSelectedArea()
  })
}
// listens to the category select
function listenToFilterByCategory(filterByCategorySelect) {
  filterByCategorySelect.addEventListener('change', function() {
  state.selectedCategory = ''
  state.selectedCategory = filterByCategorySelect.value
  })
}
// listens to 'Click me for food' button
function listenToFoodButton() {
  document.body.innerHTML = ''
  state.selectedPage = 'MainPage'
  render()
}
// listens to click of a food list element
function listenToProductLi() {
  document.body.innerHTML = ''
  state.selectedPage = 'FoodDetailsPage'
  render()
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
  submitButton.addEventListener('click',function() {
    document.body.innerHTML = ''
    listenToFoodButton()
  })
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
  for (const food of getFoodsToDisplay()){
    const foodListLi = document.createElement("li");
    foodListLi.setAttribute('class', 'food-list-item')
    foodListLi.addEventListener('click', function(){
      listenToProductLi()
    })

    const foodListImg = document.createElement("img");
    foodListImg.setAttribute("src", food.strMealThumb);
    foodListImg.setAttribute("alt", "food title");

    const foodName = document.createElement("h2");
    foodName.setAttribute("class", "food-name");
    foodName.textContent = food.strMeal;
    foodListLi.append(foodListImg, foodName);
    foodListUl.append(foodListLi);
  }
  foodListSection.append(foodListUl);
  mainPage.append(mainTitleMainPage, foodListSection)
  document.body.append(renderTheHeader(),mainPage)
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
  document.body.append(renderTheHeader(), foodDetailsPage)
}
// renders the header
function renderTheHeader() {
  const headerOfPage = document.createElement("header");

  // const titleOfPage = document.createElement("h1");
  // titleOfPage.textContent = "HOXTON CHEFS";

  const rightElementsOfHeader = document.createElement("div");
  rightElementsOfHeader.setAttribute("class", "right-elements");

  const magnifyingGlass = document.createElement("img");
  magnifyingGlass.setAttribute("class", "magnifying-glass");
  magnifyingGlass.setAttribute("src", "https://img.icons8.com/material-outlined/50/000000/search--v1.png");
  magnifyingGlass.setAttribute("alt", "maginfyi");

  const signIn = document.createElement("img");
  signIn.setAttribute("class", "signin");
  signIn.setAttribute("src", "https://img.icons8.com/small/50/000000/gender-neutral-user.png");
  signIn.setAttribute("alt", "maginfyi");

  const bagImage = document.createElement("img");
  bagImage.setAttribute("class", "bag-image");
  bagImage.setAttribute("src", "https://img.icons8.com/material-outlined/24/000000/shopping-bag--v1.png");
  bagImage.setAttribute("alt", "maginfyi");

  rightElementsOfHeader.append(magnifyingGlass, signIn, bagImage);

  headerOfPage.append(rightElementsOfHeader);
  return headerOfPage;
}
// selects which page to display
function selectPageToDisplay() {
  if(state.selectedPage === 'welcomePage') renderWelcomePage()
  else if(state.selectedPage === 'MainPage') renderMainPage()
  else if(state.selectedPage === 'FoodDetailsPage') renderFoodDetails()
}
function render() {
  selectPageToDisplay()
}
function init() {
  getCategories()
  getAreas()
}

init()