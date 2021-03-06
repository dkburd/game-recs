// LEGEND
// app.js = ready function and event listeners
// fetch.js = api fetches
// store.js store and edit values etc
// render.js = generate templates
// display.js = display
// style.css=main css
// media.css= @media changes



function displayContactForm(){
$('.contact').removeClass('hidden')
// stops the hover color from working
// $('#link-button').css('color', '#528eb8')
console.log('display contact form')
}


// // ***DISPLAY RESULTS*** 


function displaySearchResults(responseJson) { 
  enabeStartButtons()
  $('#custom-search').addClass('hidden')
  $('#search').addClass('hidden')
  $('#summary').addClass('hidden')
  console.log(responseJson);  
  let results=responseJson.results
  if (!results){
  failList()
    }else if(results.length===0){  
  failList()
  }else{
    $('#results-list').append(
      `
    <li class='card'>
    <h2> Select One Game</h2>
    </li> 
     `
      )
    $('#search').addClass('hidden')
    $('#results').removeClass('hidden')
    let genres;
    let tags;
    for (let i = 0; i < 10; i++){
    if (!results[i].genres){
      genres=['n/a']
    }else if
      (results[i].genres.length==0){
      genres=['n/a']
      }else{
      genres = results[i].genres.map(g => { return g.name})
    }
   if (!results[i].tags){
      tags=['n/a']
   }else if
      (results[i].tags.length==0){
      tags=['n/a']
   }else{
      tags = results[i].tags.map(t => { return t.name})
   }

// question how to splice out non english tags

      $('#results-list').append(
      `
      <li class='results-list-item card grow v-center'>
      <img src="${results[i].background_image}" class='search-img' alt="${results[i].name} Poster Art">
      <h3>${results[i].name}
      </h3> 
      <div class='solid js-solid'>
      <p>Rating: ${results[i].rating}</p>    
      <p>Genres: ${genres.join(", ")}</p> 
      <p>Tags: ${tags.join(", ")}</p> 
      </div>
      <label for="baseGame">${results[i].name}:</label>
      <input type='radio' class='radio screen-reader' name='baseGame' value='${results[i].id}' required>
      <label for="baseGame" class='screen-reader'>${results.name}:</label>
     </li> 
     `
      )
    }
  $('#results-list').append(
    `
     <li class='card v-center'>
      <div class='button-bar'>
      <input type='submit' class='button' value='Submit'></input>
      <button class='js-restart button'>New Search</button>
      </div>
    </li> 
   `
      )
  };
$(window).scrollTop(0)
gameSelect()
}





function displayGenresOptions(genres){
console.log('sup')
$('#search').addClass('hidden')
$('.alert').addClass('hidden')
$('.fail').addClass('hidden')
$('.warn').addClass('hidden')
$('#summary').addClass('hidden')
$('#js-add-genres').addClass('hidden')
$('#genres').removeClass('hidden')
$('#tags').addClass('hidden')

$('#genres-list').append(
`<h2> Select Game Genres </h2>
<p class='hide'>Genres are broad categories to seperate games by content and theme </p>
`);
for(i=0;i<genres.length;i++){
// $('#genres-list').append(
//   `
//   <li class='screen-reader'>
//   <label for='${genres[i].slug}'>${genres[i].name}</label>
//   <input type='checkbox' id=${genres[i].id}' name='addGenre' value='${genres[i].slug}'>
// </li>
// `)
$('#genres-list').append(
  `
  <li>
  <label for='addGenre' class='screen-reader'>${genres[i].name}>
  ${genres[i].slug}
  </label>
  <input type='checkbox' id=${genres[i].id}' name='addGenre' value='${genres[i].slug}' class='screen-reader'>

  <div class='group aria-hidden='true'>
  <p class='label left'>${genres[i].slug}</p>
  <label class="switch right">
  <input type='checkbox' id=${genres[i].id}' name='addGenres' value='${genres[i].slug}'>
  <span class="slider round"></span>
  </label>
  </div>
  </li>

`)
}
$(window).scrollTop(0)

}

//pickup here checking labels aria hidden screen reader

