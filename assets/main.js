console.log("js loaded")

$(document).ready(function(){

  $('.modal').modal();
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
              <h4 class='valign'>Darth Vader</h4>\
          </div>\
          <div class='col s3 chip-collection'>\
              <div class='chip'>Dark Side</div>\
              <div class='chip'>Sith</div>\
          </div>\
        </div>\
            <table>\
              <tbody>\
                <tr>\
                  <td><span class='char-attr-title'>Affiliation </span><br>Dark Side</td>\
                  <td><span class='char-attr-title'>Category </span><br>Sith</td>\
                  <td><span class='char-attr-title'>Location </span><br>Death Star</td>\
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
