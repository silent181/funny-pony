import { isFunction } from '../../utils';
import generateTpl from './generateTpl';
import './index.scss';

const defaultConfig = {
    renderNode: 'body',
    minSendRequestInterval: 60 * 1000,
    refreshTime: 1 * 1000,
    originalText: '获取验证码',
    replacedTextPrefix: '重新获取',
    sendCodeText: '登录',
    getCodeURL: '',
    sendCodeURL: '',
    getCodeSuccessCallback: null,
    sendCodeSuccessCallback: null,
    beforeSubmission: null,
    beforeDispose: null
};

class ShortMessageLayer {
    constructor(config) {
        this.setConfig(config);
        this.render();
        this.checkGetCodeState();
        this.bindEvents();
    }

    setConfig(config) {
        this.config = Object.assign({}, defaultConfig, config);
    }

    render() {
        const { renderNode, originalText, sendCodeText } = this.config;
        const tpl = generateTpl(originalText, sendCodeText);
        $(renderNode).append(tpl).addClass('sjs-overflow-hidden');
        $('.J_showMessageTips').hide();
    }

    checkGetCodeState() {
        const { minSendRequestInterval } = this.config;
        const now = Date.now();
        const lastGetCodeTimeStamp = localStorage.getItem('lastGetCodeTimeStamp');
        const currentInterval = now - lastGetCodeTimeStamp;
        if (currentInterval < minSendRequestInterval) {
            this.disableGetCodeBtn(Math.ceil((minSendRequestInterval - currentInterval) / 1000)); // 使用天花板除法，尽量多等一秒
        }
    }

    disableGetCodeBtn(secondsToWait) {
        const { replacedTextPrefix, refreshTime } = this.config;
        const $btn = $('.J_getVerificationCode');
        $btn.addClass('disabled J_disabled');
        $btn.text(`${replacedTextPrefix} ${secondsToWait} s`);
        const timer = setInterval(() => {
            secondsToWait--;
            if (secondsToWait > 0) {
                $btn.text(`${replacedTextPrefix} ${secondsToWait} s`);
            } else {
                clearInterval(timer);
                this.enableGetCodeBtn();
            }
        }, refreshTime);
    }

    enableGetCodeBtn() {
        const { originalText } = this.config;
        const $btn = $('.J_getVerificationCode');
        $btn.removeClass('disabled J_disabled');
        $btn.text(originalText);
    }

    bindEvents() {
        const { minSendRequestInterval, beforeSubmission } = this.config;
        const $getCodeButton = $('.J_getVerificationCode');
        const $codeInput = $('#J_codeInput');
        const $sendCodeButton = $('.J_shortMessageSubmit');

        // * 一分钟只能获取一次验证码
        $getCodeButton.click((e) => {
            const $self = $(e.target);
            if ($self.hasClass('J_disabled')) {
                return;
            }
            recordTimeStamp('lastGetCodeTimeStamp');
            this.disableGetCodeBtn(minSendRequestInterval / 1000);
            this.getCode();
        });

        $sendCodeButton.click(() => {
            const codeVal = $codeInput.val();
            const fourNumberReg = /^\d{4}$/;
            if (fourNumberReg.test(codeVal)) {
                isFunction(beforeSubmission) && beforeSubmission();
                this.sendCode(codeVal);
            } else {
                this.showErrorTips();
            }
        })
    }

    getCode() {
        const { getCodeURL, getCodeSuccessCallback } = this.config;
        $.ajax({
            url: getCodeURL,
            success: (data) => {
                isFunction(getCodeSuccessCallback) && getCodeSuccessCallback(data);
            },
            error: () => {
                alert('系统开小差了，请稍后再试');
            }
        });
    }

    sendCode(code) {
        const { sendCodeURL, sendCodeSuccessCallback } = this.config;
        $.ajax({
            url: sendCodeURL,
            data: { code },
            success: (data) => {
                isFunction(sendCodeSuccessCallback) && sendCodeSuccessCallback(data);
            },
            error: () => {
                alert('系统开小差了，请稍后再试');
            },
            complete: () => {
                $('.J_shortMessageSubmit').length && $('.J_shortMessageSubmit').text(`登录`);
            }
        })
    }

    showErrorTips() {
        $('.J_showMessageTips').show();
        setTimeout(() => $('.J_showMessageTips').fadeOut(), 1000);
    }

    dispose() {
        const { renderNode, beforeDispose } = this.config;
        isFunction(beforeDispose) && beforeDispose();
        $('.J_shortMsgValidationLayer').remove();
        $(renderNode).removeClass('sjs-overflow-hidden');
    }
}

function recordTimeStamp(key) {
    localStorage.setItem(key, Date.now());
}

export default ShortMessageLayer;