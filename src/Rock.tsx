import { useBox } from '@react-three/cannon';

const Rock = (props: any) => {
  const [ref] = useBox(() => ({ mass: 1, ...props }));
  
  return (
    <mesh ref={ref} {...props}>
      <boxGeometry args={[0.5, 0.5, 0.5]} /> {/* Adjust size as needed */}
      <meshStandardMaterial color={props.color || 'gray'} />
    </mesh>
  );
}

export default Rock;
