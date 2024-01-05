import { useBox } from '@react-three/cannon';

function Cube(props: any) {
  // This hook will return props for your component and a ref to apply to your component
  const [ref] = useBox(() => ({ mass: 1, ...props }));
  
  return (
    <mesh ref={ref} {...props}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={props.color || 'orange'} />
    </mesh>
  );
}

export default Cube; 