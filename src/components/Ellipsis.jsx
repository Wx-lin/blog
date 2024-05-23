import { Tooltip } from 'antd';
import { useEffect, useRef, useState } from 'react';

/*
  判断是否溢出：当前元素宽度 > 溢出宽度 时显示... && 显示tooltip
  监听元素宽度变化
*/

export default function Ellipsis({ title }) {
  const EllipsisRef = useRef(null);
  const [Tooltipdisabled, setTooltipDisabled] = useState(false);

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    const { current } = EllipsisRef;

    const resizeObserver = new ResizeObserver(([v]) => {
      const { target } = v;
      const { clientWidth, scrollWidth } = target;

      if (target !== current) {
        return;
      }

      if (clientWidth < scrollWidth) {
        setTooltipDisabled(true);
      }
    });

    resizeObserver.observe(current);
  };

  return (
    <div ref={EllipsisRef} class="truncate">
      <Tooltip title={title}>
        {title}
        {title}{' '}
      </Tooltip>
    </div>
  );
}