function displayTagOptions(){
  $('.alert').addClass('hidden')
  $('#genres').addClass('hidden')
  $('#results').addClass('hidden')
  $('#js-more-platforms').removeClass('hidden')
  $('#tags-list').empty();
  $('#tags').removeClass('hidden')
  $('#tags-list').append(
      `<h2>Select Game Tags</h2>
      <p class='hide'>Tags are sub-genres that specify a search</p>

      <li>
      <label for "addTag" class="screen-reader'>2D</label>
      <input type="checkbox" id="2d" class="screen-reader'name="addTag" value="2d">
      
      <div class='group' aria-hidden='true'>
      <p class='label left'>2D</p>
      <label class="switch right">
      <input type="checkbox" id="2d" name="addTag" value="2d">
      <span class="slider round"></span>
      </label>
      </div>
      </li>     
      
      <li>
      <label for "addTag" class="screen-reader'>Battle Royale</label>
      <input type="checkbox" id="battle-royale-2" class="screen-reader'name="addTag" value="battle-royale-2">
      
      <div class='group' aria-hidden='true'>
      <p class='label left'>Battle Royale</p>
      <label class="switch right">
      <input type="checkbox" id="battle-royale-2" name="addTag" value="battle-royale-2">
      <span class="slider round"></span>
      </label>
      </div>
      </li>   


      <li>
      <label for "addTag" class="screen-reader'>Classic</label>
      <input type="checkbox" id="classic" class="screen-reader'name="addTag" value="classic">
      
      <div class='group' aria-hidden='true'>
      <p class='label left'>Classic</p>
      <label class="switch right">
      <input type="checkbox" id="classic" name="addTag" value="classic">
      <span class="slider round"></span>
      </label>
      </div>
      </li>


      <li>
      <label for "addTag" class="screen-reader'>Comedy</label>
      <input type="checkbox" id="comedy" class="screen-reader'name="addTag" value="comedy">
      
      <div class='group' aria-hidden='true'>
      <p class='label left'>Comedy</p>
      <label class="switch right">
      <input type="checkbox" id="comedy" name="addTag" value="comedy">
      <span class="slider round"></span>
      </label>
      </div>
      </li>


      <li>
      <label for "addTag" class="screen-reader'>Cross-Platform Multiplayer</label>
      <input type="checkbox" id="cross-platform-multiplayer" class="screen-reader'name="addTag" value="cross-platform-multiplayer">
      
      <div class='group' aria-hidden='true'>
      <p class='label left'>Cross-Platform Multiplayer</p>
      <label class="switch right">
      <input type="checkbox" id="cross-platform-multiplayer" name="addTag" value="cross-platform-multiplayer">
      <span class="slider round"></span>
      </label>
      </div>
      </li>

  <li>
      <label for "addTag" class="screen-reader'>Exclusive</label>
      <input type="checkbox" id="exclusive" class="screen-reader'name="addTag" value="exclusive">
      
      <div class='group' aria-hidden='true'>
      <p class='label left'>Exclusive</p>
      <label class="switch right">
      <input type="checkbox" id="exclusive" name="addTag" value="exclusive">
      <span class="slider round"></span>
      </label>
      </div>
      </li>

  <li>
      <label for "addTag" class="screen-reader'>Exploration</label>
      <input type="checkbox" id="exploration" class="screen-reader'name="addTag" value="exploration">
      
      <div class='group' aria-hidden='true'>
      <p class='label left'>Exploration</p>
      <label class="switch right">
      <input type="checkbox" id="exploration" name="addTag" value="exploration">
      <span class="slider round"></span>
      </label>
     </div> 
      </li>

  <li>
      <label for "addTag" class="screen-reader'>Female Protagonist</label>
      <input type="checkbox" id="female-protagonist" class="screen-reader'name="addTag" value="female-protagonist">
      
      <div class='group' aria-hidden='true'>
      <p class='label left'>Female Protagonist</p>
      <label class="switch right">
      <input type="checkbox" id="female-protagonist" name="addTag" value="female-protagonist">
      <span class="slider round"></span>
      </label>
      </div>
      </li>

    <li>
      <label for "addTag" class="screen-reader'>First Person</label>
      <input type="checkbox" id="first-person" class="screen-reader'name="addTag" value="first-person">
      
      <div class='group' aria-hidden='true'>
      <p class='label left'>First Person</p>
      <label class="switch right">
      <input type="checkbox" id="first-person" name="addTag" value="first-person">
      <span class="slider round"></span>
      </label>
      </div>
      </li>

         <li>
      <label for "addTag" class="screen-reader'>Great Soundtrack</label>
      <input type="checkbox" id="great-soundtrack" class="screen-reader'name="addTag" value="great-soundtrack">
      
      <div class='group' aria-hidden='true'>
      <p class='label left'>Great Soundtrack</p>
      <label class="switch right">
      <input type="checkbox" id="great-soundtrack" name="addTag" value="great-soundtrack">
      <span class="slider round"></span>
      </label>
      </div>
      </li>

      <li>
      <label for "addTag" class="screen-reader'>Historic</label>
      <input type="checkbox" id="historic" class="screen-reader'name="addTag" value="historic">
      
      <div class='group' aria-hidden='true'>
      <p class='label left'>Historic</p>
      <label class="switch right">
      <input type="checkbox" id="historic" name="addTag" value="historic">
      <span class="slider round"></span>
      </label>
      </div>
      </li>

      <li>
      <label for "addTag" class="screen-reader'>Horror</label>
      <input type="checkbox" id="horror" class="screen-reader'name="addTag" value="horror">
      
      <div class='group' aria-hidden='true'>
      <p class='label left'>Horror</p>
      <label class="switch right">
      <input type="checkbox" id="horror" name="addTag" value="horror">
      <span class="slider round"></span>
      </label>
      </div>
      </li>


      <li>
      <label for "addTag" class="screen-reader'>LGBTQ+</label>
      <input type="checkbox" id="lgbtq-2" class="screen-reader'name="addTag" value="lgbtq-2">
      
      <div class='group' aria-hidden='true'>
      <p class='label left'>LGBTQ+</p>
      <label class="switch right">
      <input type="checkbox" id="lgbtq-2" name="addTag" value="lgbtq-2">
      <span class="slider round"></span>
      </label>
      </div>
      </li>

      <li>
      <label for "addTag" class="screen-reader'>Multiplayer</label>
      <input type="checkbox" id="multiplayer" class="screen-reader'name="addTag" value="multiplayer">
      
      <div class='group' aria-hidden='true'>
      <p class='label left'>Multiplayer</p>
      <label class="switch right">
      <input type="checkbox" id="multiplayer" name="addTag" value="multiplayer">
      <span class="slider round"></span>
      </label>
      </div>
      </li>

      <li>
      <label for "addTag" class="screen-reader'>Online Co-op</label>
      <input type="checkbox" id="online-co-op" class="screen-reader'name="addTag" value="online-co-op">
      
      <div class='group' aria-hidden='true'>
      <p class='label left'>Online Co-op</p>
      <label class="switch right">
      <input type="checkbox" id="online-co-op" name="addTag" value="online-co-op">
      <span class="slider round"></span>
      </label>
      </div>
      </li>

      <li>
      <label for "addTag" class="screen-reader'>Sandbox</label>
      <input type="checkbox" id="sandbox" class="screen-reader'name="addTag" value="sandbox">
      
      <div class='group' aria-hidden='true'>
      <p class='label left'>Sandbox</p>
      <label class="switch right">
      <input type="checkbox" id="sandbox" name="addTag" value="sandbox">
      <span class="slider round"></span>
      </label>
      </div>
      </li>

      <li>
      <label for "addTag" class="screen-reader'>Sci-Fi</label>
      <input type="checkbox" id="sci-fi" class="screen-reader'name="addTag" value="sci-fi">
      
      <div class='group' aria-hidden='true'>
      <p class='label left'>Sci-Fi</p>
      <label class="switch right">
      <input type="checkbox" id="sci-fi" name="addTag" value="sci-fi">
      <span class="slider round"></span>
      </label>
      </div>
      </li>      

      <li>
      <label for "addTag" class="screen-reader'>Singleplayer</label>
      <input type="checkbox" id="singleplayer" class="screen-reader'name="addTag" value="singleplayer">
      
      <div class='group' aria-hidden='true'>
      <p class='label left'>Singleplayer</p>
      <label class="switch right">
      <input type="checkbox" id="singleplayer" name="addTag" value="singleplayer">
      <span class="slider round"></span>
      </label>
      </div>
      </li>  


      <li>
      <label for "addTag" class="screen-reader'>Stealth</label>
      <input type="checkbox" id="stealth" class="screen-reader'name="addTag" value="stealth">
      
      <div class='group' aria-hidden='true'>
      <p class='label left'>Stealth</p>
      <label class="switch right">
      <input type="checkbox" id="stealth" name="addTag" value="stealth">
      <span class="slider round"></span>
      </label>
      </div>
      </li>

      <li>
      <label for "addTag" class="screen-reader'>Survival</label>
      <input type="checkbox" id="survival" class="screen-reader'name="addTag" value="survival">
      
      <div class='group' aria-hidden='true'>
      <p class='label left'>Survival</p>
      <label class="switch right">
      <input type="checkbox" id="survival" name="addTag" value="survival">
      <span class="slider round"></span>
      </label>
      </div>
      </li>

      <li>
      <label for "addTag" class="screen-reader'>Third Person</label>
      <input type="checkbox" id="third-person" class="screen-reader'name="addTag" value="third-person">
      
      <div class='group' aria-hidden='true'>
      <p class='label left'>Third Person</p>
      <label class="switch right">
      <input type="checkbox" id="third-person" name="addTag" value="third-person">
      <span class="slider round"></span>
      </label>
      </li>
`
 )
$(window).scrollTop(0)
}



