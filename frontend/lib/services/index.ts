import {AuthService} from './auth/index';
import {ProjectService} from './project/index';
import {DashboardService} from './dashboard/index';

/**
 * 服务层架构说明：
 *
 * 服务层是应用程序与API交互的统一入口，遵循以下原则：
 * 1. 关注点分离 - 每个服务负责一个具体的业务领域
 * 2. 统一入口 - 通过services对象统一导出所有服务
 * 3. 类型安全 - 所有服务的请求和响应都有明确的类型定义
 *
 * 服务层目录结构：
 *
 * /services
 *   /core - 核心基础工具
 *     - api-client.ts - Axios实例配置
 *     - base.service.ts - 服务基类
 *     - types.ts - 通用类型定义
 *   /auth - 认证相关服务
 *     - auth.service.ts - 认证服务实现
 *     - types.ts - 认证相关类型
 *     - index.ts - 导出服务
 *   /project - 项目相关服务
 *     - project.service.ts - 项目服务实现
 *     - types.ts - 项目相关类型
 *     - index.ts - 导出服务
 *   /dashboard - 仪表盘服务
 *     - dashboard.service.ts - 仪表盘服务实现
 *     - types.ts - 仪表盘相关类型
 *     - index.ts - 导出服务
 *
 * 使用示例：
 *
 * // 调用认证服务登录方法
 * import services from '@/lib/services';
 * await services.auth.login('/redirect-path');
 *
 * // 获取用户信息
 * const userInfo = await services.auth.getUserInfo();
 *
 * // 创建项目
 * const result = await services.project.createProjectSafe({
 *   name: '测试项目',
 *   start_time: '2024-01-01T00:00:00Z',
 *   end_time: '2024-12-31T23:59:59Z',
 *   minimum_trust_level: TrustLevel.NEW_USER,
 *   distribution_type: DistributionType.ONE_FOR_EACH,
 *   project_items: ['item1', 'item2', 'item3']
 * });
 *
 * 扩展指南：
 *
 * 1. 创建新服务目录结构
 *    - 在services目录下创建新的目录，如 `/services/project`
 *    - 创建types.ts定义类型
 *    - 创建service.ts实现服务
 *    - 创建index.ts导出服务
 *
 * 2. 实现服务类
 *    - 继承BaseService基类
 *    - 设置basePath指向对应API路径
 *    - 实现服务方法，处理业务逻辑
 *
 * 3. 在此文件中注册服务
 *    - 导入新服务
 *    - 添加到services对象中
 */

/**
 * 服务层统一入口
 */
const services = {
  /**
   * 认证服务
   */
  auth: AuthService,

  /**
   * 项目服务
   */
  project: ProjectService,

  /**
   * 仪表盘服务
   */
  dashboard: DashboardService,
};

export default services;
