import $ from 'jquery';
import 'jquery-ui/ui/core';
import 'jquery-ui/ui/widgets/dialog';
import 'jquery-ui/themes/base/all.css';

function initDialog() {
    _getDialogElement().dialog({autoOpen: false});
}

$(() => {
    initDialog();
    $('#openDialog').click(() => {
        if (_getDialogElement().dialog('isOpen')) {
            console.log('open');
            closeDialog();
        }
        else {
            console.log('closed');
            openDialog();
        }
    });
});

const _getDialogElement = () => { return $('#dialog');};
const openDialog = () => { _getDialogElement().dialog('open');};
const closeDialog = () => { _getDialogElement().dialog('close');};
