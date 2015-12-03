app.collections = app.collections || {};

(function () {
    'use strict';

    app.collections.RoomList = app.collections.BaseList.extend({

        model: app.models.Room,

        // Save all of the office items under the 'floor-backbone-Storage' namespace.
        localStorage: new Backbone.LocalStorage('room-backbone-storage')
    });
})();
