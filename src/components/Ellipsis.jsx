import { Tooltip } from 'antd';
import { useEffect, useRef, useState } from 'react';

/*
  判断是否溢出：当前元素宽度 > 溢出宽度 时显示... && 显示tooltip
  监听元素宽度变化
*/

export default function Ellipsis(props) {
  console.log('props',props);
  const EllipsisRef = useRef(null);
  const [Tooltipdisabled, setTooltipDisabled] = useState(true);

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    const { current } = EllipsisRef;

    if (!current) {
      return
    }

    const resizeObserver = new ResizeObserver(([v]) => {
      const { clientWidth, scrollWidth, innerHTML } = current;

      if (v.target !== current) {
        return;
      }

      setTooltipDisabled(clientWidth >= scrollWidth);
    });

    resizeObserver.observe(current);
  };

  return (
    <Tooltip title={props.title} disabled={Tooltipdisabled}>
      <div ref={EllipsisRef} className="truncate w-100px">
        {props.title}
      </div>
    </Tooltip>
  );
}