function displayPlatformOptions(){
  $('.alert').addClass('hidden')
  $('#tags').addClass('hidden')
  $('#genres').addClass('hidden')
  $('#results').addClass('hidden')
  $('#platforms').removeClass('hidden')
  $('#platforms-list').removeClass('hidden')
  $('#js-more-platforms').removeClass('hidden')
  $('#platforms-list').append(
    `<h2>Select Gaming Platforms</h2>
    <li>
    <label for='addPlatform' class='screen-reader'>PS5
    </label>
    <input type='checkbox' id='187' name='addPlatform' 
    value='playstation45' class='screen-reader'>
      
      <div class='group' aria-hidden='true'>
      <p class='label left'>PS5</p>
      <label class="switch right">

      <input type="checkbox" id="187" name="addPlatform" value="playstation5">
      <span class="slider round"></span>
      </label>
      </div>
      </li>

    <li>
    <label for='addPlatform' class='screen-reader'>PS4
    </label>
    <input type='checkbox' id='18' name='addPlatform' 
    value='playstation4' class='screen-reader'>

    <div class='group' aria-hidden='true'>
    <p class='label left'>PS4</p>
    <label class="switch right">
    <input type="checkbox" id="18" name="addPlatform" value="playstation4">    
    <span class="slider round"></span>
    </label>
    </div>
    </li>

    <li>
    <label for='addPlatform' class='screen-reader'>Xbox One
    </label>
    <input type='checkbox' id='1' name='addPlatform' 
    value='xbox-one' class='screen-reader'>
    <div class='group' aria-hidden='true'>
    <p class='label left'>Xbox One</p>
    <label class="switch right">
    <input type="checkbox" id="1" name="addPlatform" value="xbox-one">
    <span class="slider round"></span>
    </label>
    </div>
    </li>

  
    <li>
    <label for='addPlatform' class='screen-reader'>Xbox Series S/X
    </label>
    <input type='checkbox' id='186' name='addPlatform' 
    value='xbox-series-x' class='screen-reader'>
    <div class='group' aria-hidden='true'>
    <p class='label left'>Xbox Series S/X</p>
    <label class="switch right">
    <input type="checkbox"  id="186" name="addPlatform" value="xbox-series-x">
    <span class="slider round"></span>
    </label>
    </li>
    </div>
    <li>

    <label for='addPlatform' class='screen-reader'>Switch
     </label>
     <input type='checkbox' id='7' name='addPlatform' 
     value='nintendo-switch' class='screen-reader'>
    <div class='group' aria-hidden='true'>
      <p class='label left'>Switch</p>
      <label class="switch right">
      <input type="checkbox" id="7" name="addPlatform" value="nintendo-switch">
      <span class="slider round"></span>
      </label>
      </div>
      </li>

    <li>
     <label for='addPlatform' class='screen-reader'>PC
     </label>
     <input type='checkbox' id='4' name='addPlatform' 
     value='pc' class='screen-reader'>
    <div class='group' aria-hidden='true'>
      <p class='label left'>PC</p>
      <label class="switch right">
      <input type="checkbox" id="4" name="addPlatform" value="pc">
      <span class="slider round"></span>
      </label>
      </div>
      </li>

    <li>
     <label for='addPlatform' class='screen-reader'>ios
     </label>
     <input type='checkbox' id='3' name='addPlatform' 
     value='ios' class='screen-reader'>

    <div class='group' aria-hidden='true'>
      <p class='label left'>ios</p>
      <label class="switch right">
      <input type="checkbox" id="3" name="addPlatform" value="ios">
      <span class="slider round"></span>
      </label>
      </div>

      </li>

    <li>
     <label for='addPlatform' class='screen-reader'>Android
     </label>
     <input type='checkbox' id='21' name='addPlatform' 
     value='android' class='screen-reader'>
    
     <div class='group' aria-hidden='true'>
      <p class='label left'>Android</p>
      <label class="switch right">
      <input type="checkbox" id="21" name="addPlatform" value="android">
      <span class="slider round"></span>
      </label>
      </div>

      </li>

`
 )
$(window).scrollTop(0)
}



