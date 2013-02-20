//ugly patch to handle jquery deprecated function
$.prototype.live = function() {
    console.log('deprecated');
};

$(function() {
    $('#myTab a:last').tab('show');
    var key = 'tdurden',
    current = null,
    editor = $('#editor');

    editor.hide();

    $('#yaml-editor').blur(function(evt) {
        try {
            var data = jsyaml.load($(this).val());
        } catch (e) {
            console.log('error', e);
            $('#yaml p').html(e.name + ', ' + e.reason + '<br/>' + e.message);
            return;
        }
        $('#yaml p').empty();
        editor.trigger('dataloaded', data);
    });
    var load = function() {
        $.getJSON('/data/' + key, function(data, status, xhr) {
            editor.trigger('dataloaded', data);
            editor.show();
        }).error(function() {
            editor.hide();
        });
    }
    editor.on('dataloaded', function(evt, data) {
        current = data;
    });

    //Mate
    editor.on('dataloaded', function(evt, data) {
        try {
            $('#mate-editor').jsonEditor(data, {change: function() {
                editor.trigger('dataloaded', this.original);
            }});
        } catch (e) {// strange live call for jquery
            console.log(e);
        }
    });

    //yaml
    editor.on('dataloaded', function(evt, data) {
        $('#yaml-editor').val(jsyaml.dump(data));
    });

    //raw
    editor.on('dataloaded', function(evt, data) {
        $('#raw pre').html(JSON.stringify(data, null, 4));
    });

    var loadkey = function() {
        key = $('#key').val();
        load();
        return false;
    };

    $('form').submit(loadkey);
    $('#search').click(loadkey);
    $('#save').click(function() {
        $.ajax('/data/' + key, {
            data: current,
            mimeType: 'application/json',
            success: function() {
                console.log('saved');
            },
            type: 'PUT'
        });
        return false;
    });
    //initial load
    load();
});
