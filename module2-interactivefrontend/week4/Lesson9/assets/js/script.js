var formEl = $('#skills-form');
var nameInputEl = $('#skill-name');
var dateInputEl = $('#datepicker');
var skillsListEl = $('#skills-list');

var printSkills = function (name, date) {
  var listEl = $('<li>');
  var listDetail = name.concat(' on ', date);
  listEl.addClass('list-group-item').text(listDetail);
  listEl.appendTo(skillsListEl);
};

var handleFormSubmit = function (event) {
  event.preventDefault();

  var nameInput = nameInputEl.val();
  var dateInput = dateInputEl.val();

  if (!nameInput || !dateInput) {
    console.log('You need to fill out the form!');
    return;
  }

  printSkills(nameInput, dateInput);

  nameInputEl.val('');
  dateInputEl.val('');
};

formEl.on('submit', handleFormSubmit);

// Add Autocomplete widget here

var skills = ['HTML','PHP','Laravel','Symfony','CakePHP','Guzzle','Javascript','jQuery','CSS','SCSS','SASS','LESS','Bootstrap','Foundation','Semantic UI','Materialize','Ember','React','Angular','Backbone','Underscore','Python','Django','Ruby on Rails','Perl','LUA','R','MySQL','NoSQL','PostgreSQL','MongoDB','Redis/Memcached','Apache/HTTPD','NGINX','LiteSpeed','Lighttpd','NodsJS','Docker','Chef','Vagrant','Hadoop','Jenkins','Git','GitLab','Kubernetes','1337$p3@X']

$(function() {
    $('#skill-name').autocomplete({  
        source:skills, 
        minLength:2,     
        delay:100, 
    }); 
});

// Add Datepicker widget here

$(function() {
    $('#datepicker').datepicker();
});