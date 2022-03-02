import { Task } from '@serenity-js/core'
import { Click } from '@serenity-js/web'

import { AutomationPractice } from '../page-objects/AutomationPractice'

export const NavigateTo = {
    fillOutFormsLink: () =>
        Task.where(
            `actor navigates to fill out forms link`,
            Click.on(AutomationPractice.fillOutFormsLink()),
        )
}