function displayMoreOptions(platforms){
// todo add platforms.sort()
let oldPlatforms=platforms
let currentGen=['playstation5','playstation4','xbox-one','xbox-series-x', 'nintendo-switch', 'pc', 'ios', 'android']
console.log(oldPlatforms)
  // todo replace this with a filter
  for(i=0; i< currentGen.length;i++){
    for(j=0; j<=8;j++){
      if(oldPlatforms[i].slug==currentGen[j]){
        oldPlatforms.splice(i, 1)
      }
    }
  }
  console.log(oldPlatforms)

$('#js-more-platforms').addClass('hidden')
for(i=0;i<oldPlatforms.length;i++){
  if(oldPlatforms[i].id!==187&oldPlatforms[i].id!==18){
$('#platforms-list').append(
  `
  <li>
  <label for='addPlatform' class='screen-reader'>${oldPlatforms[i].name}
  </label>
  <input type='checkbox' id='${oldPlatforms[i].id}' name='addPlatform' 
  value='${oldPlatforms[i].slug}' class='screen-reader'>

  <div class='group' aria-hidden='true'>
  <p class='label left'>${oldPlatforms[i].name}</p>
  <label class="switch right">
  <input type='checkbox' id='${oldPlatforms[i].id}' name='addPlatform' value='${oldPlatforms[i].slug}'>
  <span class="slider round"></span>
  </label>
  </div>
  </li>
`)
}
$(window).scrollTop(0)
}
}


