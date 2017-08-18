var newCharacter = {};

console.log("js loaded");

$("#submit-modal-form").on("click", function(event){
    console.log("submit clicked");
  event.preventDefault();
  $('#modal1').modal('close');
  console.log("submit clicked");

  newCharacter = {
    charName: $("#char_name").val().trim(),
    charAffiliation: $("#char_affiliation").val().trim(),
    charCategory: $("#char_category").val().trim(),
    charHP: $("#char_hp").val().trim(),
    charAttack: $("#char_attack").val().trim(),
    charSpeed: $("#char_speed").val().trim(),
    charLocation: $("#char_location").val().trim(),
    charImage: $("#char_image").val().trim()
  };
  console.log(newCharacter);

  console.log("Character name is: " + newCharacter.charName);
  var categoryWell = $("#category-well");
  var characterWell = $("#character-list-well");
  var featuredWell = $("#featured-well");
  var characterCardHTML = "<div class='card horizontal'>\
    <div class='card-stacked'>\
      <div class='card-content'>\
        <div class='row valign-wrapper'>\
          <div class='col s3'>\
            <img class='circle responsive-img valign' src='" + newCharacter.charImage + "'>\
          </div>\
          <div class='col s6'>\
              <h4 class='valign' id='charName'>"+ newCharacter.charName +"</h4>\
          </div>\
          <div id='stat-holder' class='col s3'>\
            <table class='valign'>\
              <tbody class='stat-table'>\
                <tr>\
                  <td><span class='char-stat-title'>HP:</span><span class='chip character-stats'>" + newCharacter.charHP + "</span></td>\
                </tr>\
                <tr>\
                  <td><span class='char-stat-title'>ATT:</span><span class='chip character-stats'>" + newCharacter.charAttack + "</span></td>\
                </tr>\
              </tbody>\
            </table>\
          </div>\
        </div>\
            <table>\
              <tbody>\
                <tr id='card-cat-table'>\
                  <td><span class='char-attr-title'>Affiliation </span><br><span class='chip'>" + newCharacter.charAffiliation + "</span></td>\
                  <td><span class='char-attr-title'>Category </span><br><span class='chip'>" + newCharacter.charCategory + "</span></td>\
                  <td><span class='char-attr-title'>Location </span><br><span class='chip'>" + newCharacter.charLocation + "</span></td>\
                </tr>\
              </tbody>\
            </table>\
        </div>\
      </div>\
    </div>\
  </div>";

  characterWell.append(characterCardHTML);
});

$("#char_name").val(""),
$("#char_affiliation").val("");
$("#char_category").val("");
$("#char_hp").val("");
$("#char_attack").val("");
$("#char_speed").val("");
$("#char_location").val("");
$("#char_image").val("");


//var categoryCardHTML = "<div>\
//       <div class='card horizontal'>\
//         <div class='card-stacked'>\
//           <div class='card-content'>\
//             <p>I am a very simple card. I am good at containing small bits of information.</p>\
//           </div>\
//           <div class='card-action'>\
//             <a href='#'>This is a link</a>\
//           </div>\
//         </div>\
//       </div>\
//     </div>'";
//   var featuredCardHTML = "<div>\
//       <div class='card horizontal'>\
//         <div class='card-stacked'>\
//           <div class='card-content'>\
//             <p>I am a very simple card. I am good at containing small bits of information.</p>\
//           </div>\
//           <div class='card-action'>\
//             <a href='#'>This is a link</a>\
//           </div>\
//         </div>\
//       </div>\
//     </div>'";
//
//   characterWell.append(characterCardHTML);
//   categoryWell.append(categoryCardHTML);
//   featuredWell.append(featuredCardHTML);
