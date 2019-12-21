"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '12345',
    database: 'good_foods',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: false,
};
//# sourceMappingURL=typeorm.config.js.map