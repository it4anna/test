app.collections = app.collections || {};

(function () {
    'use strict';

    //It needs to define a model attribute into model instance

    app.collections.BaseList = Backbone.Collection.extend({

        initialize: function () {
        },

        comparator : 'name,'/*function (a, b) {
            var na = a.get('name'),
                nb = b.get('name');

            if (na === nb) return 0;
            return (na < nb) ? -1:1;
        }*/,

        setFilterColl: function (sortAttr, id, collection) {
            var sort = {},
                sortedModels;

            sort[sortAttr] = id;
                sortedModels = collection.where(sort);
            this.models = sortedModels;
            this.length = sortedModels.length;
            this.trigger('change');
        },

        setSelected: function (selectedIds, value) {
            _.each(selectedIds, function(id){
                // this.models.find(function(model){ if (model.id = id )return model}).set('isSelected', value);
                this.get(id).set('isSelected', false);
            }, this);
        }
    });
})();
