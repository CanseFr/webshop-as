import { ArgumentsHost, Catch, HttpStatus } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { Prisma } from '@prisma/client';
import { Response } from 'express';
import { PrismaClientValidationError } from './enum';

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaClientExceptionFilter extends BaseExceptionFilter {
  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    console.error(exception.message);
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const message = exception.message.replace(/\n/g, '');

    switch (exception.code) {
      case PrismaClientValidationError.P2001: {
        const status = HttpStatus.NOT_FOUND;
        response.status(status).json({
          statusCode: status,
          message: 'The record searched for in the where condition does not exist.',
        });
        break;
      }
      case PrismaClientValidationError.P2002: {
        const status = HttpStatus.CONFLICT;
        response.status(status).json({
          statusCode: status,
          message: 'A problem appeared about the creation : Unique Constraint',
        });
        break;
      }
      case PrismaClientValidationError.P2022: {
        const status = HttpStatus.BAD_REQUEST;
        response.status(status).json({
          statusCode: status,
          message: 'Foreign key constraint violation: ' + message,
        });
        break;
      }
      case PrismaClientValidationError.P2025: {
        const status = HttpStatus.CONFLICT;
        response.status(status).json({
          statusCode: status,
          message: 'Unique constraint violation: ' + message,
        });
        break;
      }
      default:
        super.catch(exception, host);
        break;
    }
  }
}
