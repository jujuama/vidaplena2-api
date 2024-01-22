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
  BusinessUserRole,
  BusinessUserRoleDomainFacade,
} from 'modules/businessUserRole/domain'
import { AuthenticationDomainFacade } from 'modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { BusinessUserRoleApplicationEvent } from './businessUserRole.application.event'
import {
  BusinessUserRoleCreateDto,
  BusinessUserRoleUpdateDto,
} from './businessUserRole.dto'

@Controller('/v1/businessUserRoles')
export class BusinessUserRoleController {
  constructor(
    private eventService: EventService,
    private businessUserRoleDomainFacade: BusinessUserRoleDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.businessUserRoleDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(
    @Body() body: BusinessUserRoleCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.businessUserRoleDomainFacade.create(body)

    await this.eventService.emit<BusinessUserRoleApplicationEvent.BusinessUserRoleCreated.Payload>(
      BusinessUserRoleApplicationEvent
        .BusinessUserRoleCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:businessUserRoleId')
  async findOne(
    @Param('businessUserRoleId') businessUserRoleId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item =
      await this.businessUserRoleDomainFacade.findOneByIdOrFail(
        businessUserRoleId,
        queryOptions,
      )

    return item
  }

  @Patch('/:businessUserRoleId')
  async update(
    @Param('businessUserRoleId') businessUserRoleId: string,
    @Body() body: BusinessUserRoleUpdateDto,
  ) {
    const item =
      await this.businessUserRoleDomainFacade.findOneByIdOrFail(
        businessUserRoleId,
      )

    const itemUpdated = await this.businessUserRoleDomainFacade.update(
      item,
      body as Partial<BusinessUserRole>,
    )
    return itemUpdated
  }

  @Delete('/:businessUserRoleId')
  async delete(@Param('businessUserRoleId') businessUserRoleId: string) {
    const item =
      await this.businessUserRoleDomainFacade.findOneByIdOrFail(
        businessUserRoleId,
      )

    await this.businessUserRoleDomainFacade.delete(item)

    return item
  }
}
