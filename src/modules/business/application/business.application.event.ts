export namespace BusinessApplicationEvent {
  export namespace BusinessCreated {
    export const key = 'business.application.business.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
