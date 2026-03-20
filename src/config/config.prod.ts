export default {
  typeorm: {
    dataSource: {
      default: {
        type: 'mysql',
        host: 'mysql',
        port: 3306,
        username: 'root',
        password: 'prod_cool_admin_2024',
        database: 'cool',
        synchronize: true,  // 临时启用自动建表
        logging: false,
        charset: 'utf8mb4',
        cache: true,
        entities: ['**/modules/*/entity'],
      },
    },
  },
  cool: {
    eps: false,
    initDB: true,     // 临时启用初始化
    initMenu: true,   // 临时启用菜单初始化
  },
};
