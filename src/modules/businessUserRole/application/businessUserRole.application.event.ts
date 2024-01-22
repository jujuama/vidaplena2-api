export namespace BusinessUserRoleApplicationEvent {
  export namespace BusinessUserRoleCreated {
    export const key = 'businessUserRole.application.businessUserRole.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
