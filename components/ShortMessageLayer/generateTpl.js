const tpl = `
    <div class="sjs-msg-layer J_shortMsgValidationLayer">
        <div class="sjs-msg-container J_messageValidationContainer">
            <div class="sjs-msg-showtips J_showMessageTips">
                <span class="sjs-error-icon"></span>
                <span class="sjs-error-text">验证码错误</span>
            </div>
            <div class="sjs-msg-content">
                <label class="sjs-phone-icon" for="J_codeInput"></label>
                <input placeholder="请输入验证码" class="sjs-phonenum-input" id="J_codeInput" autocomplete="off">
                <button class="sjs-verification-code-btn J_getVerificationCode">originalTextStub</button>
            </div>
            <div class="sjs-msg-bind">
                <a class="J_bindPhoneNumber" href="javascript:;">绑定手机</a>
            </div>
            <div class="sjs-msg-submit J_shortMessageSubmit">
                登&nbsp&nbsp&nbsp&nbsp录
            </div>
        </div>
    </div>
`;

export default tpl;