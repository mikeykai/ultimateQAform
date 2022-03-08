/* eslint-disable @typescript-eslint/no-empty-function */
import { Given, Then, When } from '@cucumber/cucumber';
import { Ensure, equals } from '@serenity-js/assertions'
import { Actor, Duration } from '@serenity-js/core';
import { isVisible, Navigate, Text,Wait } from '@serenity-js/web';

import { AutomationPractice } from '../page-objects/AutomationPractice';
import { FillOutForms } from '../page-objects/FillOutForms';
import { FillOut } from '../tasks/FillOut';
import { NavigateTo } from '../tasks/NavigateTo';

Given(
    '{actor} is at the ultimateQA automation page', 
    async (actor: Actor) => {
        await actor.attemptsTo(
            Navigate.to(process.env.ULTIMATEQA_BASE_URL))
    }
)

When(
    '{pronoun} want to fill out two forms',
    async (actor: Actor) => {
        await actor.attemptsTo(
            NavigateTo.fillOutFormsLink(),
        )
    }
)

When(
    '{pronoun} fill out the two forms correctly',
    async (actor: Actor) => {
        Wait.upTo(Duration.ofMilliseconds(500000)).until(
            AutomationPractice.captchaQuestion(),
            isVisible()
        )
        const captcha = await Text.of(
            AutomationPractice.captchaQuestion()
        ).answeredBy(actor)
        console.log('Captcha: ' + captcha)
        const total = Number(captcha.split('+')[0]) + Number(captcha.split('+')[1])
        console.log('Total: ' + total)
        await actor.attemptsTo(
            FillOut.forms(total.toString()),
        )
    }
)

Then(
    '{pronoun} should able to submit the two forms successfully',
    async (actor: Actor) => {
        const successMessage = 'Thanks for contacting us'
        await actor.attemptsTo(
            Ensure.that(
                Text.of(FillOutForms.leftVerificationMessage()),
                equals(successMessage)
            ),

            Ensure.that(
                Text.of(FillOutForms.rightVerificationMessage()),
                equals(successMessage)
            )
        )
    }
)