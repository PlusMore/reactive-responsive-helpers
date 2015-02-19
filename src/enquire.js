// Reactive responsive helpers
Meteor.startup(function() {
    // xs
    enquire.register("screen and (max-width: 768px)", {
        match : function() {
            Session.set('screen', 'xs');
        }                      
    }); 

    // sm
    enquire.register("screen and (min-width: 768px)", {
        match : function() {
            Session.set('screen', 'sm');
        }    
    });    

    // md
    enquire.register("screen and (min-width: 992px)", {
        match : function() {
            Session.set('screen', 'md');
        }       
    });   

    // lg
    enquire.register("screen and (min-width: 1200px)", {
        match : function() {
            Session.set('screen', 'lg');
        } 
    });   
});