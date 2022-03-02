import { Duration, Task } from '@serenity-js/core';
import { Click, Enter, isVisible, Wait } from '@serenity-js/web'

import { AutomationPractice } from '../page-objects/automationPractice';

export const FillOut = {
    forms: (captcha: string) =>
        Task.where(
            `#actor fill out forms`,
            Wait.upTo(Duration.ofMilliseconds(500000)).until(
                AutomationPractice.leftSubmitButton(),
                isVisible()
            ),
            Enter.theValue('Sophia').into(AutomationPractice.leftNameField()),
            Enter.theValue('I am very happy.').into(
                AutomationPractice.leftMessageField()
            ),
            Click.on(AutomationPractice.leftSubmitButton()),
            Enter.theValue('Megan').into(AutomationPractice.rightNameField()),
            Enter.theValue('I am very excited.').into(
                AutomationPractice.rightMessageField()
            ),
            Enter.theValue(captcha).into(AutomationPractice.captchaAnswer()),
            Click.on(AutomationPractice.rightSubmitButton())
        ),
}