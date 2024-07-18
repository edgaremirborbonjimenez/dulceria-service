import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const TypeOrmOptions: TypeOrmModuleOptions = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "1234",
  database: "dulceria",
  logging: false,
  synchronize: true,
  autoLoadEntities: true,
};