function displaySelectedOptions(userPlatforms, userGenres){
  console.log('here is displaySelectedOptions(userPlatforms, userGenres)')
  $('#genres').addClass('hidden')
  $('#platforms').addClass('hidden')
  $('#js-more-platforms').addClass('hidden')
  $('#get-list').removeClass('hidden')
  $('#platforms').addClass('hidden')

  if(userGenres.includes(999)){
  $('.selected-list').append(
`
<li>
<h2> No Genres Selected</h2>
<p> This may limit the number of results provided by the search</p>
</li>
`
)
  }else{
$('.selected-list').append(
`
<h2>Selected Genres</h2>
`
)
   for(i=0;i<userGenres.length;i++){
    $('.selected-list').append(
      `
      <p>${userGenres[i]}</>
      `
    )
  }
}
if(userTags.length>0){
  $('.selected-list').append(
   `
   <h2>Selected Tags</h2>
   `
  )
  for(i=0;i<userTags.length;i++){
    $('.selected-list').append(
      `
      <p>${userTags[i]}</>
      `
    )
  }
}
  if(userPlatforms.length===0){
   $('.selected-list').append(
`

<h2> No Gaming Platforms Selected</h2>
<p>PlayStation 5, PlayStation 4, Xbox Series S|X, Xbox One and PC games will be included in this search</p>

`
)
   }else{
  $('.selected-list').append(
`

<h2> Selected Platforms </h2>

`
)
  for(i=0;i<userPlatforms.length;i++){
    $('.selected-list').append(
      `

      <p>${userPlatforms[i]}</>

      `
    )
   
  }
}
 $(window).scrollTop(0)
  }


  function displayDetailedList(detailedList){  
  $('#search').addClass('hidden')
  $('#platforms').addClass('hidden')
  $('#get-list').addClass('hidden')
  $( '#js-more-platforms').addClass('hidden')
  $('#results').addClass('hidden')
  $('#genres').addClass('hidden')
  $('.carousel-container').removeClass('hidden')
  // console.log('before appened detailedList',detailedList, detailedList.length)
  console.log('detailedList',detailedList, detailedList.length)
  console.log('before appened')
  if(detailedList.length===1){
    console.log('one result')
$('.next').prop('disabled',true)
$('.previous').prop('disabled',true)
  }
if(detailedList.length<20){
  showLength=detailedList.length
}else{
  showLength=20
}
carLoop=showLength-1
for (let i = 0; i < showLength; i++){
    $('.indicators').append(
      `
        <button class='dots'></button>
      `
    )
 
    if(detailedList[i].website.length>1){
    $('.display-detailed-list').append(
  `
  <li class='hidden'>
    <div class='link'>
     <a href="${detailedList[i].website}" target='blank'>
      <h2>${detailedList[i].name}</h2>
     </a> 
     <p class='hide'>Visit: ${detailedList[i].website}</p>
    </div>
    <img src="${detailedList[i].background_image}" class="results-img" alt='${detailedList[i].name} Poster Art'>
    <div class='solid'>

    <p class='full'>${detailedList[i].description}</p>
  </div>
  </li>
     `
     )              
}else{
    $('.display-detailed-list').append(
`
<li class='hidden'>
<h2>${detailedList[i].name}</h2> 
<img src="${detailedList[i].background_image}" class="results-img" alt='${detailedList[i].name} Poster Art'>
<div class='solid'>
 <p class='full'>${detailedList[i].description}</p>
 </div>
</li>
`
     )
}
  }
  // watchDots()
  let first=$('.display-detailed-list > li:nth-of-type(1)')
  $(first).removeClass('hidden') 
  $('.indicators > button:nth-of-type(1)').addClass('blue')
  $(window).scrollTop(0)
 }




