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
  BusinessUser,
  BusinessUserDomainFacade,
} from 'modules/businessUser/domain'
import { AuthenticationDomainFacade } from 'modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { BusinessUserApplicationEvent } from './businessUser.application.event'
import {
  BusinessUserCreateDto,
  BusinessUserUpdateDto,
} from './businessUser.dto'

@Controller('/v1/businessUsers')
export class BusinessUserController {
  constructor(
    private eventService: EventService,
    private businessUserDomainFacade: BusinessUserDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.businessUserDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(
    @Body() body: BusinessUserCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.businessUserDomainFacade.create(body)

    await this.eventService.emit<BusinessUserApplicationEvent.BusinessUserCreated.Payload>(
      BusinessUserApplicationEvent
        .BusinessUserCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:businessUserId')
  async findOne(
    @Param('businessUserId') businessUserId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item =
      await this.businessUserDomainFacade.findOneByIdOrFail(
        businessUserId,
        queryOptions,
      )

    return item
  }

  @Patch('/:businessUserId')
  async update(
    @Param('businessUserId') businessUserId: string,
    @Body() body: BusinessUserUpdateDto,
  ) {
    const item =
      await this.businessUserDomainFacade.findOneByIdOrFail(
        businessUserId,
      )

    const itemUpdated = await this.businessUserDomainFacade.update(
      item,
      body as Partial<BusinessUser>,
    )
    return itemUpdated
  }

  @Delete('/:businessUserId')
  async delete(@Param('businessUserId') businessUserId: string) {
    const item =
      await this.businessUserDomainFacade.findOneByIdOrFail(
        businessUserId,
      )

    await this.businessUserDomainFacade.delete(item)

    return item
  }
}
