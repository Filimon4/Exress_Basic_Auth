export default class UserDto {
    email: any;

    id: any;

    isActivated: any;

    constructor(model: any) {
        this.email = model.email;
        this.id = model._id;
        this.isActivated = model.isActivated;
    }
}