function navigate(count,prev) {
console.log('count: ', count, 'prev: ',prev)
let finalListItems=$('.display-detailed-list > li')
let editDots=$('.dots').map(function(){
  return this
})
$(finalListItems[count]).removeClass('hidden') 
$(editDots[count]).addClass('blue')
 $(editDots[prev]).removeClass('blue')
$(finalListItems[prev]).addClass('hidden') 
}

function failList(){
  console.log('list failed')
  $('#platforms-list').addClass('hidden')
  $('#get-list').addClass('hidden')
  $('.alert').removeClass('hidden')
  $('.warn').addClass('hidden')
  $('.fail').removeClass('hidden')
  $(window).scrollTop(0)
  // displayGenreOptions(genres)
      }



function reccomendRestart(){
console.log('hello line 427')
$('.alert').removeClass('hidden')
$('.warn').removeClass('hidden')
$('#results').addClass('hidden')
$(window).scrollTop(0)
  }




  function restartSearch(){
    console.log('RESTART HERE')
    location.reload()


  // old way stopped working for carousel dislay count/prev, replac with page refresh
  //   baseGame=[]
  //   baseGameSlug=''
  //   baseGameDev=[]
  //   userGenres=[]
  //   userTags=[]
  //   userPlatforms=[]
  //   userIds=[]
  //   editList=[]
  //   detailedList=[]
  //   filteredList=[]
  //   uniqueMap={}
  //   prev=0
  //   count = 0;
  //   carLoop=0;
  //   prev=0
  //   showLength=''
  //   $('.indicators').empty(); 
  //   $('.display-detailed-list').empty(); 
  //   $('.alert').addClass('hidden')
  //   $('#summary p')[0].innerHTML='Find your next favorite game'
  //   $('#summary').removeClass('hidden')
  //   $('#results').addClass('hidden')
  //   $('#results-list').empty();
  //  $('#platforms-list').empty();
  //   $('#genres-list').empty();
  //   $('#tags-list').empty();
  //   $('.display-detailed-list').empty()
  //   $('.selected-list').empty()
  //   $('#get-list').addClass('hidden')
  //   $('#platforms').addClass('hidden')
  //   $('#genres').addClass('hidden')
  //   $('#genres').addClass('hidden')
  //   $('#tags').addClass('hidden')
  //   $('#platforms').addClass('hidden')
  //   $('#js-more-platforms').addClass('hidden')
  //   $('#search').removeClass('hidden')
  //   $('#custom-search').removeClass('hidden')
  //   $('#js-add-genres').addClass('hidden')
  //   $('.carousel-container').addClass('hidden')
  //   $('#js-search-option').val('')
  //   $('.display-detailed-list').empty()
  //   $('.selectedResults').empty()
  //   disableRecsButtons()
  //   enabeStartButtons()
  //   $('.next').prop('disabled',false)
  //   $('.previous').prop('disabled',false)
  //       console.log('RESTART HAPPENED')


  }


