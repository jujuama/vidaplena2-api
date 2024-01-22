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
  Business,
  BusinessDomainFacade,
} from 'modules/business/domain'
import { AuthenticationDomainFacade } from 'modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { BusinessApplicationEvent } from './business.application.event'
import {
  BusinessCreateDto,
  BusinessUpdateDto,
} from './business.dto'

@Controller('/v1/businesss')
export class BusinessController {
  constructor(
    private eventService: EventService,
    private businessDomainFacade: BusinessDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.businessDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(
    @Body() body: BusinessCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.businessDomainFacade.create(body)

    await this.eventService.emit<BusinessApplicationEvent.BusinessCreated.Payload>(
      BusinessApplicationEvent
        .BusinessCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:businessId')
  async findOne(
    @Param('businessId') businessId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item =
      await this.businessDomainFacade.findOneByIdOrFail(
        businessId,
        queryOptions,
      )

    return item
  }

  @Patch('/:businessId')
  async update(
    @Param('businessId') businessId: string,
    @Body() body: BusinessUpdateDto,
  ) {
    const item =
      await this.businessDomainFacade.findOneByIdOrFail(
        businessId,
      )

    const itemUpdated = await this.businessDomainFacade.update(
      item,
      body as Partial<Business>,
    )
    return itemUpdated
  }

  @Delete('/:businessId')
  async delete(@Param('businessId') businessId: string) {
    const item =
      await this.businessDomainFacade.findOneByIdOrFail(
        businessId,
      )

    await this.businessDomainFacade.delete(item)

    return item
  }
}
