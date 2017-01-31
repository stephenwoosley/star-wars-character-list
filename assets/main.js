console.log("js loaded")

var charInputName = "Darth Vader";

$(document).ready(function(){

  $('.modal').modal();
  $('select').material_select();
  var categoryWell = $("#category-well");
  var characterWell = $("#character-list-well");
  var featuredWell = $("#featured-well");
  var characterCardHTML = "<div class='card horizontal'>\
    <div class='card-stacked'>\
      <div class='card-content'>\
        <div class='row valign-wrapper'>\
          <div class='col s3'>\
            <img class='circle responsive-img valign' src='assets/images/vader-image.jpeg'>\
          </div>\
          <div class='col s6'>\
              <h4 class='valign'>"+ charInputName +"</h4>\
          </div>\
          <div class='col s3'>\
            <table class='valign'>\
              <tbody class='stat-table'>\
                <tr>\
                  <td><span class='char-stat-title'>HP:</span><span class='chip character-stats'>1000</span></td>\
                </tr>\
                <tr>\
                  <td><span class='char-stat-title'>ATT:</span><span class='chip character-stats'>55</span></td>\
                </tr>\
              </tbody>\
            </table>\
          </div>\
        </div>\
            <table>\
              <tbody>\
                <tr id='card-cat-table'>\
                  <td><span class='char-attr-title'>Affiliation </span><br><span class='chip'>Dark Side</span></td>\
                  <td><span class='char-attr-title'>Category </span><br><span class='chip'>Sith</span></td>\
                  <td><span class='char-attr-title'>Location </span><br><span class='chip'>Death Star</span></td>\
                </tr>\
              </tbody>\
            </table>\
        </div>\
      </div>\
    </div>\
  </div>";
  // var characterCardHTML = <div>\
  //     <div class='card horizontal'>\
  //       <div class='card-stacked'>\
  //         <div class='card-content'>\
  //           <p>I am a very simple card. I am good at containing small bits of information.</p>\
  //         </div>\
  //         <div class='card-action'>\
  //           <a href='#'>This is a link</a>\
  //         </div>\
  //       </div>\
  //     </div>\
  //   </div>'";
  var categoryCardHTML = "<div>\
      <div class='card horizontal'>\
        <div class='card-stacked'>\
          <div class='card-content'>\
            <p>I am a very simple card. I am good at containing small bits of information.</p>\
          </div>\
          <div class='card-action'>\
            <a href='#'>This is a link</a>\
          </div>\
        </div>\
      </div>\
    </div>'";
  var featuredCardHTML = "<div>\
      <div class='card horizontal'>\
        <div class='card-stacked'>\
          <div class='card-content'>\
            <p>I am a very simple card. I am good at containing small bits of information.</p>\
          </div>\
          <div class='card-action'>\
            <a href='#'>This is a link</a>\
          </div>\
        </div>\
      </div>\
    </div>'";

  characterWell.append(characterCardHTML);
  categoryWell.append(categoryCardHTML);
  featuredWell.append(featuredCardHTML);

})
