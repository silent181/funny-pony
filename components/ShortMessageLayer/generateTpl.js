export default function generateTpl(originalText, sendCodeText) {
    return /*html*/`
        <div class="msg-layer J_shortMsgValidationLayer">
            <div class="msg-container J_messageValidationContainer">
                <div class="msg-showtips J_showMessageTips">
                    <span class="error-icon"></span>
                    <span class="error-text">验证码错误</span>
                </div>
                <div class="msg-content">
                    <label class="phone-icon" for="J_codeInput"></label>
                    <input placeholder="请输入验证码" class="phonenum-input" id="J_codeInput" autocomplete="off">
                    <button class="verification-code-btn J_getVerificationCode">${originalText}</button>
                </div>
                <div class="msg-submit J_shortMessageSubmit">${sendCodeText}</div>
                <div class="msg-bind">
                    <a href="javascript:;">如需修改绑定的手机号请发邮件到silent181@163.com</a>
                </div>
            </div>
        </div>
    `;
}