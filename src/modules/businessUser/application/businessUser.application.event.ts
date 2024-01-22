export namespace BusinessUserApplicationEvent {
  export namespace BusinessUserCreated {
    export const key = 'businessUser.application.businessUser.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
