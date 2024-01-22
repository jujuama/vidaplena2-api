export namespace ClientUserApplicationEvent {
  export namespace ClientUserCreated {
    export const key = 'clientUser.application.clientUser.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
