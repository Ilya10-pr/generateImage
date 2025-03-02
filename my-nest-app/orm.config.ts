import { DataSourceOptions } from "typeorm";

export const config: DataSourceOptions = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "Ilya10pr",
  database: "mydbtest",
  entities: [__dirname + "/**/*.entity{.ts,.js}"],
  synchronize: true
}

