import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from 'helpers/request'
import { EventService } from 'libraries/event'
import { BusinessUserRoleDomainFacade } from 'modules/businessUserRole/domain'
import { AuthenticationDomainFacade } from 'modules/authentication/domain'
import { BusinessUserRoleApplicationEvent } from './businessUserRole.application.event'
import { BusinessUserRoleCreateDto } from './businessUserRole.dto'

import { BusinessDomainFacade } from '../../business/domain'

@Controller('/v1/businesss')
export class BusinessUserRoleByBusinessController {
  constructor(
    
    private businessDomainFacade: BusinessDomainFacade,
    
    private businessUserRoleDomainFacade: BusinessUserRoleDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

@Get('/business/:businessId/businessUserRoles')
  async findManyBusinessId(
    @Param('businessId') businessId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const business =
      await this.businessDomainFacade.findOneByIdOrFail(
        businessId,
      )

    const items =
      await this.businessUserRoleDomainFacade.findManyByBusiness(
        business,
        queryOptions,
      )

    return items
  }

  @Post('/business/:businessId/businessUserRoles')
  async createByBusinessId(
    @Param('businessId') businessId: string,
    @Body() body: BusinessUserRoleCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, businessId }

    const item = await this.businessUserRoleDomainFacade.create(valuesUpdated)

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
  
}
