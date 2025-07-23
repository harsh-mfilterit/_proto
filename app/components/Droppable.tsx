
import {useDroppable} from '@dnd-kit/core';

export function Droppable(props: any) {
  const {isOver, setNodeRef} = useDroppable({
    id: props.id,
  });
  const style = {
    opacity: isOver ? 0.8 : 1,
    backgroundColor: isOver ? '#f3f4f6' : 'transparent',
    transition: 'all 0.2s ease',
  };

  return (
    <div ref={setNodeRef} style={style} className="min-h-[200px]">
      {props.children}
    </div>
  );
}
  