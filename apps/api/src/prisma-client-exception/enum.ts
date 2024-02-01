/**
 * PrismaClientValidationError enum represents known Prisma Client request errors.
 */
export enum PrismaClientValidationError {
  /**
   * P2002 - "Unique constraint failed on the {constraint}".
   * Used to handle unique constraint violation errors.
   */
  P2002 = "P2002",

  /**
   * P2001 - ""The record searched for in the where condition ({model_name}.{argument_name} = {argument_value}) does not exist"".
   * Used to handle entity not found.
   */
  P2001 = "P2001",

  /**
   * P2022 - Handle foreign key constraint violation.
   * This error occurs when there is a violation of a foreign key constraint.
   */
  P2022 = "P2022",

  /**
   * P2025 - Handle unique constraint violation.
   * This error occurs when there is a violation of a unique constraint.
   */
  P2025 = "P2025",
}