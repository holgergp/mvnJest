import $ from 'jquery';
import 'jquery-ui/ui/widget';
import 'jquery-ui/ui/widgets/dialog';
import 'jquery-ui/themes/base/all.css';

$(() => {
    initPage();
});

const initDialog = () => _getDialogElement().dialog({autoOpen: false});

const _clickHandler = () => isDialogOpen() ? closeDialog() : openDialog();
const registerClickHandler = () => _getClickableElement().click(_clickHandler);

export const initPage = () => {
    initDialog();
    registerClickHandler();
};
export const isDialogOpen = () => _getDialogElement().dialog('isOpen');
export const openDialog = () => _getDialogElement().dialog('open');
const closeDialog = () => _getDialogElement().dialog('close');
const _getDialogElement = () => $('#dialog');
const _getClickableElement = () => $('#openDialog');

