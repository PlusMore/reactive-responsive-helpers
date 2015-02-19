var detectDeviceSize = function() {
  detectDeviceWidth();
  detectDeviceHeight();
}

var detectDeviceWidth = function() {
  Session.set('deviceWidth', $(document).width()); 
}

var detectDeviceHeight = function() {
  Session.set('deviceHeight', $(document).height()); 
}

Meteor.startup(function() {
  // only perform every 300 ms at most
  detectDeviceSize();

  var deboundedDetect = _.debounce(detectDeviceSize, 300);
  $(window).resize(deboundedDetect);
});

