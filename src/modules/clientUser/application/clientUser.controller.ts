import { Request } from 'express'

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common'
import { EventService } from 'libraries/event'
import {
  ClientUser,
  ClientUserDomainFacade,
} from 'modules/clientUser/domain'
import { AuthenticationDomainFacade } from 'modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { ClientUserApplicationEvent } from './clientUser.application.event'
import {
  ClientUserCreateDto,
  ClientUserUpdateDto,
} from './clientUser.dto'

@Controller('/v1/clientUsers')
export class ClientUserController {
  constructor(
    private eventService: EventService,
    private clientUserDomainFacade: ClientUserDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.clientUserDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(
    @Body() body: ClientUserCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.clientUserDomainFacade.create(body)

    await this.eventService.emit<ClientUserApplicationEvent.ClientUserCreated.Payload>(
      ClientUserApplicationEvent
        .ClientUserCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:clientUserId')
  async findOne(
    @Param('clientUserId') clientUserId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item =
      await this.clientUserDomainFacade.findOneByIdOrFail(
        clientUserId,
        queryOptions,
      )

    return item
  }

  @Patch('/:clientUserId')
  async update(
    @Param('clientUserId') clientUserId: string,
    @Body() body: ClientUserUpdateDto,
  ) {
    const item =
      await this.clientUserDomainFacade.findOneByIdOrFail(
        clientUserId,
      )

    const itemUpdated = await this.clientUserDomainFacade.update(
      item,
      body as Partial<ClientUser>,
    )
    return itemUpdated
  }

  @Delete('/:clientUserId')
  async delete(@Param('clientUserId') clientUserId: string) {
    const item =
      await this.clientUserDomainFacade.findOneByIdOrFail(
        clientUserId,
      )

    await this.clientUserDomainFacade.delete(item)

    return item
  }
}
