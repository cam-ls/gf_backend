import { TypeOrmModuleOptions } from '@nestjs/typeorm';


export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '12345',
    database: 'good_foods',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: false,
};