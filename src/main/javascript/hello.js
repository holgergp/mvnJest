import $ from 'jquery';
import 'jquery-ui/ui/widget';
import 'jquery-ui/ui/widgets/dialog';
import 'jquery-ui/themes/base/all.css';

$(() => {
    initDialog();
    registerClickHandler();
});

export const initDialog = () => _getDialogElement().dialog({autoOpen: false});

const registerClickHandler = () => _getClickableElement().click(() => {
    if (isDialogOpen()) {
        closeDialog();
    }
    else {
        openDialog();
    }
});

export const isDialogOpen = () => _getDialogElement().dialog('isOpen');
const openDialog = () => _getDialogElement().dialog('open');
const closeDialog = () => _getDialogElement().dialog('close');
const _getDialogElement = () => $('#dialog');
const _getClickableElement = () => $('#openDialog');

