export interface UserInterface {
    _id: string,
    phone: string,
    password: string,
    name: string,
    lastname: string,
    urlPhoto: string,
    type: number,
    hierarchy: {
        name: String,
        level: number
    }
}
