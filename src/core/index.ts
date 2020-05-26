import * as angular from 'angular';
import { IframeMessageProxy } from 'iframe-message-proxy';

export const coreModule = angular
    .module('coreModule', [])
    .config(() => {
        IframeMessageProxy.listen();
    })
    .name;
