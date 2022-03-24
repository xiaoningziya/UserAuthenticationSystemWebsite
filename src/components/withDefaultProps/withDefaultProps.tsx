/** @file 封装无状态高阶组件：实现组件DefaultProps的封装 */

import * as React from 'react'

function withDefaultProps<P extends object, DP extends Partial<P>>(
  dp: DP,
  component: React.ComponentType<P>,
) {
  component.defaultProps = dp;
  type RequiredProps = Omit<P, keyof DP>;
  return (component as React.ComponentType<any>) as React.ComponentType<
    RequiredProps & DP
  >;
}

export default withDefaultProps