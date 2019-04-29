/**
 * basic usage, just for demonstration
 */

import ShortMessageLayer from './index.js';

const config = {
    getCodeURL: 'mockURL',
    sendCodeURL: 'mockURL',
    getCodeSuccessCallback: (data) => {
        // handle data here
        alert('get code succeed')
    },
    sendCodeSuccessCallback: (data) => {
        // handle data here
        alert('send code succeed')
    },
    beforeSubmission: () => {},
    beforeDispose: () => {}
};

new ShortMessageLayer(config);