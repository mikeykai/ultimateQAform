import { By, PageElement } from '@serenity-js/web'

export const FillOutForms = {

    fillOutFormsLink: () =>
        PageElement.located(By.xpath("//a[normalize-space()='Fill out forms']")),

    leftNameField: () =>
        PageElement.located(By.xpath("//input[@id='et_pb_contact_name_0']")),

    leftMessageField: () =>
        PageElement.located(By.xpath("//textarea[@id='et_pb_contact_message_0']")),

    leftSubmitButton: () =>
        PageElement.located(By.xpath("//div[@id='et_pb_contact_form_0']//button[@name='et_builder_submit_button'][normalize-space()='Submit']")),

    rightNameField: () =>
        PageElement.located(By.xpath("//input[@id='et_pb_contact_name_1']")),

    rightMessageField: () =>
        PageElement.located(By.xpath("//textarea[@id='et_pb_contact_message_1']")),

    rightSubmitButton: () =>
        PageElement.located(By.xpath("//div[@id='et_pb_contact_form_1']//button[@name='et_builder_submit_button'][normalize-space()='Submit']")),

    captchaQuestion: () =>
        PageElement.located(By.xpath("//span[@class='et_pb_contact_captcha_question']")),

    captchaAnswer: () =>
        PageElement.located(By.xpath("//input[@name='et_pb_contact_captcha_1']")),

    leftVerificationMessage: () =>
        PageElement.located(By.xpath("//div[@id='et_pb_contact_form_0']//p[contains(text(),'Thanks for contacting us')]")),
       
    rightVerificationMessage: () =>
        PageElement.located(By.xpath("//div[@id='et_pb_contact_form_1']//p[contains(text(),'Thanks for contacting us')]")),
       
}