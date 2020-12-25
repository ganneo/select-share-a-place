export default abstract class Component<H extends HTMLElement, E extends HTMLElement>{
    protected template: HTMLTemplateElement
    protected element: E
    protected hostEle: H

    constructor(templateId: string, hostId:string, insertPosition: 'afterbegin' | 'beforeend') {
        this.template = document.getElementById(templateId)! as HTMLTemplateElement
        this.hostEle = document.getElementById(hostId)! as H
        this.element = document.importNode(this.template.content.firstElementChild!, true)! as E

        this.configure()
        this.attach(insertPosition)
    }

    protected abstract configure(): void

    private attach(position: 'afterbegin' | 'beforeend') {
        this.hostEle.insertAdjacentElement(position, this.element)
    }
}