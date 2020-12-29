export default class ValidateItem {
    constructor (public fieldName: string, public validateFunction: (validateValue: any) => boolean) {}
}