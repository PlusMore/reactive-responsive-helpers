ResponsiveHelpers = {
    screenSize: function() {
        return Session.get('screen');
    },
    isXs: function() {
        return Session.get('screen') === 'xs';
    },
    isSm: function() {
        return Session.get('screen') === 'sm';
    },
    isMd: function() {
        return Session.get('screen') === 'md';
    },
    isLg: function() {
        return Session.get('screen') === 'lg';
    },
    deviceWidth: function() {
        return Session.get('deviceWidth');
    },
    deviceHeight: function() {
        return Session.get('deviceHeight');
    }
}

Template.hiddenXs.helpers({
    notXs: function () {
        return !ResponsiveHelpers.isXs();
    }
});

Template.visibleXs.helpers({
    isXs: function () {
        return ResponsiveHelpers.isXs();
    }
});

Template.hiddenSm.helpers({
    notSm: function () {
        return !ResponsiveHelpers.isSm();
    }
});

Template.visibleSm.helpers({
    isSm: function () {
        return ResponsiveHelpers.isSm();
    }
});

Template.hiddenMd.helpers({
    notMd: function () {
        return !ResponsiveHelpers.isMd();
    }
});

Template.visibleMd.helpers({
    isMd: function () {
        return ResponsiveHelpers.isMd();
    }
});

Template.hiddenLg.helpers({
    notLg: function () {
        return !ResponsiveHelpers.isLg();
    }
});

Template.visibleLg.helpers({
    isLg: function () {
        return ResponsiveHelpers.isLg();
    }
});

